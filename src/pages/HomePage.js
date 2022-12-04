//css
import '../css/General.css';
import '../css/HomePage.css';

//images
import PersonImage from '../images/man.png';
import TeamLead from '../images/teamlead.png';

//component
import BarGraphs from '../components/BarGraphs.js';
const HomePage =(props)=>{
    return(
        <section className='dashboard-body'>
            
            {/* User Info Section */}
            <section className='dashboard-container'>
                <section className='hero-container'>
                    <div className='greeting-container'>
                            <h2>Welcome, Ram</h2>
                    </div> 
                    <div className='hero-welcome-message-container'>
                        <div className='hero-img-container'>
                            <img 
                                src={PersonImage}
                                title="person icons" alt='Person icons created by Freepik - Flaticon'/>
                        </div>
                    </div>
                    <div className='hero-details-container'>
                        <div className='name-container'>
                            <div>Complete Name: </div>
                            <div>Ramelito Martinez</div>
                        </div>
                        <div className='email-container'>
                            <div>Email: </div>
                            <div>ramelitomartinez@gmail.com</div>
                        </div>
                        <div className='phone-container'>
                            <div>Phone: </div>
                            <div>9034626592</div>
                        </div>
                        <div className='supervisor-container'>
                            <div>Email: </div>
                            <div>supervisor@gmail.com</div>
                        </div>
                    </div>
                </section>

                {/* Contacts Summary Section */}
                <section className='contacts-summary-main-container'>
                    <div className='announcement-container'>
                        <div className='announcement-img-container'>
                            {/* <img src = {TeamLead}/> */}
                            <img src={TeamLead} title="person icons" alt='Person icons created by Freepik - Flaticon'/>
                            <h6>Supervisor</h6>
                        </div>
                        <div className='announcement-message'>
                            Great job <strong>Ram</strong>! You've contacted a total <span>{props.interested}</span> potential customers so far!
                        </div>
                    </div>
                    <div className='contacts-summary-container'>
                        <div className='total-container'>
                            <div className='title'>Fresh Contacts:</div>
                            <div className='content'>{props.newContact}</div>
                        </div>
                        <div className='interested-container'>
                            <div className='title'>Interested:</div>
                            <div className='content'>{props.interested}</div>
                        </div>
                        <div className='not-interested-container'>
                            <div className='title'>Not Interested:</div>
                            <div className='content'>{props.notInterested}</div>
                        </div>
                        <div className='callback-container'>
                            <div className='title'>Call Back:</div>
                            <div className='content'>{props.callBack}</div>
                        </div>
                        <div className='do-not-call-container'>
                            <div className='title'>Do Not Call:</div>
                            <div className='content'>{props.doNotCall}</div>
                        </div>
                        <div className = 'total-contacts-container'>
                            <div className='all-contacts-title'>All Contacts:</div>
                            <div className='all-contacts-content'>{props.allContacts}</div>
                        </div>
                    </div>
                    <div>
                    <BarGraphs
                        interested={props.interested}
                        notInterested={props.notInterested}
                        callBack={props.callBack}
                        doNotCall={props.doNotCall}
                        newContact={props.newContact}
                        allContacts={props.allContacts}
                    />
                    </div>
                </section>
               {/* BAR GRAPH SECTION */}
              
                <section>
                   
                </section>
            
            </section>
            
        </section>
    )
}

export default HomePage;