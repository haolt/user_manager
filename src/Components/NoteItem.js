import React, { Component } from 'react';

class NoteItem extends Component {
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
                    <button className="btn btn-success float-right">Edit</button>
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

export default NoteItem;