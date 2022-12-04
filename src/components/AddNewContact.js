//will we use state still?
//yes because, we still need the hasError message
 
import {useState} from 'react';
 
//redux
import {useSelector, useDispatch} from 'react-redux';
 
//css
import '../css/AddNewContact.css';
//do we still need the props?
//no, why? task is already part of the store
//without the parent component passing to the chidl
const AddnewGivenName=()=>{
    //store
    
    const contacts = useSelector(state=>state.allContacts);
    // console.log('this',contacts);
    const dispatch=useDispatch();

    //states
    const [newGivenName,setNewGivenName]=useState('');
    const [newPhoneNumber,setNewPhoneNumber]=useState('');
    const [newEmail,setNewEmail]=useState('');
    const [newLocation,setNewLocation]=useState('');
 
    //declare error messages here
    const [errorMessage,setErrorMessage]=useState('');
    //two way binding method

    //HANDLERS
    const onNewGivenNameChangeHandler=(event)=>{
        //to check the value of the entered value in the input
        // console.log(event.target)
        setNewGivenName(event.target.value);
    }

    const onNewPhoneNumberChangeHandler=(event)=>{
        // console.log(event.target);
        setNewPhoneNumber(event.target.value);
    }

    const onNewEmailChangeHandler=(event)=>{
        // console.log(event.target);
        setNewEmail(event.target.value);
    }

    const onNewLocationChangeHandler=(event)=>{
        // console.log(event.target.value);
        setNewLocation(event.target.value);
    }
    //SUBMIT
    const onSubmitFormHandler=(event)=>{
        event.preventDefault();
        
        
            //validate
        //1. don't allow empty string
        //2. don't allow duplicates
 
        //check if given name,email and location is empty and trim down extra spaces
            if(newGivenName.trim()===''){
                setErrorMessage('Name should not be empty');
            }else if(newEmail.trim()===''){
                setErrorMessage('Please enter an Email');
            }else if(newLocation.trim()===''){
                setErrorMessage('Please enter the location of the contact');
                //check if phone number is valid
            }else if(newPhoneNumber.length>10 || newPhoneNumber.length<10){
                setErrorMessage('Phone number should be at least 10 digits');
                alert('Please enter a 10 digit phone number');
            }else if(contacts.filter(contact=>contact.phoneNumber==newPhoneNumber).length!==0){
                setErrorMessage('Contact Existing');
                alert('The contact is already existing');
            }else{ 
                //confirm if the data entered is all good
                const confirmBox=window.confirm("The new contact will be added if no more corrections!");

                if(confirmBox===true){
                //call dispatch function to add the new contact
                dispatch({type:'ADD_CONTACT',
                payload:
                    {
                        givenName:newGivenName,
                        phoneNumber:newPhoneNumber,
                        email:newEmail,
                        location:newLocation,
                    }
                });
                alert('Contact Added');
                //clear fields when new contact is added
                setErrorMessage('');
                setNewGivenName('');
                setNewPhoneNumber('');
                setNewEmail('');
                setNewLocation('');
            }
 
        }
        
 
    }
 
    return(
        <section className='add-new-contact-body'>
        <form onSubmit={onSubmitFormHandler}>
            <fieldset>
            <legend>ADD NEW CONTACT</legend>
            
            <table>
                <tbody>
                    <tr className='row-header'>
                        <td>NAME</td>
                        <td>PHONE NUMBER</td>
                        <td>EMAIL</td>
                        <td>LOCATION</td>
                        <td>ACTION</td>
                    </tr>

                </tbody>
                    <tr>
                        <td>
                            <input
                                title='Enter Full name here'
                                type='text'
                                value={newGivenName}
                                onChange={onNewGivenNameChangeHandler}
                                //the onChange above is the same below
                                //the difference is that it needs a function above
                                //onChange={e =>setNewGivenName(e.target.value)}
                                placeholder='Complete Name'
                            />
                        </td>
                        <td>
                            <input 
                                title='enter 10 digit phone number here'
                                type = 'number'
                                
                                value={newPhoneNumber}
                                onChange={onNewPhoneNumberChangeHandler}
                                placeholder='10 digit phone number'
                                />
                        </td>
                        <td>
                            <input 
                                title='enter email here'
                                type = 'email'
                                value={newEmail}
                                onChange={onNewEmailChangeHandler}
                                placeholder='example@gmail.com'/>
                        </td>
                        <td>
                            <input 
                                type = 'text'
                                placeholder='ex. Utah, TX'
                                value={newLocation}
                                onChange={onNewLocationChangeHandler}
                                />
                        </td>
                        <td>
                        <button
                            className='add-button'
                            type = 'submit'
                    
                        >
                            ADD
                        </button>
                        </td>
                    </tr>
            </table>
           
            <small>{errorMessage}</small>
            </fieldset>
         </form>
        </section>
 
    )
}
 
export default AddnewGivenName;
