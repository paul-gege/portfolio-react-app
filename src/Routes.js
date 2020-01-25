import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home.js";

const Routes = () => {

	return (
		
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
			</Switch>
		</BrowserRouter>

	)
}

export default Routes;