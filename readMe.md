
# Description

A library for converting your sass variables files into a react-native module. Useful for keeping your color scheme consistent between your app and your website. Or if you just want to use sass for your coloring.

# How to use

```js
npm install sass-vars-react-native

sass-vars-react-native './myFile.scss' './myReactVars.js'
```

currently in 0.0.1 It only outputs to the current directory. I suggest adding both to a styles folder. 

# Syntax

Most sass variables are in spinal-tap, but in react we want camelCase, so the parser converts them to camelCase (thanks to [humps](https://github.com/domchristie/humps) ) and removes the $, for example. 
```js
$grey-dark ---> greyDark
```

# Importing variables in react

```js
import {grayDark, grayBase} from './styles/myReactVars.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
    alignItems: 'center',
    justifyContent: 'center',
    button: grayBase
  },
});

```

# Todo

* Add tests
* Add a watch function
* Add production optimizations


Copyright 2017 Nicholas Bowen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.