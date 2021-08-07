import React from "react"

import * as types from "./types"
import * as styled from "./styled"

const Typography = (props: types.TypographyPropTypes) => {
  const { children, tag = "span", size = "body2", isBold = false } = props

  return (
    <styled.Text as={tag} size={size} isBold={isBold}>
      {children}
    </styled.Text>
  )
}

export default Typography
