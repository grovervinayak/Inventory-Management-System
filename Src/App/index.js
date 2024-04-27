import React from "react";
import {render} from "react-dom";

import {Provider} from "react-redux";
import store from "./store";

import Dashboard from "./Components/Dashboard";
import {Header} from "./Components/Header";
import OrderNewItem from "./Components/OrderNewItem";

import {MainPage} from "./Components/CommonComponents/MainPage";

import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class App extends React.Component{
	render(){
		return(
			<div>
			<Provider store={store}>
			<Router>
					<Header/>
					<MainPage>
					<div>
						<Route exact path="/" component={Dashboard}/>
					</div>
					</MainPage>
			</Router>
			</Provider>
			</div>
			);
	}
}

render(<App/>,window.document.getElementById("app"));
