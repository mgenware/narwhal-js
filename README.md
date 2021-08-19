# narwhal-js

[![Build Status](https://github.com/mgenware/narwhal-js/workflows/Build/badge.svg)](https://github.com/mgenware/narwhal-js/actions)
[![npm version](https://img.shields.io/npm/v/narwhal-js.svg?style=flat-square)](https://npmjs.com/package/narwhal-js)
[![Node.js Version](http://img.shields.io/node/v/narwhal-js.svg?style=flat-square)](https://nodejs.org/en/)

Extract different types of text in a localized string

## Installation

```sh
npm i narwhal-js
```

## Usage

```ts
import { parseString } from 'narwhal-js';

parseString('[button]<<Click>> me to [bold]<<Sign in>>');
/**
  [
    {
      type: 'button',
      value: 'Click',
    },
    {
      type: '',
      value: ' me to ',
    },
    {
      type: 'bold',
      value: 'Sign in',
    },
  ]
*/

parseString('[button]<<点>>我[bold]<<登录>>');
/**
  [
    {
      type: 'button',
      value: '点',
    },
    {
      type: '',
      value: '我',
    },
    {
      type: 'bold',
      value: '登录',
    },
  ]
*/
```
