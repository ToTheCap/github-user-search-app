import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme, darkTheme } from './globalStyles';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/userCard/Card';

const StyledApp = styled.div`
  width: 327px;
  margin: 30px auto 0 auto;
  background-color: ${props => props.theme.body};

  @media (min-width: 768px){
    width: 573px;
  }
  @media (min-width: 1440px){
    width: 730px;
  }
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [user, setUser] = useState(null)
  const [isError, setIsError] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(oldTheme => !oldTheme)
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const fetchUser = () => {
    axios
      .get(`https://api.github.com/users/${searchValue}`)
      .then((res) => {
        setUser(res.data)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledApp>
        <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <Search
          searchValue={searchValue}
          onChange={handleChange}
          isError={isError}
          fetchUser={fetchUser}
        />
        {(!isError && user) && <Card user={user} />}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;