import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from './FirebaseConnect';

class App extends Component {
	render() {
		console.log(noteData);
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
