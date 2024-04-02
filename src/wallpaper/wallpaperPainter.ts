import Wallpaper from "src/main";
import { paintSkyandSea } from "./skyandsea";
import { paintStars } from "./stars";

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
      case "stars":
        paintStars(this.plugin);
        break;
      case "skyandsea":
        paintSkyandSea(this.plugin);
        break;
      default:
        break;
    }
  }
}