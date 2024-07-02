import './ErrorModal.css';

function ErrorModal(props){
    return(
        <div className='parent' onClick={props.onConfirm}>
            <div className='child'>
                <header>
                    <h1>{props.title}</h1>
                </header>
                <main>
                    <h3>{props.message1}</h3>
                    <span>{props.message2}</span>
                </main>
                <footer>
                    <button onClick={props.onConfirm}>Okay</button>
                </footer>
            </div>
        </div>
    )
}
export default ErrorModal;