# vue-ncu-unit

> 中央大學學院、系所、學位和年級 Vuejs components

[![Travis](https://img.shields.io/travis/yyc1217/vue-ncu-unit.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/yyc1217/vue-ncu-unit/badge.svg?branch=master)](https://coveralls.io/github/yyc1217/vue-ncu-unit?branch=master)
[![Github All Releases](https://img.shields.io/github/downloads/yyc1217/vue-ncu-unit/total.svg)]()
[![npm](https://img.shields.io/npm/dt/vue-ncu-unit.svg)]()
[![npm](https://img.shields.io/npm/v/vue-ncu-unit.svg)]()
[![GitHub release](https://img.shields.io/github/release/yyc1217/vue-ncu-unit.svg)]()
[![npm](https://img.shields.io/npm/l/vue-ncu-unit.svg)]()
[![dependencies](https://david-dm.org/yyc1217/vue-ncu-unit.svg)](https://david-dm.org/yyc1217/vue-ncu-unit)
[![devDependency](https://david-dm.org/yyc1217/vue-ncu-unit/dev-status.svg)](https://david-dm.org/yyc1217/vue-ncu-unit#info=devDependencies)
[![GitHub stars](https://img.shields.io/github/stars/yyc1217/vue-ncu-unit.svg?style=social&label=Star)]()

## 特點 Feature
- 學院、系所、學位和年級自動產生 [demo](https://yyc1217.github.io/vue-ncu-unit/#篩選系所)
- 可切換成英語 [demo](https://yyc1217.github.io/vue-ncu-unit/#英語)
- callback [demo](https://yyc1217.github.io/vue-ncu-unit/#事件)

## 安裝 Install

### npm
```bash
npm install vue-ncu-unit --save
```

## 用法 Usage
```javascript
  import Vue from 'vue'
  import components from 'vue-ncu-unit'

  new Vue({
    el: '#app',
    components: {

      // 學院
      college: components.College,

      // 學位
      degree: components.Degree,

      // 系所
      department: components.Department,

      // 修業年限
      grade: components.Grade,

      // 轉譯ID用
      trans: components.Trans
    }

    // or in es2015...
    components
  })
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run tests
npm run test
```
