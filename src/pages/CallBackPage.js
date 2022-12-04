//component
import CallBack from '../components/CallBack';

//css
import '../css/General.css';
const CallBackPage =(props)=>{
    return(
        <>
        <section className='table-container'>
            {/*CALL BACK SECTION */}
      <table border='1'>
        <tbody>
          <tr 
          className='row-header'>
            <td colspan='7'>Call Back <span>{props.callBack.length}</span></td>
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
          props.callBack.slice(0).reverse().map(contact=>{
            return <CallBack
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

export default CallBackPage;