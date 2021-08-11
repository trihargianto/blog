import React from "react"
import { navigate } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DarkModeToggle from "react-dark-mode-toggle"

import isMobile from "../../../utils/isMobile"
import Button from "../../01-atoms/Button"
import Icon from "../../01-atoms/Icon"
import * as styled from "./styled"
import * as types from "./types"

export default function Navbar({ location }: types.NavBarPropTypes) {
  const isHomePageActive = location.pathname === "/"
  const isAboutPageActive = location.pathname === "/about"

  return (
    <>
      <styled.Wrapper>
        <styled.Nav>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <>
                {!isHomePageActive && isMobile() ? (
                  <button
                    className="btn-plain"
                    onClick={() => {
                      // @ts-ignore
                      navigate(-1, { replace: true })
                    }}
                  >
                    {/* @TODO handle theme <IconArrowBack theme={theme} /> */}
                    <Icon name="arrow-back" />
                  </button>
                ) : null}

                <DarkModeToggle
                  onChange={checked => toggleTheme(checked ? "dark" : "light")}
                  checked={theme === "dark"}
                  size={60}
                />
              </>
            )}
          </ThemeToggler>

          <styled.ListWrapper>
            <styled.List>
              <Button
                variant="primary-ghost"
                onClick={() => navigate("/")}
                isActive={isHomePageActive}
              >
                Home
              </Button>
              <Button
                variant="primary-ghost"
                onClick={() => navigate("/about")}
                isActive={isAboutPageActive}
              >
                About
              </Button>
            </styled.List>
          </styled.ListWrapper>
        </styled.Nav>
      </styled.Wrapper>
      <styled.WrapperHeightHelper />
    </>
  )
}
