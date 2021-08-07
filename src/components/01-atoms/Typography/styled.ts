import styled, { css } from "styled-components"

import {
  FONT_SIZE_ALIASES,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../00-tokens/typography"
import * as types from "./types"

export const Text = styled.span<types.StyledSpanPropTypes>`
  ${props => {
    const { size = "body2", isBold = false } = props

    const fontWeight = isBold ? FONT_WEIGHT.bold : FONT_WEIGHT.normal

    switch (size) {
      case "heading1":
        return generateTextCSS(FONT_SIZE_ALIASES.heading1, fontWeight)
        break
      case "heading2":
        return generateTextCSS(FONT_SIZE_ALIASES.heading2, fontWeight)
        break
      case "heading3":
        return generateTextCSS(FONT_SIZE_ALIASES.heading3, fontWeight)
        break
      case "heading4":
        return generateTextCSS(FONT_SIZE_ALIASES.heading4, fontWeight)
        break
      case "heading5":
        return generateTextCSS(FONT_SIZE_ALIASES.heading5, fontWeight)
        break
      case "heading6":
        return generateTextCSS(FONT_SIZE_ALIASES.heading6, fontWeight)
        break
      case "body1":
        return generateTextCSS(FONT_SIZE_ALIASES.body1, fontWeight)
        break
      case "body2":
        return generateTextCSS(FONT_SIZE_ALIASES.body2, fontWeight)
        break
    }
  }}
`

function generateTextCSS(fontSizeInRem: number, fontWeight: number) {
  return css`
    font-size: ${fontSizeInRem}rem;
    line-height: ${LINE_HEIGHT};
    font-weight: ${fontWeight};
  `
}
