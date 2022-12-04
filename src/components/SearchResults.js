//dispatch
import {useDispatch} from 'react-redux';
const SearchResults =(props)=>{
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
                <td>name:<br/>{props.givenName}</td>
                <td>phone:<br/>{props.phoneNumber}</td>
                <td>email:<br/>{props.email}</td>
                <td>location:<br/>{props.location}</td>
                <td>disposition:<br/>{props.disposition}</td>
                <td>
                    {/* If Contact is INTERESTED, show only the proper buttons */}
                    {
                        props.disposition==='INTERESTED' &&
                        (
                        <button
                        className='not-interested-button'
                        onClick={()=>dispatch({type:'NOT_INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                        >NOT INTERESTED</button>
                        )
                    }
                    {
                        props.disposition==='INTERESTED' &&
                        (
                        <button
                        className='call-back-button'
                        onClick={()=>dispatch({type:'CALL_BACK',payload:{phoneNumber:props.phoneNumber}})}
                        >CALL BACK</button>
                        )
                    }
                    {
                        props.disposition==='INTERESTED' &&
                        (
                            <button
                            className='do-not-call-button'
                            onClick={onDoNotCallHandler}
                            >DO NOT CALL</button>
                            )
                    }
                    
                    {/* If Disposition is NOT INTERESTED, then display appropriate buttons */}

                    {
                        props.disposition==='NOT INTERESTED' &&
                        (
                        <button
                        className='interested-button'
                        onClick={()=>dispatch({type:'INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                        >INTERESTED</button>
                        )
                    }
                    {
                        props.disposition==='NOT INTERESTED' &&
                        (
                        <button
                        className='call-back-button'
                        onClick={()=>dispatch({type:'CALL_BACK',payload:{phoneNumber:props.phoneNumber}})}
                        >CALL BACK</button>
                        )
                    }
                    {
                        props.disposition==='NOT INTERESTED' &&
                        (
                            <button
                        className='do-not-call-button'
                        onClick={onDoNotCallHandler}
                        >DO NOT CALL</button>
                        )
                    }
                    
                    {/* If Call Back is the disposition, display the appropriate buttons */}
                    {
                        props.disposition==='CALL BACK' &&
                        (
                        <button
                        className='interested-button'
                        onClick={()=>dispatch({type:'INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                        >INTERESTED</button>
                        )
                    }
                    {
                        props.disposition==='CALL BACK' &&
                        (
                            <button
                            className='not-interested-button'
                            onClick={()=>dispatch({type:'NOT_INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                            >NOT INTERESTED</button>
                        )
                    }
                    {
                        props.disposition==='CALL BACK' &&
                        (
                            <button
                        className='do-not-call-button'
                        onClick={onDoNotCallHandler}
                        >DO NOT CALL</button> 
                        )
                    }

                    {/* If DO NOT CALL is the dispo, display proper buttons */}

                    {
                        props.disposition==='DO NOT CALL' &&
                        (
                            <button
                            className='interested-button'
                            onClick={onRestoreHandler}
                            >RESTORE</button>
                        )
                    }
                    

                    {/* IF DISPOSITION IS EMPTY, show all buttons */}

                    {
                        props.disposition==='' &&
                        (
                        <button
                        className='interested-button'
                        onClick={()=>dispatch({type:'INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                        >INTERESTED</button>
                        )
                    }
                    {
                        props.disposition==='' &&
                        (
                            <button
                            className='not-interested-button'
                            onClick={()=>dispatch({type:'NOT_INTERESTED',payload:{phoneNumber:props.phoneNumber}})}
                            >NOT INTERESTED</button>
                        )
                    }
                    {
                        props.disposition==='' &&
                        (
                            <button
                        className='call-back-button'
                        onClick={()=>dispatch({type:'CALL_BACK',payload:{phoneNumber:props.phoneNumber}})}
                        >CALL BACK</button>
                        )
                    }
                    {
                        props.disposition==='' &&
                        (
                            <button
                        className='do-not-call-button'
                        onClick={onDoNotCallHandler}
                        >DO NOT CALL</button>
                        )
                    }

                </td>

            </tr> 
        </>
    )
}
export default SearchResults;