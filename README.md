# Obsidian Wallpaper

I like to see all kinds of beautiful front-end works made by great coder on [codepen.io](https://codepen.io/), and I really want to see these effects in my vault, so I tried to write this plugin. 

This plugin can add some pretty live wallpapers to your vault. By modifying the source code downloaded from [codepen.io](https://codepen.io/), I have successfully implemented five projects in the library so far.

- Sky and Sea: [CodePen Home
CSS Illustration 'Sky and Sea'](https://codepen.io/WhitePallet/details/YYmZEK)
- Stars1: [Parallax Star background in CSS](https://codepen.io/sarazond/pen/LYGbwj)
- Stars2: [CodePen Home
Stars #Codevember_08](https://codepen.io/johnbgarcia/pen/qqdgGp)
- Stars3: [A sky full of stars](https://codepen.io/jlnljn/pen/gRrOxM)
- Campfire: [Campfire Colony](https://codepen.io/jackiezen/pen/gOOgvOO?editors=1000)

ps. please ignore the names I gave them, as they are to be put in the Settings, I don't think of too long names.

## Screenshot and Video

### Sky And Sea

![skyandsea](assets/skyandsea.png)

![skyandsea](https://github.com/xhuajin/obsidian-wallpaper/assets/114134574/29a87435-0e21-42ca-b4d4-43911fa04b18)

### Stars1

![stars1](assets/stars1.png)

![stars1](https://github.com/xhuajin/obsidian-wallpaper/assets/114134574/173a7578-d43d-4937-bb83-a2b76dbbc11a)

### Stars2

![stars2](assets/stars2.png)

![stars2](https://github.com/xhuajin/obsidian-wallpaper/assets/114134574/3d0de151-e7b2-4b75-a5c5-336e71078bce)

### Stars3

![stars3](assets/stars3.png)

![stars3](https://github.com/xhuajin/obsidian-wallpaper/assets/114134574/072aa5b7-2335-48b3-b6ae-9a564590e2ff)

### Campfire

![campfire](assets/campfire.png)

![campfire](https://github.com/xhuajin/obsidian-wallpaper/assets/114134574/d0db5be0-66ac-4565-9782-e9cd0f8a9dd9)

## Setting

There is currently only one setting for switching wallpapers.

![setting-tab](assets/setting.png)

## Others

If this plugin makes you like your library more, please give me a ⭐star for encouragement.😗. 

If you want to add another wallpaper, you can raise an issue. Or if you have strong DIY skills, you can

- Fork this repository.
- npm i, npm run dev
- Add the project's css to 'src/style/*'.
- Add a function to paint the wallpaper in 'src/wallpaper/*'. Add a switch case in 'src/wallpaper/wallpaperPainter.ts'
- Add an option to toggle to new wallpaper in 'settings.js'.