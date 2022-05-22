import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AppBar from "./components/AppBar";
import FormPage from "./components/pages/FormPage";
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";
import TablePage from "./components/pages/TablePage";




class App extends Component {
  render() {

    const theme = createMuiTheme(this.props.settings);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppBar />
          <Switch>
            <Route path={"/"} exact /*strict*/ component={HomePage} />
            <Route path={"/form"} exact /*strict*/ component={FormPage} />
            <Route path={"/table"} exact /*strict*/ component={TablePage} />
            <Route exact /*strict*/ component={NoPageFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
