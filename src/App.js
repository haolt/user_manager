import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import NoteList from './Components/NoteList';
import NoteForm from './Components/NoteForm';

class App extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<div className="container">
            		<div className="row">
						<NoteList/>
						<NoteForm/>
					</div>
				</div>
			</div>
			);
	}
}

export default App;
