// @flow
import * as React from 'react'

type PropsT = {
  children: React.Node
}

const SliderItem = (props: PropsT) => (
  <>
    {props.children}
  </>
)

export default SliderItem
