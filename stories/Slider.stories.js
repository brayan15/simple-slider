// @flow
import React from 'react'
import { Slider, SliderItem, SliderCaption, SliderTitle, SliderDescription } from '../src/sharedComponents/slider'
import { storiesOf } from '@storybook/react'
// import '../src/styles/main.scss'

storiesOf('Slider', module).add('Default', () => (
  <Slider infitieLoop>
    <SliderItem>
      <SliderTitle>
        <h2>title 1</h2>
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
      <SliderTitle>
        <h2>title 2</h2>
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
  </Slider>
))
