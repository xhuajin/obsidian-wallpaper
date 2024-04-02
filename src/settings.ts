import { App, PluginSettingTab, Setting } from 'obsidian';

import Wallpaper from './main';

interface ObjectKeys {
  [key: string]: any
}

export interface WallpaperSettings extends ObjectKeys {
  wallpaperId: string;

} 

export const DEFAULT_SETTINGS: WallpaperSettings = {
  wallpaperId: "none",
}


export class WallpaperSettingTab extends PluginSettingTab {
  plugin: Wallpaper;
  
  constructor(app: App, plugin: Wallpaper) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl('h1', { text: 'Wallpaper Board' });

    new Setting(containerEl)
      .setName('Wallpaper')
      .setDesc('Choose a wallpaper')
      .addDropdown(dropdown => {
        dropdown.addOption("none", "None");
        dropdown.addOption("stars1", "Stars1");
        dropdown.addOption("stars2", "Stars2");
        dropdown.addOption("stars3", "Stars3");
        dropdown.addOption("skyandsea", "Sky and Sea");
        dropdown.addOption("campfire", "Campfire");
        dropdown.setValue(this.plugin.settings.wallpaperId);
        dropdown.onChange(async (value) => {
          if (value == this.plugin.settings.wallpaperId) return;
          this.plugin.paint(value);
          this.plugin.settings.wallpaperId = value;
          await this.plugin.saveSettings();
        });
      });
      
  }
}
