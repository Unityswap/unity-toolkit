# 🥞 Unity UIkit

[![Version](https://img.shields.io/npm/v/@unityswap-libs/uikit)](https://www.npmjs.com/package/@unityswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@unityswap-libs/uikit)](https://www.npmjs.com/package/@unityswap-libs/uikit)

Unity UIkit is a set of React components and hooks used to build pages on Unity's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @unityswap-libs/uikit`

## Setup

### Theme

Before using Unity UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@unityswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@unityswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://unityswap.github.io/unity-uikit/)
