//usestate
import {useState}from 'react';
import SearchResults from './SearchResults';
//css
import '../css/Search.css';
const Search =(props)=>{

    //states
    const [searchedName, setsearchedName]=useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [noResultMsg,setNoResultMsg]=useState('');
    //two way binding
    const onsearchedNameChangeHandler=(event)=>{
        setsearchedName(event.target.value.toLowerCase());
        console.log('this is searchedName value from onchange');
        console.log(searchedName);
    }
    //search function call
    
    const onFormSearchHandler=(event)=>{
        
        //validate data
        if(searchedName==''){
            event.preventDefault();
            setSearchResult([]);
            setNoResultMsg('Name Field should not be empty');
        }else{
            setNoResultMsg('');
            event.preventDefault();
            console.log('this is search handler from search js')
            console.log(searchedName);
            setSearchResult(props.searchFunction(searchedName));
    }
}   
    return(
        <section className='search-form-container'>
            <div className='search-form'>
                <form onSubmit={onFormSearchHandler}>
                    <input
                        type='search'
                        placeholder='Enter Name Here'
                        value={searchedName}
                        onChange={onsearchedNameChangeHandler}
                    >
                    </input>
                    <button className='search-button'
                        type='submit'>
                        Search
                    </button>
                    <small>{noResultMsg}</small> 
                </form>
            </div>
        
           {/* search results here */}
           <table>
            {
            searchResult.map(result=>{
                return <SearchResults
                    givenName={result.givenName}
                    phoneNumber={result.phoneNumber}
                    email={result.email}
                    location={result.location}
                    disposition={result.disposition}
                />
            })
            }
        </table>
        </section>
    )
}

export default Search;