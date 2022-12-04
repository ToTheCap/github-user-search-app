import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'

const SearchWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 7px;
  padding-left: 16px;
  margin: 35px 0 16px 0;
  border-radius: 15px;
  background-color: ${props => props.theme.div};
  box-shadow: 0px 16px 30px -10px ${props => props.theme.boxShadow};

  display: flex;
  align-items: center;
  column-gap: 7px;

  @media (min-width: 768px){
    padding: 10px;
    padding-left: 32px;
    column-gap: 24px;
  }
`
const SearchBox = styled.input`
  flex: 1 0 0;
  width: 100%;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  caret-color: ${props => props.theme.dodgerBlue};
  color: ${props => props.theme.text};
  background: transparent;

  ::placeholder {
    color: ${props => props.theme.text};
  }

  @media (min-width: 768px){
    font-size: 18px;
    line-height: 25px;
  }
`
const ErrorMessage = styled.p`
  font-size: 15px;
  color: #F74646;
;
`
const SearchButton = styled.button`
  font-size: 14px;
  width: 84px;
  height: 46px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.theme.dodgerBlue};

  :hover {
    background-color: ${props => props.theme.buttonHover};
  }

  @media (min-width: 768px){
    width: 106px;
  }
`

const Search = ({ searchValue, onChange, fetchUser, isError }) => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchBox
        value={searchValue}
        onChange={onChange}
        placeholder='Search GitHub username…' />
      {isError && <ErrorMessage>No results</ErrorMessage>}
      <SearchButton onClick={fetchUser}>Search</SearchButton>
    </SearchWrapper>
  )
}

export default Search