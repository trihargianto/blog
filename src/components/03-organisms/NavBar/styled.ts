import styled from "styled-components"

import * as colors from "../../00-tokens/colors"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${colors.NEUTRAL.N100};
  background-color: ${colors.ALIAS.WHITE};
  position: fixed;
  width: 100%;
  height: 58px;
  z-index: 2;
  box-shadow: 0 2px 2px -5px rgba(0, 0, 0, 0.1);
`

export const WrapperHeightHelper = styled.div`
  height: 48px;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;

  @media (min-width: 768px) {
    width: 768px;
  }
`

export const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
`

export const List = styled.li`
  list-style: none;
  float: left;
  margin-left: 15px;
  margin-bottom: 0px;
`
