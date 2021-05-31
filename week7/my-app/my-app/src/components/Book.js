

function Book({ title, genre, _id }) {
    return (
        <div className='book'>
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
        </div>
    );
}

export default Book;