import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useMediaQuery, Box } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Changelog from "./components/Body/ChangeLog/ChangeLog";
import About from "./components/Body/Misc/About/About";
import WallOfShame from "./components/Body/Misc/Wall_of_Shame/WallOfShame";
import Error from "./components/Error";
import Donators from "./components/Body/Misc/Donators/Donators";
import SinglePlayer from "./components/Body/Games/Portal 2/SinglePlayer/SinglePlayer";
import Cooperative from "./components/Body/Games/Portal 2/Cooperative/Cooperative";
import { useStyles } from "./style.js";
import AggregatedSelector from "./components/Body/Aggregates/Aggregated_Selector/AggregatedSelector";
import AggregatedOverall from "./components/Body/Aggregates/Aggregated_Overall/AggregatedOverall";
import MapPage from "./components/Body/MapPages/MapPage";

export const ThemeContext = React.createContext({});

function App() {
  const classes = useStyles();
  const [themeStatus, setThemeStatus] = React.useState(
    !localStorage.getItem("localTheme") || ""
  );

  const lightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#82b1ff",
      },
      secondary: {
        main: "#ffab40",
      },
    },
    typography: {
      fontFamily: "Barlow Semi Condensed, sans-serif",
    },
  });
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#303030",
      },
      secondary: {
        main: "#303030",
      },
    },
    typography: {
      fontFamily: "Barlow Semi Condensed, sans-serif",
    },
  });

  const theme = themeStatus ? lightTheme : darkTheme;

  const handleChange = (event) => {
    setThemeStatus(event.target.checked);
    localStorage.setItem("localTheme", themeStatus);
  };

  return (
    <Box bgcolor={themeStatus ? "rgb(154, 166, 187)" : "rgb(29,31,33)"}>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme, themeStatus }}>
          <Router>
            <Header handleChange={handleChange} themeStatus={themeStatus} />
            <Switch>
              {/* Insert the routes to other pages here as:
              <Route path='/(page name) component={(component name)}*/}
              <Route exact path="/" component={Changelog} />
              <Route path="/about" component={About} />
              <Route path="/agg-selector" component={AggregatedSelector} />
              <Route path="/agg-overall" component={AggregatedOverall} />
              <Route path="/donators" component={Donators} />
              <Route path="/wall_of_shame" component={WallOfShame} />
              <Route path="/sp" exact component={SinglePlayer} />
              <Route path="/coop" exact component={Cooperative} />
              <Route path="/sp/:map_id" component={MapPage} />
              <Route path="/coop/:map_id" component={MapPage} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </Router>
        </ThemeContext.Provider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
