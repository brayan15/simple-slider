// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Slider,
  SliderItem,
  SliderTitle,
  SliderCaption,
  SliderDescription
} from '../src/sharedComponents/slider'

storiesOf('Slider', module)
  .add('Default', () => (
    <Slider>
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
        </SliderDescription>
        <SliderCaption>
          <p>caption 2</p>
        </SliderCaption>
      </SliderItem>
      <SliderItem>
        <SliderTitle>
          <h2>title 3</h2>
        </SliderTitle>
        <SliderDescription offset>
          <p>some content be here now</p>
          <p>some content be here now</p>
          <p>some content be here now</p>
          <p>some content be here now</p>
          <p>some content be here now</p>
        </SliderDescription>
        <SliderCaption>
          <p>caption 3</p>
        </SliderCaption>
      </SliderItem>
    </Slider>
  ))
  .add('InfiniteLoop', () => (
    <Slider infiniteLoop>
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
        </SliderDescription>
        <SliderCaption>
          <p>caption 2</p>
        </SliderCaption>
      </SliderItem>
      <SliderItem>
        <SliderTitle>
          <h2>title 3</h2>
        </SliderTitle>
        <SliderDescription offset>
          <p>some content be here now</p>
          <p>some content be here now</p>
          <p>some content be here now</p>
          <p>some content be here now</p>
          <p>some content be here now</p>
        </SliderDescription>
        <SliderCaption>
          <p>caption 3</p>
        </SliderCaption>
      </SliderItem>
    </Slider>
  ))
  .add('Uppercase title and caption and infiniteLoop', () => (
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
  ))
  .add('Light', () => (
    <div style={{ background: 'black'}}>
      <Slider infiniteLoop>
        <SliderItem>
          <SliderTitle uppercase light>
            <h2>title 1</h2>
          </SliderTitle>
          <SliderDescription offset light>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
          </SliderDescription>
          <SliderCaption uppercase light>
            <p>caption 1</p>
          </SliderCaption>
        </SliderItem>
        <SliderItem>
          <SliderTitle uppercase light>
            <h2>title 2</h2>
          </SliderTitle>
          <SliderDescription offset light>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
          </SliderDescription>
          <SliderCaption uppercase light>
            <p>caption 2</p>
          </SliderCaption>
        </SliderItem>
        <SliderItem>
          <SliderTitle uppercase light>
            <h2>title 3</h2>
          </SliderTitle>
          <SliderDescription offset light>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
            <p>some content be here now</p>
          </SliderDescription>
          <SliderCaption uppercase light>
            <p>caption 3</p>
          </SliderCaption>
        </SliderItem>
      </Slider>
    </div>
  ))
