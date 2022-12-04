
//email package
import Email from '../components/Email.js';

//css
import '../css/Email.css';

//image
import EmailGuy from '../images/emailperson.png';
const EmailPage =()=>{
    return(
        <section className='email-section'>
            <div className='email-header'>
                <h2>Email</h2>
            </div>
            <div className='email-msg-container'>
                <div className='email-intro-container'>
                    <p>Hi, there caller! Feel free to send emails to anyone from this page.</p>
                    <p>If you need to email your customers, you may do it here as well.</p>
                    <p>Need to notify your supervisor? You can email them too!</p>
                    <img src={EmailGuy} alt="Credit: Molly_Hensley" title="Credit: Molly_Hensley"/>
                        <br></br><small><a href='https://dribbble.com/Molly_Hensley' target='_blank'>Illustration by Molly_Hensley</a></small>
                    
                    
                </div>
                <div className='email-form-container'>
                    <Email/>
                </div>
            </div>
            
        </section>
    )
}

export default EmailPage;