import styled from 'styled-components'
import { ReactComponent as SunIcon } from '../assets/icon-sun.svg'
import { ReactComponent as MoonIcon } from '../assets/icon-moon.svg'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  color: ${props => props.theme.title};
`
const Title = styled.h1`
  font-size: 26px;
  line-height: 38px;
  font-weight: bold;
`
const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-left: auto;
  cursor: pointer;
  color: ${props => props.theme.text};

  &:hover {
    color: ${props => props.theme.themeHover};
  }
`
const Theme = styled.p`
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 2.5px;
`


const Header = ({ isDarkTheme, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Title>devfinder</Title>
      <ThemeWrapper onClick={toggleTheme}>
        <Theme>{isDarkTheme ? "LIGHT" : "DARK"}</Theme>
        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      </ThemeWrapper>
    </HeaderWrapper>
  )
}

export default Header