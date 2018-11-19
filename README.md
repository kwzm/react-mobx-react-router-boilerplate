# React-Mobx-React-router-Boilerplate

A simple boilerplate based on create-react-app but add mobx, react-router, stylelint and so on.

## Preview

### Home view
![homeView](https://github.com/kwzm/react-mobx-react-router-boilerplate/blob/master/public/preview/homeView.PNG)

### Demo view
![demoView](https://github.com/kwzm/react-mobx-react-router-boilerplate/blob/master/public/preview/demoView.PNG)

## Features

- All features in create-react-app except test
- HMR
- Support less
- Use eslint-config-airbnb instead of eslint-config-react-app
- lint code in pre-commit by husky
  - prettier
  - eslint
  - stylelint
- Add .editorconfig
- You can import folders in src directly instead of relative paths like `import SomeComponent from 'Components/SomeComponent'`
- Code spliting by react-loadable
- Support decorators
- Use antd as UI library
- Use antd import on demand
- Add basic layout
- Add exception component to handle 403, 404, 500 error(copy antd-pro)
- Add [reset css](https://github.com/jgthms/minireset.css)
- Drop console when build
- Add isIe9 utility function
- Add todo demo help you quick start

## Browser support
  - IE9+
  - Modern browsers
  
## Getting started

### Installation

`git clone https://github.com/kwzm/react-mobx-react-router-boilerplate.git`

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
