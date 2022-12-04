import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  dodgerBlue: "#0079FF",
  title: "#222731",
  boldText: "#2B3442",
  text: "#4B6A9B",
  date: "#697C9A",
  body: "#F6F8FF",
  div: "#FEFEFE",
  themeHover: "#222731",
  buttonHover: "#60ABFF",
  boxShadow: "rgba(70, 96, 187, 0.2)"
}

export const darkTheme = {
  dodgerBlue: "#0079FF",
  title: "#FFFFFF",
  boldText: "#FFFFFF",
  text: "#FFFFFF",
  date: "#FFFFFF",
  body: "#141D2F",
  div: "#1E2A47",
  themeHover: "#90A4D4",
  buttonHover: "#60ABFF",
  boxShadow: "#"
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${props => props.theme.body};
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    color: ${props => props.theme.text};

    @media (min-width: 768px){
      font-size: 15px;
      line-height: 22px;
    }
  }
`