// In-memory navigation state: resets on browser refresh / page reload,
// but persists across client-side internal link transitions.
let initialIntroCompleted = false;

export function hasCompletedInitialIntro() {
  return initialIntroCompleted;
}

export function markInitialIntroCompleted() {
  initialIntroCompleted = true;
}

// Legacy fallback helper for backwards compatibility
export function checkAndConsumeInitialLoad() {
  return !initialIntroCompleted;
}

