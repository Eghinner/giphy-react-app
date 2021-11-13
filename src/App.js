import React from 'react';
import Sticker from './components/Sticker.js'
import Home from './pages/Home.js'
import {  Route } from "wouter";

function App() {

	return (
		<React.Fragment>
			<Route
				component={Home}
				path='/'
			>
			</Route>
			<Route
				component={Sticker}
				path="/:word"
			></Route>
		</React.Fragment>
	)
}

export default App;