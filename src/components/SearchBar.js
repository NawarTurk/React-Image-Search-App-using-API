function SearchBar() {
    
   const handleFormSubmit = () => {
        console.log('sdfsfd'        )
    }
    
    return( //input ele inside of form ele -> automatic behaviour in the browser which is  enter=submit event is triggered that we can listen to and know that the userhit the enter
        <div>
            <form onSubmit={handleFormSubmit}> 
                <input/>  
            </form>
        </div>
    );
}
// click enter in the form
    // 1 trigger submit
    // 2. collect teh info in the form and make a network request to the current  url    myapp.com?email=sdfsdf@sdfs.com&password=asdas  if u have a form that has a name and an email
export default SearchBar;