import React, { useState } from 'react';
import { TextField, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from '../Button/Button';
import { ADD_AIRLINE} from '../../api/mutations';
import { AddAirline } from '../../api/__generated__/AddAirline';
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
    const country = "NZ";
    const [airlineName, setAirlineName] = useState<string>("");
    const [githubUrl, setGithubUrl] = useState<string>("");
    const [description, setDescription] = useState("");
    const [submit, setSubmit] = useState(false);

    const [hasFocus, setHasFocus] = useState(false);

    const isGithubUrl = (value: string) => {
        const urlRegex = /^(http[s]{0,1}:\/\/){0,1}(github.com\/)([a-zA-Z0-9\-~!@#$%^&*+?:_=<>]*)?$/i;
        return urlRegex.test(value);
    }

    const [addProject] = useMutation<AddAirline>(ADD_AIRLINE)

    const handleSubmit = async() => {
        if (airlineName !== "" && isGithubUrl(githubUrl)) {
            console.log({"airlineName": airlineName, "githubUrl": githubUrl, "Description": description });

            try {
                await addProject({variables: {
                    name: airlineName,
                    description: description,
                    link: githubUrl,
                    country: country,
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
            <Typography variant="h4" >Submit airline here!</Typography>
            {
                submit ?
                    <Grid>
                        Congratulations! Airline has been submitted successfully.
                    </Grid> : null
            }
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Airline Name" fullWidth
                        error={hasFocus && airlineName === ""}
                        value={airlineName}
                        className={hasFocus && airlineName === ""?"":classes.root}
                        helperText="Invalid Airline Name"
                        onChange={e => setAirlineName(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Github URL" fullWidth
                        error={hasFocus && (githubUrl === "" || !isGithubUrl(githubUrl))}
                        value={githubUrl}
                        onChange={e => setGithubUrl(e.target.value)}
                        className={hasFocus && (githubUrl === "" || !isGithubUrl(githubUrl))?"":classes.root}
                        helperText="Invalid URL" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={5}
                        placeholder="Introduce your project..."
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