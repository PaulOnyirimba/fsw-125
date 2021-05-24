import { useState } from 'react'
import BookFormHandler from './BookFormHandler';

function Book({ deleteBook, editBook, title, genre, _id }) {
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='book'>
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
            <button  onClick={() => deleteBook(_id)} className='delete-btn'>Delete</button>
        </div>
    );
}


export default Book;