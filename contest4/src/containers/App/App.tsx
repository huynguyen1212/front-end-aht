import React from 'react';
import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
// css style configs
import theme from 'styles/theme';
import 'styles/fonts.css'; // import config font define
import 'sweetalert2/dist/sweetalert2.min.css';
// diff import
import Home from 'containers/Home';
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import { selectAppStore } from './store/selecters';
import LanguageProvider from './LanguageProvider';
import { BaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15, // default 15
  },
  container: {
    padding: 0,
    maxWidth: {
      xxl: 1141,
      xl: 1170,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

function App() {
  const { loading } = useSelector(selectAppStore);

  return (
    <GridThemeProvider gridTheme={gridTheme}>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Router>
          {/* // extra config global */}
          <Loading active={loading} />
          <GlobalStyle />
          <BaseCSS />
        </ThemeProvider>
      </LanguageProvider>
    </GridThemeProvider>
  );
}

export default App;
