
import axios from 'axios';
import './Input.css';
import { useState } from 'react';
import ErrorModal from '../error/ErrorModal';

const Input = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError]=useState();

  function enteredName(event) {
    setName(event.target.value);
  }

  function enteredAge(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if(name.trim().length===0 || age.trim().length===0){
      setError({
        title: "INVALID INPUT",
        message1: "Please fill the all inputs.",
        message2: '(unfilled inputs are not accepted)'
      })
      return;
    }
    if(+age<20||+age>60){
      setError({
        title: "INVALID AGE",
        message1: "please enter a valid age.",
        message2: '(only people between 20 to 60 are allowed)'
      })
      return;
    }
    const data = {
      name: name,
      age: age
    };

    axios.post('http://localhost:8000/', data)
      .then(response => {
        console.log(response.data);
        props.onSaveData(data);
      })
      .catch(error => {
        console.log(error);
      });

    setName('');
    setAge('');
  }
  const ErrorHandler=()=>{
    setError(null)
  }
  return (
    <div>
    {error&&<ErrorModal title={error.title} message1={error.message1} message2={error.message2} onConfirm={ErrorHandler} />}
    <form onSubmit={submitHandler}>
      <div className='input_section'>
        <label>your name-</label>
        <input type='text' value={name} onChange={enteredName} placeholder='your name...' />
      </div>
      <div className='input_section'>
        <label>your age-</label>
        <input type='text' value={age} onChange={enteredAge} placeholder='your age...' />
      </div>
      <div className='button'>
        <button type='submit'>submit it?</button>
      </div>
    </form>
    </div>
  );
};

export default Input;


