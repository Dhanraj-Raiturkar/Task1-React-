import React, {useState} from 'react'
import classes from './InputForm.module.css'

const InputForm = (props) => {

    const [input, setInput] = useState();

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const sendInput = (e) => {
        e.preventDefault();
        props.fetchInput(input);
        setInput('');
    }

    return (
        <form className={classes.input} onSubmit={sendInput}>
            <input placeholder='e.g. eggs' onChange={inputHandler} value={input} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default InputForm
