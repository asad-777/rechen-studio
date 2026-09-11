// In-memory navigation state: resets on browser refresh / page reload,
// but persists across client-side internal link transitions.
let isInitialSiteLoad = true;

export function checkAndConsumeInitialLoad() {
  if (isInitialSiteLoad) {
    isInitialSiteLoad = false;
    return true;
  }
  return false;
}
