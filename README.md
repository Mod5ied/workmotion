# Workmotion Dummy Employee Management
 A dummy employee management system, built with React and TypeScript

## Scaffolding your App with Vite and Yarn {npm if you choose}

To install [Vite](https://npmjs.com/package/vite)
```bash
$ yarn add vite || npm i vite
```

### Whats Included as Dependencies
- React 17 with TypeScript 😄
- A basic API client powered by JSON-server
- A basic [ESLint](https://github.com/eslint/eslint) configuration
- React Router ^6.3.0

### Extra

- Tailwindcss for styling.
- Some assets such as icons from [HeroIcons](https://heroicons.com/), some looong SVGs.
- Some form elements from [MUI](https://mui.com/material-ui/react-text-field)

## Setting Up Your Project
- To scaffold your react app and get it running with vite, run the commands in sequence:

```bash
$ yarn create vite workmotion --template react-ts 
$ cd workmotion
$ yarn install || yarn    /*installs req. dependencies*/
$ yarn dev
```

- Install Other Core Dependencies (ReactRouter, JSON-server):

```bash
$ yarn add react-router-dom json-server tailwindcss@latest autoprefixer@latest postcss@latest
```

Last but not least, install as Dev-dependencies or CoreDeps and initialize tailwind and postcss.

```bash
$ yarn add -D @mui/material @emotion/react @emotion/styled
```
```bash
$ npx tailwindcss init -p  /* initializes tailwind and postcss configs */
````
Finally, edit the tailwind.config to purge all js, ts, jsx and tsx files on bundle.

```bash
$ content["./src/**/*.{js,jsx,ts/tsx}"]
```

### Remember to check package.json file for any detail, and especially if you wish to install specific npm package versions (Recommend!)


## Tough Decisions made during Development:

- The use of Tailwindcss and MUI: I understand most engineers have reservations when it comes to using CSS frameworks, I do too. But then, I encourage a discussion with the team on their preferences so as to have a good understanding of our workflow patterns and avoid friction.
