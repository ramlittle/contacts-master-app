import DataSet from '../data/initialContacts.json';

const initialState={
    allContacts: DataSet,
};
 
const reducer =(state=initialState, action)=>{
    /*
what are the actions we need?
to make
    1. Mark as done function
    2. Delete a task
    3. Add Task
 
 
    all data is passed tru the action variable, which has two
    properties which for example has givenName property
    */
   switch(action.type){
    case 'ADD_CONTACT':
        let newContact={
            phoneNumber:action.payload.phoneNumber,
            givenName:action.payload.givenName,
            email:action.payload.email,
            location:action.payload.location,
            disposition:''};
        /*
            {
                givenName: eat(from the payload),
                status: pending
            }
        */
 
            //why my ...? this is to make sure if there are other properties
            //allContacts is an array, that is why it is in a bracket, s
            //since we are just adding, we put allContacts, and added newContact
            //para ka lang nag push
       return {...state,allContacts:[...state.allContacts,newContact]};
    case 'INTERESTED':
        let allInterested=state.allContacts;
        console.log('u clicked me oh yah',action.payload.phoneNumber);
        for(let index=0;index<allInterested.length;index++){
            if(allInterested[index].phoneNumber === action.payload.phoneNumber){
                allInterested[index].disposition='INTERESTED';
            }
        }
 
        console.log(...allInterested);
        return{...state,allContacts:[...allInterested]};
    
    case 'NOT_INTERESTED':
        let allNotInterested=state.allContacts;
        for(let index=0;index<allNotInterested.length;index++){
            if(allNotInterested[index].phoneNumber===action.payload.phoneNumber){
                allNotInterested[index].disposition='NOT INTERESTED';
            }
        }
        console.log(...allNotInterested);
        return{...state,allContacts:[...allNotInterested]};

    case 'DO_NOT_CALL':
        let allDoNotCall=state.allContacts;
        
            //mark do not call the contact if confirmed
            for(let index=0;index<allDoNotCall.length;index++){
                if(allDoNotCall[index].phoneNumber===action.payload.phoneNumber){
                    allDoNotCall[index].disposition='DO NOT CALL';
                }
            }
            console.log(...allDoNotCall);
            return{...state,allContacts:[...allDoNotCall]};
        
    case 'CALL_BACK':
        let allCallBack=state.allContacts;
        for(let index=0;index<allCallBack.length;index++){
            if(allCallBack[index].phoneNumber===action.payload.phoneNumber){
                allCallBack[index].disposition='CALL BACK';
            }
        }
        console.log(...allCallBack);
        return{...state,allContacts:[...allCallBack]};
    case 'RESTORE':
        let restore=state.allContacts;
        for(let index=0;index<restore.length;index++){
            if(restore[index].phoneNumber===action.payload.phoneNumber){
                restore[index].disposition='';
            }
        }
        console.log(...restore);
        return{...state,allContacts:[...restore]};
    default:
        return state;
   }
}
 
export default reducer;