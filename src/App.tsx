import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes';
import { GlobalStyle } from './styles';
import { Home } from './pages';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
