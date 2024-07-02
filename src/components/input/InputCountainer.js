
import Input from './Input';
import './InputCountainer.css';

const InputCountainer=(props)=>{
    const saveDataHandler=(enteredData)=>{
        const myData={
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddData(myData)
    }
    return(
        <div className='container'>
            <Input onSaveData={saveDataHandler} />
        </div>
    )
}
export default InputCountainer;