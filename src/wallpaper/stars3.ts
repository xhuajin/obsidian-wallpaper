import Wallpaper from "src/main";

export function paintStars3(plugin: Wallpaper) {
  plugin.resetWallpaper();
  let wallpaper = plugin.containerEl.querySelector('.wallpaper');
  if (!wallpaper) {
    plugin.resetWallpaper();
    wallpaper = plugin.containerEl.querySelector('.wallpaper');
  }
  // 给 wallpaper 添加一个类
  if (!wallpaper) return;
  wallpaper.classList.add("wallpaper-stars3");
  const sky = wallpaper.createDiv("sky");

  // Set theme to dark mode
  if (plugin.app.vault.getConfig("theme") === "moonstone") {
    plugin.app.setTheme("obsidian");
    plugin.app.vault.setConfig("theme", "obsidian");
    plugin.app.workspace.trigger("css-change");
  }

  // create stars
  const Colors = ["#f5d76e", "#f7ca18", "#f4d03f", "#ececec", "#ecf0f1", "#a2ded0"];
  const numStars = 200;
  
  for (let i = 0; i < numStars; i++) {
    const color = Colors[Math.floor(Math.random() * Colors.length)];
    const star = sky.createSpan();
    star.style.left = Math.floor(Math.random() * 100) + "vw";
    star.style.top = Math.floor(Math.random() * 100) + "vh";
    star.style.width = Math.random() * 2 + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = color;
  }

  setTimeout(() => {
    sky.childNodes.forEach((star: HTMLElement) => {
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
    });
  }, 1);
  
  setInterval(() => {
    sky.childNodes.forEach((star: HTMLElement) => {
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
    });
  }, 100000);
}