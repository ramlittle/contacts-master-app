//component
import DoNotCall from '../components/DoNotCall';

//css
import '../css/General.css';
const DoNotCallPage =(props)=>{
    return(
        <>
        <section className='table-container'>
        {/*DO NOT CALL SECTION */}
      <table>
        <tbody>
          <tr
            className='row-header'
          >
            <td colspan='7'>DO NOT CALL <span>{props.doNotCall.length}</span></td>
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
          props.doNotCall.slice(0).reverse().map(contact=>{
            return <DoNotCall
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

export default DoNotCallPage;