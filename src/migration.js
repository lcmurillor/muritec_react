// Only retire Flutter registrations in this site's own deployment scope.
// This web app never registers a service worker or creates offline caches.
export async function retireFlutterWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const scope = new URL(import.meta.env.BASE_URL, window.location.origin)
      .href;
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      registrations
        .filter((registration) => {
          const worker =
            registration.active ||
            registration.waiting ||
            registration.installing;
          return (
            registration.scope === scope &&
            worker &&
            new URL(worker.scriptURL).pathname.endsWith(
              "/flutter_service_worker.js",
            )
          );
        })
        .map((registration) => registration.unregister()),
    );
  } catch {
    // Restricted/private browser storage must not prevent the site from loading.
  }
}

// Preserve bookmarks from the old Flutter hash router.
export function migrateLegacyHash() {
  const routes = {
    "#/": "#inicio",
    "#/experince": "#experiencia",
    "#/experience": "#experiencia",
    "#/contactus": "#contacto",
  };
  const destination =
    routes[window.location.hash.replace(/\/$/, "")] ||
    (window.location.hash === "#/" ? "#inicio" : null);
  if (destination)
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${destination}`,
    );
}
