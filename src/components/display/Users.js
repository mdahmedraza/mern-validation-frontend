import './Users.css';
import UserDetail from './UserDetail';

function Users(props){
    return(
        <div className='users'>
            {props.usersData.map((data)=>
            <UserDetail
            key={data.id}
            name={data.name}
            age={data.age}
            />
            )}
        </div>
    )
}
export default Users;