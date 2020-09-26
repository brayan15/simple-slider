// @flow
import * as React from 'react'

type PropsT = {
  children: React.Node
}

const SliderCaption = (props: PropsT) => (
  <div className='slider__item-caption'>
    {props.children}
  </div>
)

export default SliderCaption
