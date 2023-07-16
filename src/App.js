import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Main />
        </ThemeProvider>
    </div>
  );
}

export default App;
