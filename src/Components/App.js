import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from './FirebaseConnect';

class App extends Component {
	constructor(props) {
		super(props);
		
	}
	
	addData = (item) => {
		noteData.push(item);
	}
	render() {
		console.log(noteData.once('value').then((snapshot) => console.log(snapshot.val()) ));
		return (
			<div>
				<Nav/>
				<div className="container">
            		<div className="row">
						<NoteList/>
						<NoteForm getData= {(item) => this.addData(item)}/>
					</div>
				</div>
			</div>
			);
	}
}

export default App;
