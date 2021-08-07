import React from "react"

import Typography from "../Typography"
import * as types from "./types"
import * as styled from "./styled"

/**
 * @TODO tambah prop variant (primary) dan rounded
 */

const Button = (props: types.ButtonPropTypes) => {
  const { children, isActive = false, ...restProps } = props

  return (
    <styled.Button isActive={isActive} {...restProps}>
      <Typography size="body2" weight="semibold">
        {children}
      </Typography>
    </styled.Button>
  )
}

export default Button
