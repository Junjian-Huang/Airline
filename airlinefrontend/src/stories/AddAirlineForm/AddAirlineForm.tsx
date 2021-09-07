import React, { useState } from 'react';
import { TextField, Typography, Grid, Container, Divider } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from '../Button/Button';
import { ADD_AIRLINE} from '../../api/mutations';
import { AddAirline } from '../../api/__generated__/AddAirline';
import { useMutation } from '@apollo/client';

import './AddAirlineForm.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      "& .MuiFormHelperText-root": {
        color: "white",
      }
    }
  }));


export interface SubmitFormProps {

}


export const AddAirlineForm: React.FC<SubmitFormProps> = () => {
    const classes = useStyles();
    const country = "NZ";
    const [airlineName, setAirlineName] = useState<string>("");
    const [departure, setDeparture] = useState<string>("");
    const [destination, setDdestination] = useState<string>("");
    const [submit, setSubmit] = useState(false);

    const [hasFocus, setHasFocus] = useState(false);

    const [addAirline] = useMutation<AddAirline>(ADD_AIRLINE)


    const handleSubmit = async() => {
        if (destination !== "" && departure !== "" && airlineName !== "") {
            console.log({"departure": departure, "destination": destination, "airlineName": airlineName, "country": country });
            
            try {
                    await addAirline({variables: {
                        departure: departure,
                        destination: destination,
                        name: airlineName,
                        country: country,
                    }})
                setSubmit(true);
            } catch(e) {
                console.log(e)
            }
        }else{
            setHasFocus(true);
        }
    };

    return (
        <Container className="form_container">
            <Typography variant="h4" >Add New Airline</Typography>
            <Divider/>
            {
                submit ?
                    <Grid>
                        Congratulations! Airline has been submitted successfully.
                    </Grid> : null
            }
            <Grid container spacing={4}>

                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Departure" fullWidth
                        error={hasFocus && departure === ""}
                        value={departure}
                        className={hasFocus && departure === ""?"":classes.root}
                        helperText="Please fill Departure place !"
                        onChange={e => setDeparture(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Destination" fullWidth
                        error={hasFocus && destination === ""}
                        value={destination}
                        className={hasFocus && destination === ""?"":classes.root}
                        helperText="Input Destination place please !"
                        onChange={e => setDdestination(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="AirlineName" fullWidth
                        error={hasFocus && airlineName === ""}
                        value={airlineName}
                        className={hasFocus && airlineName === ""?"":classes.root}
                        helperText="Fill Airline name please !"
                        onChange={e => setAirlineName(e.target.value)} />
                </Grid>               
                
            </Grid>
            <Button className="form_button" backgroundColor="limegreen" label="Submit" onClick={handleSubmit} primary size="medium" />
        </Container>
    );
};