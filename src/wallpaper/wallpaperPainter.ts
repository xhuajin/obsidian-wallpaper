import Wallpaper from "src/main";
import { paintCampfire } from "./campfire";
import { paintSkyandSea } from "./skyandsea";
import { paintStars1 } from "./stars1";
import { paintStars2 } from "./stars2";
import { paintStars3 } from "./stars3";

export class wallpaperPainter {
  plugin: Wallpaper;
  containerEl: HTMLElement;
  
  constructor(plugin: Wallpaper) {
    this.plugin = plugin;
    this.containerEl = plugin.containerEl;
    if (!this.containerEl) return;
  }

  // 每添加一张新壁纸，只需要在这里添加一个case即可，不需要修改主函数
  paint(id: string) {
    switch (id) {
      case "none":
        this.plugin.resetWallpaper();
        break;
      case "stars1":
        paintStars1(this.plugin);
        break;
      case "stars2":
        paintStars2(this.plugin);
        break;
      case "stars3":
        paintStars3(this.plugin);
        break;
      case "skyandsea":
        paintSkyandSea(this.plugin);
        break;
      case "campfire":
        paintCampfire(this.plugin);
        break;
      default:
        break;
    }
  }
}