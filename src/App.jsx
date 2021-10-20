import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
                <Route exact path="/users/:userid">
                    <UserDetails />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route path="*">
                    {() => <h1>404: Not Found</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App