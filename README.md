# SLIDER
Simple component to create a slider easily, accepts any type of html or jsx content
## Installation

1. Installs all the dependencies necessary to run the project
    ```
    $ yarn add
    ```

2. Runs project
    ```
    $ yarn start
    ```

## Features

-   Responsive
-   Mobile friendly
-   Swipe to slide on mobile
-   Infinite loop
-   Uppercase Title and Caption
-   Light Title, Caption and Description


## Usage

```javascript
import React from 'react'
import {
  Slider,
  SliderItem,
  SliderTitle,
  SliderCaption,
  SliderDescription
} from './sharedComponents/slider'

const App = () => (
  <Slider infiniteLoop>
    <SliderItem>
      <SliderTitle uppercase>
        <h2>title 1</h2>
      </SliderTitle>
      <SliderDescription offset>
        <p>some content be here now</p>
      </SliderDescription>
      <SliderCaption uppercase>
        <p>caption 1</p>
      </SliderCaption>
    </SliderItem>
    <SliderItem>
      <SliderTitle uppercase>
        <h2>title 2</h2>
      </SliderTitle>
      <SliderDescription offset>
        <p>some content be here now</p>
      </SliderDescription>
      <SliderCaption uppercase>
        <p>caption 2</p>
      </SliderCaption>
    </SliderItem>
    <SliderItem>
      <SliderTitle uppercase>
        <h2>title 3</h2>
      </SliderTitle>
      <SliderDescription offset>
        <p>some content be here now</p>
      </SliderDescription>
      <SliderCaption uppercase>
        <p>caption 3</p>
      </SliderCaption>
    </SliderItem>
  </Slider>
)
```

## Component

### `<Slider />`
| property | type | default | required | purpose |
| -------- | ---- | ------- | -------- | ------- |
| **children** | [node] | | **Yes** | Children is a special React property.  Basically, the Slider needs to wrap other jsx components |
| className | [string&#124;null] | null | No | Optional className string that will be appended to the component's className string |
| infiniteLoop | boolean | false | No | Should the slider continue |

### `<SliderItem />`
| property | type | default | required | purpose |
| -------- | ---- | ------- | -------- | ------- |
| **children** | [node] | | **Yes** | Children is a special React property.  Basically, the SliderItem needs to wrap other jsx components |
| className | [string&#124;null] | null | No | Optional className string that will be appended to the component's className string |

### `<SliderTitle />`
| property | type | default | required | purpose |
| -------- | ---- | ------- | -------- | ------- |
| **children** | [node] | | **Yes** | Children is a special React property.  Basically, the SliderTitle needs to wrap other jsx components |
| className | [string&#124;null] | null | No | Optional className string that will be appended to the component's className string |
| uppercase | [boolean] | false | No | It will transform your text to uppercase |
| light | [boolean] | false | No | It will change your color text to white |

### `<SliderCaption />`
| property | type | default | required | purpose |
| -------- | ---- | ------- | -------- | ------- |
| **children** | [node] | | **Yes** | Children is a special React property.  Basically, the SliderCaption needs to wrap other jsx components |
| className | [string&#124;null] | null | No | Optional className string that will be appended to the component's className string |
| uppercase | [boolean] | false | No | It will transform your text to uppercase |
| light | [boolean] | false | No | It will change your color text to white |

### `<SliderDescription />`
| property | type | default | required | purpose |
| -------- | ---- | ------- | -------- | ------- |
| **children** | [node] | | **Yes** | Children is a special React property.  Basically, the SliderDescription needs to wrap other jsx components |
| className | [string&#124;null] | null | No | Optional className string that will be appended to the component's className string |
| offset | [boolean] | false | No | It will add padding for component |
| light | [boolean] | false | No | It will change your color text to white |


## Available Scripts

In the project directory, you can run:

1. #### `$ yarn add`

    Installs all the dependencies necessary to run the project

2. ####  `$ yarn start`

    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.

3. #### `$ yarn build`

    Builds the app for production to the `build` folder.<br />
    It correctly bundles React in production mode and optimizes the build for the best performance.
    Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

4. #### `$ yarn lint`

    Runs ESlint in `src` folder and show errors in terminal, ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs

5. #### `$ yarn lint:fix`

    Runs ESlint and automatically fix problems in `src` folder

6. #### `$ yarn flow`

    Runs `flow`, flow is a static type checker for your JavaScript code. It lets you annotate the variables, functions, and React components with a special type syntax, and catch mistakes early.
    Flow allows us to easily add static type checking to our JavaScript. Flow will help you prevent bugs and allow for better code documentation among other things.

7. #### `$ yarn test`

    Runs `test`. Launches the test runner in the interactive watch mode.

8. #### `$ yarn storybook`

    Runs `storybook`, storybook is an open source tool for developing UI components, it provides a sandbox to build UI components in isolation so you can develop hard-to-reach states and edge cases.




