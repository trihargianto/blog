import styled from "styled-components"

import { RADIUS_IN_PX_UNIT } from "../../00-tokens/radius"
import * as colors from "../../00-tokens/colors"
import * as types from "./types"

export const Button = styled.button<types.StyledButtonPropTypes>`
  cursor: pointer;
  padding: 10px 20px;
  text-decoration: none;
  color: ${colors.ALIAS.PRIMARY};
  border: 0;
  border-radius: ${RADIUS_IN_PX_UNIT.SM}px;

  background-color: ${props =>
    props.isActive ? colors.NEUTRAL.N100 : colors.ALIAS.WHITE};

  &:hover {
    background-color: ${colors.NEUTRAL.N100};
  }
`
