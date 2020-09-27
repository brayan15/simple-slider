// @flow
import { hot } from 'react-hot-loader/root'
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
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
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
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
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
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
      </SliderDescription>
      <SliderCaption uppercase>
        <p>caption 3</p>
      </SliderCaption>
    </SliderItem>
  </Slider>
)

export default hot(App)
