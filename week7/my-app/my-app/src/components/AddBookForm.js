import {useState} from 'react'

function AddBookForm({addBooks}){
    const initialInputs = { title: '', genre: ''};
    const [inputs, setInputs] = useState(initInputs);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooks(inputs);
        setInputs(initialInputs);
    }


    return(
        <form onSubmit={handleSubmit}> 
                <input
                    type='text'
                    name='title'
                    value={inputs.title}
                    onChange={}
                    placeholder='Title'/>
                <input 
                    type='text'
                    name='genre'
                    value={inputs.genre}
                    onChange={}
                    placeholder='Genre'/>
                    <button>Add Book</button>
        </form>
    )
}

export default AddBookForm;