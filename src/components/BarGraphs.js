import '../css/BarGraphs.css';

const BarGraphs=(props)=>{
    //get percentage of all contacts
    let newContacts = (props.newContact/props.allContacts)*100;
    let interested = (props.interested/props.allContacts)*100;
    let notInterested = (props.notInterested/props.allContacts)*100;
    let callBack = (props.callBack/props.allContacts)*100;
    let doNotCall = (props.doNotCall/props.allContacts)*100;
    return(
        <section className='bar-graph-container'>
                <div>
                    <h3>BAR GRAPH</h3>
                </div>
                <div className='primary'>
                    <div className='secondary'>New Contacts</div>
                    <div className='new-contact-bar'
                    style={{width:`${newContacts}px`}}></div>
                </div>
                <div className='primary'>
                    <div className='secondary'>Interested</div>
                    <div className='interested-bar'
                    style={{width:`${interested}px`}}></div>
                </div>
                <div className='primary'>
                    <div className='secondary'>Not Interested</div>
                    <div className='not-interested-bar'
                    style={{width:`${notInterested}px`}}></div>
                </div>
                <div className='primary'>
                    <div className='secondary'>Call Back</div>
                    <div className='call-back-bar'
                    style={{width:`${callBack}px`}}></div>
                </div>
                <div className='primary'>
                    <div className='secondary'>Do Not Call</div>
                    <div className='do-not-call-bar'
                    style={{width:`${doNotCall}px`}}></div>
                </div>
                    
        </section>
    )
}

export default BarGraphs;