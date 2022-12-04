//component
import Interested from '../components/Interested';

//css
import '../css/General.css';
const InterestedPage =(props)=>{
    return(
        <>
        <section className='table-container'>
     {/* INTERESTED SECTION */}
      <table border='1'>
        <tbody>
          <tr
            className='row-header'
          >

            <td colspan='7'>INTERESTED <span>{props.interested.length}</span></td>
          </tr>
          <tr className='row-header'>
            <td>NAME</td>
            <td>PHONE NUMBER</td>
            <td>EMAIL</td>
            <td>LOCATION</td>
            <td>DISPOSITION</td>
            <td>ACTION</td>
          </tr>
        {
          //reverse the display of map when display
          props.interested.slice(0).reverse().map(contact=>{
            return <Interested
                key={contact.phoneNumber}
                givenName={contact.givenName}
                phoneNumber={contact.phoneNumber}
                email={contact.email}
                disposition={contact.disposition}
                location={contact.location}
            />
          })
        }
        </tbody>
       </table> 
       </section>
        </>
    )
}

export default InterestedPage;