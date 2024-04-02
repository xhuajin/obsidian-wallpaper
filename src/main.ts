import { DEFAULT_SETTINGS, WallpaperSettingTab, WallpaperSettings } from './settings';

import { Plugin } from 'obsidian';
import { wallpaperPainter } from './wallpaper/wallpaperPainter';

declare module "obsidian" {
	interface App {
		isMobile: () => boolean;
		emulateMobile: (toggle: boolean) => void;
		setTheme: (mode: string) => void; // dark mode
		customCss: {
			setTheme: (theme: string) => void; // sets theme
			theme: string; // get current theme
			themes: unknown[]; // get installed themes
			oldThemes: string[]; // get legacy themes (prior to 0.16)
		};
		dom: {
			appContainerEl: {
				addClass: (cssclass: string) => void;
				classList: {
					value: string;
				};
				removeClass: (cssclass: string) => void;
			};
		};
	}
	interface Vault {
		setConfig: (config: string, newValue: string) => void;
		getConfig: (config: string) => string;
	}
}

export default class Wallpaper extends Plugin {
	settings: WallpaperSettings;
  containerEl: HTMLElement;

	async onload() {

    await this.loadSettings();
    this.addSettingTab(new WallpaperSettingTab(this.app, this));
        
    this.initWallpaper();
    this.paint(this.settings.wallpaperId);
  }

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

  initWallpaper() {
    console.log("initWallpaper called")
    this.containerEl = document.querySelector(".app-container") as HTMLElement;
    if (!this.containerEl) return;
    this.containerEl.createDiv("wallpaper");
  }

  resetWallpaper() {
    console.log("resetWallpaper called")
    this.clearWallpaper();
    this.containerEl.createDiv("wallpaper");
  }

  clearWallpaper() {
    console.log("clearWallpaper called")
    if (!this.containerEl.querySelector(".wallpaper")) return;
    this.containerEl.removeChild(this.containerEl.querySelector(".wallpaper") as HTMLElement);
  }

  paint(id: string) {
    console.log("paint called")
    this.resetWallpaper();
    const painter = new wallpaperPainter(this);
    painter.paint(id);
  }
}


