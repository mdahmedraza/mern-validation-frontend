import './UserDetail.css';

function UserDetail(props){
    return(
        <div className='user_detail'>
            <h3>{props.name}</h3>
            <label>({props.age} years old)</label>
        </div>
    )
}
export default UserDetail;