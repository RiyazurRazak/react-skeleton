# react-skeleton

> React based Skeleton animation component with full customisable themes.

[![NPM](https://img.shields.io/npm/v/react-skeleton-loader.svg)](https://www.npmjs.com/package/react-skeleton-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
with npm

```bash
npm install --save @riyazurrazak/react-skeleton
```

with yarn

```bash
yarn add @riyazurrazak/react-skeleton
```

## Usage

example: [Exapmle](https://github.com/RiyazurRazak/react-skeleton-loader/tree/main/example)

```tsx
import React from 'react'

import {SkeletonWrapper} from '@riyazurrazak/react-skeleton'

export const Example = ()=>{

  return(
     <SkeletonWrapper isLoading={true}>
          {/** inner content */}
          <p>Async content</p>  
     </SkeletonWrapper>
  )
}
```

# Props

| Property  | Type  |Default   |Description |
| ------------ | ------------ | ------------ | ------------ |
|  isLoading | bool  | false  | Set true to loading effect. Set false to render elements inside the SkeletonWrapper   |
|className   | string  | null  | Custom class to make the skeleton to style as you want  |
|  width | string  | 'auto'  | width of your skeleton  |
| height  |string   | 'auto'  | height of your skeleton  |
| circle  |bool   | false  | make skeleton as circle. Note: width and height must be eqaul  |
| wave  | bool  |false   |make skeleton as wave animation  |
| backgroundColor  |string   | rgba(0, 0, 0, 0.11)  | background of the skeleton  |
| highlightColor  |string   |rgba(0, 0, 0, 0.04)   | highlightedcolor of the skeleton. Will be effect if wave property is true  |


## License

MIT © [RiyazurRazak](https://github.com/RiyazurRazak)
