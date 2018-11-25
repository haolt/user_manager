import React, { Component } from 'react';
import { noteData } from './FirebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteData: []
        }
    }
    
    componentWillMount() {
        // cách 1: dùng hàm once lần trc (dòng 19 bên App)
        // cách 2: Kiểu callback, dùng on cho đỡ bị lỗi Promise
        noteData.on('value', (notes) => {
            // note gồm 2 phần tử: key(notes.key) và value (note.val()); 
            // trong val() có .title và .content
            // - Vì firebase notes.val() trả về cho ta 1 đối tg chứ ko phải mảng, 
            // ko thể map hay foreach, nên ta phải convert:
            var notesArray = [];
            notes.forEach( element => {
                const key = element.key ;
                const title = element.val().title;
                const content = element.val().content;
                notesArray.push({
                    key: key,
                    title: title,
                    content: content
                });
            })

            this.setState({
                noteData: notesArray
            });
            // console.log(notes.val()); 
            // console.log(notesArray);
        })
    }

    showData = () => {
        console.log(this.state.noteData)
        if (this.state.noteData) {
            return (
                this.state.noteData.map((value, key)=> {
                    return (
                        <NoteItem 
                            key={value.key}
                            title={value.title}
                            content={value.content}
                        />
                    ) 
                })
            )
            }
            // this.state.noteData.map((val, key) => {
            //     return 2
            // })
        // }
        // else{
        //     console.log('oh shot');
            
        // }
    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    { this.showData() }
                </div>  
            </div>
        );
    }
}

export default NoteList;