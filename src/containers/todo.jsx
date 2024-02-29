import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Input from '../components/input/input'
import Button from '../components/button/button'
import List from '../components/list/list';

const Todo = () => {

    const [noteArray, setNoteArray] = useState([]);
    const [note, setNote] = useState("");

    const handleOnChange = (event) => {
        setNote(event.target.value)
    }

    const handleOnClick = () => {
        let payload = { id: uuidv4(), note: note, createdAt: new Date().toDateString() }
        setNoteArray((prev) => [...prev, payload])
        setNote("");
    }
    

    return (
        <div className='flex flex-col items-center mt-4 gap-4'>
            <div className='font-extrabold text-3xl tracking-widest uppercase'>Todo App</div>
            <div className='flex gap-2'>
                <Input placeholder="Type here ..." value={note} onChange={handleOnChange} />
                <Button name="Submit" onClick={handleOnClick} />
            </div>
            <div>
                <List data={noteArray} />
            </div>
        </div>
    )
}
export default Todo
