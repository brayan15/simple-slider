// @flow
import * as React from 'react'

type PropsT = {
  children: React.Node
}

const SliderTitle = (props: PropsT) => (
  <div className='slider__item-title'>
    {props.children}
  </div>
)

export default SliderTitle
