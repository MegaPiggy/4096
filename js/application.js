var game;
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  game = new GameManager(5, 4096, 2, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  backgroundPage.game = game;
  backgroundPage.syncStorage.loadData();
});
