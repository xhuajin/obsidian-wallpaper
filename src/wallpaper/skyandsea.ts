import Wallpaper from "src/main";

export function paintSkyandSea(plugin: Wallpaper) {
  plugin.resetWallpaper();
  let wallpaper = plugin.containerEl.querySelector('.wallpaper');
  if (!wallpaper) {
    plugin.resetWallpaper();
    wallpaper = plugin.containerEl.querySelector('.wallpaper');
  }
  // 给 wallpaper 添加一个类
  if (!wallpaper) return;
  wallpaper.classList.add("wallpaper-skyandsea");

  // Set theme to light mode
  if (plugin.app.vault.getConfig("theme") === "obsidian") {
    plugin.app.setTheme("moonstone");
    plugin.app.vault.setConfig("theme", "moonstone");
    plugin.app.workspace.trigger("css-change");
  }
  
  // create sky
  const sky = wallpaper.createDiv("sky");
  sky.createDiv();
  sky.createDiv();
  sky.createDiv();

  // create sea
  const sea = wallpaper.createDiv("sea");
  sea.createDiv("sun_set_sea");
  for (let i = 0; i < 29; i++) {
    sea.createDiv();
  }
  
  // create mountain
  const mountain1 = wallpaper.createDiv("mountain1");
  const mountain2 = wallpaper.createDiv("mountain2");
  const mountain3 = wallpaper.createDiv("mountain3");
  mountain1.innerHTML = '<div></div><div></div>';
  mountain2.innerHTML = '<div></div><div></div>';
  mountain3.innerHTML = '<div></div><div></div>';

  // create bird
  const bird = wallpaper.createDiv("bird");
  bird.innerHTML = '<div class="bird1"><div></div><div></div><div></div></div><div class="bird2"><div></div><div></div><div></div></div><div class="bird3"><div></div><div></div><div></div></div>';
  
  // create ship
  const ship = wallpaper.createDiv("ship");
  ship.innerHTML = '<div></div><div></div><div></div>';
  
  // create plane
  const plane = wallpaper.createDiv("plane");
  plane.innerHTML = '<div></div><div></div><div></div>';

  wallpaper.createDiv("tree");
}