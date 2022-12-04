//import dispatch
import {useDispatch} from 'react-redux';

//css
import '../css/General.css';
const DoNotCall =(props)=>{
    //setup dispatch
    const dispatch=useDispatch();

    const onRestoreHandler=()=>{
        const confirmBox=window.confirm('WARNING: Contacting marked DO NOT CALL Contacts can lead to law suits. Proceed with Caution');
        
        if(confirmBox===true){
            dispatch({
                type:'RESTORE',
                payload:{phoneNumber:props.phoneNumber}
            })
        
     }
        
    
    }
    return(
        <>
            <tr>
                <td>{props.givenName}</td>
                <td>{props.phoneNumber}</td>
                <td>{props.email}</td>
                <td>{props.location}</td>
                <td>{props.disposition}</td>
                <td>
                    <button
                        className='interested-button'
                        onClick={onRestoreHandler}
                        >RESTORE</button>
                </td>
            </tr>
        </>
    )
}

export default DoNotCall;