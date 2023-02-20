import React from "react";
import s from './Notes.module.css';
import AbstractNote from "./abstractNote/AbstractNote";
import TextareaNote from "./textareaNote/TextareaNote";

function Notes({ notes, setNote }) {

    const result = notes.map((note, index) => {
        let elem;

        if (note.isEdit) {
            elem = <TextareaNote
                className={s.textNote}
                key={note.id}
                id={note.id}
                changeIsEditFalse={changeIsEditFalse}
                text={note.text}
                handlechange={handlechange}>
            </TextareaNote>;
        } else {
            elem = <AbstractNote
                key={note.id}
                text={note.text}
                id={note.id}
                changeIsEditTrue={changeIsEditTrue}
                deleteNote={deleteNote}
                index={index}>
            </AbstractNote >
        }

        return elem;
    });

    function deleteNote(index) {
        setNote([...notes.slice(0, index), ...notes.slice(index + 1)]);
    }

    function changeIsEditFalse(id) {
        setNote(notes.map(note => {
            if (note.id === id) note.isEdit = false;

            return note;
        }));
    }

    function changeIsEditTrue(id, event) {
        if (event.target.closest('span')) {
            return false;
        } else {
            setNote(notes.map(note => {
                if (note.id === id) note.isEdit = true;

                return note;
            }));
        }
    }

    function handlechange(id, event) {
        setNote(notes.map(note => {
            if (note.id === id) {
                note.text = event.target.value;
            }

            return note;
        }));
    }

    return <div >
        {result}
    </div>;
}

export default Notes;