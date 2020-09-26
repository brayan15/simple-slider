// @flow
import { hot } from 'react-hot-loader/root'
import React from 'react'
import moon from './statics/moon.jpg'
import { Slider, SliderItem, SliderCaption, SliderTitle, SliderDescription } from './sharedComponents/slider'

const App = () => (
  <Slider infitieLoop>
    <SliderItem>
      <SliderTitle>
        <h2>title</h2>
      </SliderTitle>
      <SliderDescription offset>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
        <p>some content be here now</p>
      </SliderDescription>
      <SliderCaption>
        <p>caption 1</p>
      </SliderCaption>
    </SliderItem>
    <SliderItem>
      <SliderDescription>
        <img src={moon} alt='moon' />
      </SliderDescription>
    </SliderItem>
  </Slider>
)

export default hot(App)
