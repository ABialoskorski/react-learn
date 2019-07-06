import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Post from "./Components/Post";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/:post_id" component={Post} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
