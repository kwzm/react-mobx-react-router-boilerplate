# React-Mobx-React-router-Boilerplate

A simple boilerplate based on create-react-app but add mobx, react-router, stylelint and so on.

Provide two demos help you quick start.

## Preview

### Home view
![homeView](https://github.com/kwzm/react-mobx-react-router-boilerplate/blob/master/preview/homeView.PNG)

### Todos demo view
![todosView](https://github.com/kwzm/react-mobx-react-router-boilerplate/blob/master/preview/todosView.PNG)

### A products CRUD Demo view
![productsView](https://github.com/kwzm/react-mobx-react-router-boilerplate/blob/master/preview/productsView.PNG)

## Features
### Router
- Add react-router use hash router
### Data storage
- Mobx
- Mobx-react
### Engineering
- All features in create-react-app except test
- HMR
- Mock support(use [mockjs](https://github.com/nuysoft/Mock))
- Use eslint-config-airbnb instead of eslint-config-react-app
- lint code in pre-commit by husky and lint-staged
  - prettier
  - eslint
  - stylelint
- Add .editorconfig
- You can import folders in src directly instead of relative paths like `import SomeComponent from '@/Components/SomeComponent'`
- Code spliting by react-loadable
- Drop console when build
### Style
- Support less
- Add [reset css](https://github.com/jgthms/minireset.css)
### Syntax
- Support decorators
### UI
- Use antd as UI library
- Use antd import on demand
- Add basic layout
- Add exception component to handle 403, 404, 500 error(copy antd-pro)
### Compatibility
- Add isIe9 utility function
### Demo
- Add two demos help you quick start

## Stack
- creat-react-app@2.1.1
- react@16
- mobx@4
- react-router@4
- ant-design@2

## Directory structure
```
my-app
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── .babelrc
├── .editorconfig
├── .eslintrc.json
├── .stylelintrc.json
├── .prettierrc.json
├── .prettierignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── config (webpack config)
├── scripts
└── src
    ├── assets (global assets)
    ├── components (global components)
    ├── config (global config)
    ├── layouts (global layouts)
    ├── routes (first level routes)
    │   ├── 404
    │   ├── demo
    |   │   ├── routes (second level routes)
    |   |   |   ├── products
    |   |   |   ├── todo
    |   |   |   └── todoDetail
    |   │   ├── Demo.js
    |   │   └── index.js
    │   └── home
    ├── stores (global stores)
    ├── utils (global utils)
    ├── App.js
    ├── index.css
    └── index.js
```

## Browser support
  - IE9+
  - Modern browsers

## Getting started

### Installation

`git clone https://github.com/kwzm/react-mobx-react-router-boilerplate.git`

### `npm start`

Runs the app in development mode with mock data.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run start:no-mock`

Runs the app in development mode without mock data.

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Note

- IE9~IE10 don't support dev enviroment.
