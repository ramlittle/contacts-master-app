//image
import DocsPerson from '../images/docsperson.png';

//css
import '../css/DocsPage.css';
import '../css/General.css';
const DocsPage =()=>{
    return(
        <section className='document'>
            <div className='document-header-container'>
                <h2>Documentation</h2>
            </div>
            <div className='document-avatar-container'>
                <div className='document-image-container'>
                    <img 
                        src={DocsPerson}
                        alt='Creator: illusart | Credit: Getty Images/iStockphoto'/>
                    <a 
                        href='https://www.istockphoto.com/portfolio/illusart?mediatype=illustration'
                        title='Creator: illusart | Credit: Getty Images/iStockphoto'
                        target='_blank'
                        >Creator: illusart | Credit: Getty Images/iStockphoto'
                        </a>
                </div>
                <div className='contact-life-cycle-container'>
                    <div>
                        <h2>How does the system work?</h2>
                    </div>
                    <div>
                        <p><span>Contacts Master</span> is an application to help callers manage their contacts.</p>
                        <p>User here is the Caller.</p>
                        <p>The Caller will gather it's United States(US) contacts from any reputable websites such as 
                            LinkedIn, SalesForce, Monster etc...
                        </p>
                        <p>The Caller will enter new contacts into the system, contact them by phone and
                            offer the product or service their company is offering.
                        </p>
                        <p>
                            The Caller decides what status the contact is if it is an 
                            Interested, Not Interested, Call Back or a Do Not Call based on the call.
                        </p>
                        <p>
                            <strong className= 'interested-button'>Interested</strong> = These are contacts who are insterested to avail the product or service.
                        </p>
                        <p>
                            <strong className='not-interested-button'>Not Interested</strong> = These are contacts not interested but may be interested in the future.
                        </p>

                        <p>
                            <strong className='call-back-button'>Call Back</strong>= These are contacts that are not available to communicate with the caller during the time of the call.
                        </p>

                        <p>
                            <strong className='do-not-call-button'>Do Not Call</strong> = These are contacts that wants to be removed from the contacts list. Note, if a contact
                            wants to be removed from the contacts list, do not call them again to avoid law suits.
                        </p>

                        <p>
                            The Application will display the totals of each disposition so the caller will have an overview of the contacts list.
                        </p>

                        <p>
                            The Caller is also able to Search contacts, email anyone from the system and able to download a CSV copy of the Contacts List.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DocsPage;