//components
import NewContacts from '../components/NewContacts';
import AddNewContact from '../components/AddNewContact';

//css
import '../css/General.css';
const NewContactPage =(props)=>{
    return(
        <>
        <AddNewContact/>
        {/* NEW CONTACTS SECTION */}
        <section className='table-container'>

        
      <table>
        <tbody>
          <tr>
            <td 
              className='row-header'
            colspan='7'>NEW CONTACTS <span>{props.newContact.length}</span></td>
          </tr>
          <tr className='row-header'>
            <td>NAME</td>
            <td>PHONE NUMBER</td>
            <td>EMAIL</td>
            <td>LOCATION</td>
            <td>ACTION</td>
          </tr>
        {
          //reverse the display of map when display
          props.newContact.slice(0).reverse().map(contact=>{
            return <NewContacts
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

export default NewContactPage;