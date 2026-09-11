// Migration tombstone at the OLD Flutter worker URL. Never registered by React.
// Existing Flutter clients pick this update up and relinquish offline control.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.clients.claim()
    await self.registration.unregister()
  })())
})
