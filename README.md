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
$ yarn add react-router-dom json-server
```

Finally, install your Dev-dependencies

```bash
$ yarn add -D tailwindcss@latest autoprefixer@latest postcss@latest
```

### Remember to check package.json file for any detail, and especially if you wish to install specific npm package versions (Recommend!)


## Tough Decisions made during Development:

- The use of Tailwindcss: I understand most engineers have reservations when it comes to using CSS frameworks, I do too, but having such less time, I had to make a tough decision. But I would love to discuss with my team on their preferences so as to have a good understanding of our workflow patterns and avoid friction.
- Due to the time constraint, I delegated more time to logic and pleasing typescript😄, hence made a quite interesting but overall good shifted-replica of the [provided picture](which had pointed edges), but I opted for a rounded edge since they were faster to create, and had a more subtle design for a "Simple UI". But I believe I can do better with more time.
