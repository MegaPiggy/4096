var game;
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  game = new GameManager(5, 4096, 2, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  if (window.chrome && chrome.runtime && chrome.runtime.id) {
    console.log("Code running in a Chrome extension (content script, background page, etc.)")
    backgroundPage.game = game;
    backgroundPage.syncStorage.loadData();
  } else {
    console.log("Code running on a web page")
  }
});
