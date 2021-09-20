import React,{useState} from 'react';
import SearchPageBar from '../SearchPage/SearchPageBar';


function SearchPage() {

    interface IUserInput {
        SearchQuery: (string |null );
    }

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: null,
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="SearchPage">    
      <SearchPageBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
    </div>
  );
}

export default SearchPage;
