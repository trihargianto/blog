import styled from "styled-components"

import { SPACING_IN_PX_UNIT } from "../../00-tokens/spacing"
import Typography from "../../01-atoms/Typography"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING_IN_PX_UNIT.X7L}px;
  flex-wrap: wrap-reverse;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

export const LeftContent = styled.div`
  margin-right: ${SPACING_IN_PX_UNIT.XL}px;
`

export const RightContent = styled.div``

export const TextHeading = styled(Typography)`
  margin: 0;
  margin-bottom: ${SPACING_IN_PX_UNIT.XL}px;
`

export const TextBody = styled(Typography)`
  margin-bottom: ${SPACING_IN_PX_UNIT.LG}px;
`

export const ProfilePic = styled.img`
  border-radius: ${SPACING_IN_PX_UNIT.MD}px;
  width: 150px;
  height: 150px;
  margin-bottom: ${SPACING_IN_PX_UNIT.LG}px;

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
  }
`
