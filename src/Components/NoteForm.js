import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value =  event.target.value;
        this.setState({
            [name] : value
        });   
    }

    addData = (title, content) => {
        var item = {};
        item.title = title;
        item.content = content;
        console.log(item);  
        this.props.getData(item);
    }

    render() {
        return (
            <div className="col-4">
                <form>
                    <h3>Edit Note</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" className="form-control"
                           onChange= { (event) => this.isChange(event)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input type="text" name="content" id="content" className="form-control"
                            onChange= { (event) => this.isChange(event)} 
                        />
                    </div>
                    <input type="reset" value="Add" className="btn btn-block btn-primary"
                        onClick={ (title, content) => this.addData(this.state.title, this.state.content)}
                    />
                </form>
            </div>
        );
    }
}

export default NoteForm;