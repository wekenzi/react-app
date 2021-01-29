import React from 'react';
import { Route, Switch, NavLink, useRouteMatch } from "react-router-dom";

function About1() {
    return (
        <div>
            Hii
        </div>
    );
}

const About2 = () => {
    return (<h1>About 2 is here</h1>);
}

const About = () => {

    const {url , path} = useRouteMatch();

    return (
        <div>
            <h1>Iam about</h1>
            <NavLink to={`${url}/so`} className="nav-link">About 1</NavLink>
            <NavLink to={`${url}/se`} className="nav-link">About 2</NavLink>
            <hr/>
            <Switch>
                <Route exact path={`${path}/so`}>
                    <About1 />
                </Route>
                <Route exact path={`${path}/se`}>
                    <About2 />
                </Route>
            </Switch>
        </div>
    );
};

export default About;