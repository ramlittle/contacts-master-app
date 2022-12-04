//csv
import {CSVLink} from 'react-csv';

//css
import '../css/DownloadPage.css';

//image
import DownloadPerson from '../images/downloadperson.png';
const DownloadPage =(props)=>{
    //declare data
    const allContacts=props.allContacts;
    console.log('all contacts',allContacts);
    //declare headers
    const headers=[
            {label:'givenName',key:'givenName'},
            {label:'phoneNumber',key:'phoneNumber'},
            {label:'email',key:'email'},
            {label:'location',key:'location'},
            {label:'disposition',key:'disposition'}
    ]
    //csvlink
    const csvLink={
        filename:'file.csv',
        headers:headers,
        data:allContacts,
    }
    return(
        <section className='download-container'>
            <div className='download-header-container'>
                <h2>Downloads</h2>
            </div>
            <div className='download-area'>
                <div>
                    <img src={DownloadPerson} alt='Creator: illusart | Credit: Getty Images/iStockphoto'/>
                    <small>
                        <a 
                        href='https://www.istockphoto.com/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style-gm980239992-266322157?utm_medium=organic&utm_source=google&utm_campaign=iptcurl' title='person stockton photo' target_='_blank'>Photo Credit:Getty Images/iStockphoto</a>
                    </small>
                </div>
                <div className='download-section'>
                    <div className='download-message-container'>
                        <p>
                            Hey, there! Just click the download
                            button to you have a copy of the latest
                            contacts that are here in the system!
                        </p>
                        <p>
                            Smile and Dial! Stay Awesome dear caller!
                        </p>
                    </div>
                    <div className='download'>
                        <CSVLink {...csvLink}
                            className='download-csv-link'
                        >Download</CSVLink>
                        <div className='download-message'>This will download all contacts</div>
                    </div>
                </div>
                
                
            </div>

        </section>
    )
}

export default DownloadPage;