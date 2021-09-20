import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './SearchPageBar.css';
import {SearchPageGrid} from '../SearchPage/SearchPageGrid'; 
import {createTheme, MuiThemeProvider} from '@material-ui/core/styles';


interface IUserInput {
    SearchQuery: (string |null );
}

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  })


interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}


function SearchPageBar(props:ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");

    const handleSearchQueryChange = (s: string | null) =>{
        setSearchQuery(s);          
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);


    const [UserData , setUserData] = useState<IUserInput>({
        SearchQuery: null,
    });

    const getInput = (getIn : IUserInput) =>{
        setUserData(getIn);
    }

    const handleSubmit = () => {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery
            }
            props.SetUserInput(UserInput);
            console.log(UserInput);
            getInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }


    return <div className="SearchBarContainer">
        <MuiThemeProvider theme={theme}>
            <Grid container spacing={3}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6} sm={3}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Search"
                            variant="outlined"
                            placeholder="Input aircraft type"
                            error={HasFocus && SearchQuery === ""}
                            onClick={() => setHasFocus(true)}
                            value={SearchQuery}
                            onChange={e => handleSearchQueryChange(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    <SearchPageGrid SearchQuery={UserData.SearchQuery}/>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    </div>
}

export default SearchPageBar