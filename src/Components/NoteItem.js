import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    changeEditStatusAndFetchDataToForm = () => {
        this.props.changeEditStatus();
        // console.log(this.props.note);
        // sau đó chuyển nội dung lên store để store update state, 
        // xong đẩy vô noteForm
        this.props.getEditItem(this.props.note);
        
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="section1HeaderId">
                    <h5 className="mb-0 display-inline">
                        <a data-toggle="collapse" data-parent="#noteList" href={'#number' + this.props.ind} 
                            aria-expanded="true" aria-controls="noteContent1">
                        {this.props.title}
                        </a>
                    </h5>
                    <button className="btn btn-success float-right"
                        onClick= {() => this.changeEditStatusAndFetchDataToForm()}
                    >Edit</button>
                </div>
                <div id={'number' + this.props.ind} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                        {this.props.content}
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
        },
        getEditItem: (editItem) => {
			dispatch({type: 'GET_EDIT_ITEM', editItem})
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);