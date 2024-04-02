import Wallpaper from "src/main";

export function paintStars2(plugin: Wallpaper) {
  plugin.resetWallpaper();
  let wallpaper = plugin.containerEl.querySelector('.wallpaper');
  if (!wallpaper) {
    plugin.resetWallpaper();
    wallpaper = plugin.containerEl.querySelector('.wallpaper');
  }
  // 给 wallpaper 添加一个类
  if (!wallpaper) return;
  wallpaper.classList.add("wallpaper-stars2");

  // Set theme to dark mode
  if (plugin.app.vault.getConfig("theme") === "moonstone") {
    plugin.app.setTheme("obsidian");
    plugin.app.vault.setConfig("theme", "obsidian");
    plugin.app.workspace.trigger("css-change");
  }

  // create stars
  wallpaper.createDiv("stars");
  wallpaper.createDiv("stars1");
  wallpaper.createDiv("stars2");
  wallpaper.createDiv("shooting-stars");

}