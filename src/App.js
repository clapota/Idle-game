import React, {Component} from 'react';
import logo from './assets/mbge.png';
import './App.css';
import Logo from "./components/Logo";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Logo src={logo}/>
				</header>
			</div>
		);
	}
}

export default App;
