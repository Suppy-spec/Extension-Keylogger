# Extension-Keylogger
A modified version of my original code, except instead of being a bookmarklet, it functions as a Extension!
**This is a keylogger, do not put this on other peoples computers.**
I assume you already know how to put this together correctly, so I'll skip that.
~~Note, this is not built to persist over webpage refreshes, nor send the keys anywhere.~~ This doesnt send the keys anywhere, but now persists over refreshes! Yay! ~~If you wish for it to persist over web refreshes, either contact me or use my bookmarklet version.~~ I would like to say there are no backdoors in this, nor anything malicious. Have Fun! Oh yeah, and I forgot to mention this. The Logs are saved after refreshes too, so I'll list some helpful stuff here:

**Scan logs after refresh**
  (function(){console.log(JSON.parse(localStorage.getItem('logs')));})();
**Clear Logs**
  javascript:(function(){localStorage.removeItem('logs');console.log('Logs cleared from localStorage.');})();

**Note: This is my second github project! Please like it if you enjoyed it!**
This may also be a bit clunky sometimes, I'm still learning alright?

~~Please don't steal my code~~ If u wanna do something with it its fine I really don't care just don't take credit for it.
# **NOTE: INCREDIBLY IMPORTANT**
# YOU **MUST** UPDATE THE MANIFEST AND RE-FORMAT IT A BIT FOR IT TO WORK!
# IF YOU DON'T IT CANNOT BE LOADED UNPACKED!
# IF U CAN'T DO THIS, CONTACT ME.
