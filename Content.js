(function repeatBookmarkletLogic() {
  try {
    // === BEGIN: Paste your bookmarklet code logic here ===
    console.log("Running bookmarklet logic...");

    (function() {
      if (window.__keyLoggerInjected) {
        console.log("Key logger already active.");
        return;
      }
      window.__keyLoggerInjected = true;

      document.addEventListener('keydown', function(event) {
        const keyInfo = {
          key: event.key,
          code: event.code,
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          shiftKey: event.shiftKey,
          metaKey: event.metaKey,
          timestamp: new Date().toISOString(),
        };
        console.log('Key Pressed:', keyInfo);
      });

      console.log("Key logger injected.");
    })();
    // === END: Bookmarklet code ===

  } catch (e) {
    console.error("Error running bookmarklet logic:", e);
  }

  // Try again in 2 seconds
  setTimeout(repeatBookmarkletLogic, 20000);
})();
