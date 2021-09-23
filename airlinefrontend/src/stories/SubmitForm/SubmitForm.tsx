import React, { useState } from 'react';
import { TextField, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from '../Button/Button';
import { ADD_DESCRIPTION} from '../../api/mutations';
import { AddDescription } from '../../api/__generated__/AddDescription';
import { useMutation } from '@apollo/client';

import './SubmitForm.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      "& .MuiFormHelperText-root": {
        color: "white",
      }
    }
  }));


export interface SubmitFormProps {

}

export const SubmitForm: React.FC<SubmitFormProps> = () => {
    const classes = useStyles();
    const [airlineID, setAirlineID] = useState<string>("");
    //const [craftId, setCraftId] = useState<string>("");
    const [description, setDescription] = useState("");
    const [submit, setSubmit] = useState(false);

    const [hasFocus, setHasFocus] = useState(false);

    /*const isGithubUrl = (value: string) => {
        const urlRegex = /^(http[s]{0,1}:\/\/){0,1}(github.com\/)([a-zA-Z0-9\-~!@#$%^&*+?:_=<>]*)?$/i;
        return urlRegex.test(value);
    }*/

    const [addDescription] = useMutation<AddDescription>(ADD_DESCRIPTION);

    const handleSubmit = async() => {
        if (airlineID !== "" && description !== "") {
            console.log({"airlineName": airlineID, "Description": description });

            try {
                await addDescription({variables: {
                    content: description,
                    airlineId: airlineID,
                    
                }})
                setSubmit(true)
            } catch(e) {
                console.log(e)
            }
        }else{
            setHasFocus(true);
        }

    };

    return (
        <Container className="form_container">
            <Typography variant="h4" >Airline Description Submit Here!</Typography>
            {
                submit ?
                    <Grid>
                        <Typography variant="h4" component="div" className="submitedText">
                            Airline Description submitted.
                        </Typography>    
                    </Grid> : null
            }
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Airline ID" fullWidth
                        error={hasFocus && airlineID === ""}
                        value={airlineID}
                        className={hasFocus && airlineID === ""?"":classes.root}
                        helperText="Please input Airline ID"
                        onChange={e => setAirlineID(e.target.value)} />
                </Grid>
                
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={5}
                        placeholder="Describe Airline detail...."
                        variant="outlined"
                        fullWidth
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Grid>
                
            </Grid>
            <Button className="form_button" backgroundColor="limegreen" label="Submit" onClick={handleSubmit} primary size="medium" />
        </Container>
    );
};