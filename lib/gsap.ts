"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

function registerScrollTrigger() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Shared DOM id for the scroll range HeroCharacter's dangle is scrubbed against. */
export const TRACK_ID = "character-track";

/** Named duration/ease tokens per animation role, for useScrollTimeline builders. */
export const DURATION = {
  lineDraw: 0.6,
  photoPop: 1.1,
} as const;

export const EASE = {
  lineDraw: "power2.out",
  photoPop: "elastic.out(1, 0.55)",
} as const;

/**
 * Shared lifecycle for every scroll animation in this app: registers ScrollTrigger once,
 * honors prefers-reduced-motion, and scopes a gsap.context to `ref` so `ctx.revert()`
 * cleans up everything the setup function creates.
 */
function useGsapEffect<T extends Element>(
  ref: RefObject<T | null>,
  setup: () => void,
  deps: unknown[]
) {
  useEffect(() => {
    registerScrollTrigger();
    if (prefersReducedMotion() || !ref.current) return;

    const ctx = gsap.context(setup, ref as RefObject<Element>);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

type ScrollScrubOptions = {
  /** DOM id of the element whose scroll range drives the scrub. Resolved internally. */
  triggerId: string;
  start?: string;
  end?: string;
  /** Scrub smoothing — higher lags more behind scroll position. */
  scrub?: number;
};

type ScrollScrubHelpers = {
  gsap: typeof gsap;
  trigger: Element;
  /** Merges vars with the fixed ease + scrollTrigger config — always use this, never build scrollTrigger by hand. */
  scrollVars: (vars: gsap.TweenVars) => gsap.TweenVars;
};

/**
 * A single tween whose progress is scrubbed to scroll position against an external trigger
 * element. Ease is always "none" — scrub tweens must not ease, GSAP's scrub already smooths
 * the interpolation — so it's baked into `scrollVars` rather than exposed as an option.
 */
export function useScrollScrub<T extends Element>(
  ref: RefObject<T | null>,
  buildTween: (helpers: ScrollScrubHelpers) => void,
  { triggerId, start = "top top", end = "bottom bottom", scrub = 0.6 }: ScrollScrubOptions
) {
  useGsapEffect(
    ref,
    () => {
      const trigger = document.getElementById(triggerId);
      if (!trigger) return;

      const scrollVars = (vars: gsap.TweenVars): gsap.TweenVars => ({
        ...vars,
        ease: "none",
        scrollTrigger: { trigger, start, end, scrub },
      });

      buildTween({ gsap, trigger, scrollVars });
    },
    [triggerId, start, end, scrub]
  );
}

type ScrollTimelineOptions = {
  start?: string;
  toggleActions?: string;
};

type ScrollTimelineTokens = {
  duration: typeof DURATION;
  ease: typeof EASE;
};

/**
 * A discrete play-once/reverse timeline driven by ScrollTrigger's toggleActions, scoped to
 * `ref` itself as the trigger. Named duration/ease tokens are handed to the builder per
 * animation role rather than left for each caller to invent generic values.
 */
export function useScrollTimeline<T extends Element>(
  ref: RefObject<T | null>,
  buildTimeline: (timeline: gsap.core.Timeline, tokens: ScrollTimelineTokens) => void,
  { start = "top 75%", toggleActions = "play none none reverse" }: ScrollTimelineOptions = {}
) {
  useGsapEffect(
    ref,
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current!,
          start,
          toggleActions,
        },
      });
      buildTimeline(tl, { duration: DURATION, ease: EASE });
    },
    [start, toggleActions]
  );
}

/**
 * A plain timeline that plays once on mount — no ScrollTrigger, for content that's
 * already in view at load (e.g. the hero heading). Shares the same context/cleanup/
 * reduced-motion lifecycle as the scroll-driven hooks.
 */
export function useIntroReveal<T extends Element>(
  ref: RefObject<T | null>,
  buildTimeline: (timeline: gsap.core.Timeline) => void
) {
  useGsapEffect(
    ref,
    () => {
      const tl = gsap.timeline();
      buildTimeline(tl);
    },
    []
  );
}

export { gsap, ScrollTrigger };
