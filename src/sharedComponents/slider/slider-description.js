// @flow
import * as React from 'react'

type PropsT = {
  children: React.Node,
  offset: boolean
}

const SliderDescription = (props: PropsT) => (
  <div className={`slider__item-description ${props.offset ? 'p-y-4 p-x-3' : ''}`}>
    {props.children}
  </div>
)

SliderDescription.defaultProps = {
  offset: false
}

export default SliderDescription
