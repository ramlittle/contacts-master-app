//component
import NotInterested from '../components/NotInterested';

//css
import '../css/General.css';
const NotInterestedPage =(props)=>{
    return (
        <>
        <section className='table-container'>
             {/* NOT INTERESTED SECTION */}
      <table>
        <tbody>
          <tr
          className='row-header'
          >
            <td colspan='7'>NOT INTERESTED <span>{props.notInterested.length}</span></td>
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
          props.notInterested.slice(0).reverse().map(contact=>{
            return <NotInterested
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

export default NotInterestedPage;