//import dispatch
import {useDispatch} from 'react-redux';

//css
import '../css/General.css';
const Interested =(props)=>{
    //setup dispatch
    const dispatch=useDispatch();
    const onDoNotCallHandler=()=>{
        const confirmBox=window.confirm('WARNING: Contacts marked DO NOT CALL should NOT be contacted again');

        if(confirmBox===true){
            dispatch({
                type:'DO_NOT_CALL',
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
                        className='not-interested-button'
                        onClick={()=>dispatch({type:'NOT_INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                        >NOT INTERESTED</button>
                    <button
                        className='call-back-button'
                        onClick={()=>dispatch({type:'CALL_BACK',payload:{phoneNumber:props.phoneNumber}})}
                        >CALL BACK</button>
                    <button
                        className='do-not-call-button'
                        onClick={onDoNotCallHandler}
                        >DO NOT CALL</button>
                </td>
            </tr>
        </>
    )
}

export default Interested;