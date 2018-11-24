import React, { Component } from 'react';

class NoteForm extends Component {
    render() {
        return (
            <div className="col-4">
                <form>
                    <h3>Edit Note</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input type="text" name="content" id="content" className="form-control"/>
                    </div>
                    <input type="reset" value="Add" className="btn btn-block btn-primary"/>
                </form>
            </div>
        );
    }
}

export default NoteForm;