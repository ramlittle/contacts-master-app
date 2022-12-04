//css
import '../css/LoginPage.css';

//image
import Person from '../images/aboutperson.png';
const LoginPage =()=>{
    return(
        <section className='login-container'>
            <div className='login-logo'>
                <img src={Person} alt='person image'></img>
                <span>Contacts Master</span>
            </div>
            
            <form className='login-form'>
                <label>Username: </label>
                <input type='text'/>
                <label>Password</label>
                <input type='password'/>
                <button type='submit'>Login</button>
            </form>
        </section>
    )
}
export default LoginPage;