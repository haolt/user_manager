import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from './FirebaseConnect';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
	
	}
	
	showForm = () => {
		if (this.props.isEdit) {
			return <NoteForm/>
		}
	}
	// addData = (item) => {
	// 	noteData.push(item);
	// }

	render() {
		// console.log(noteData.once('value').then((snapshot) => console.log(snapshot.val()) ));
		return (
			<div>
				<Nav/>
				<div className="container">
            		<div className="row">
						<NoteList/>
						{ /* <NoteForm getData= {(item) => this.addData(item)}/> */}
						{ /* <NoteForm/> */}
						{ this.showForm() }
					</div>
				</div>
			</div>
			);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isEdit: state.isEdit
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeEditStatus: () => {
			dispatch({type: 'CHANGE_EDIT_STATUS'})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
