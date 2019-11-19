# Vue Typewriter Hook

![](./example/public/vue-usetypewriter2.gif)

Made for Vue 3 but it's not available yet. So you can use 
Vue version 2.* with [@vue/composition-api](https://github.com/vuejs/composition-api) 

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add vue-use-typewriter
```

or NPM:

```sh
npm install vue-use-typewriter --save
```

## Usage

### Basic

```html
todo: add example
```

## API

### Options

| Name       | Type     | Default | Required | Description                                    |
| ---------- | -------- | ------- | -------- | ---------------------------------------------- |
| words      | string[] | []      | Yes      | An array of words you want to be typed.        |
| min        | number   | 10      | No       | Minimum amount in ms of delay between letters. |
| max        | number   | 80      | No       | Maximum amount in ms of delay between letters. |
| wordDelay  | number   | 2000    | No       | Delay in ms between words in the array.        |
| eraseDelay | number   | 1000    | No       | Delay in ms before earsing the word            |

React version: [react-use-typewriter](https://github.com/gielcobben/use-typewriter).

## License

**use-typewriter** is MIT licensed.