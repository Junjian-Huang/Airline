import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import { Grid } from '@material-ui/core';
import './SearchPageGrid.css';


interface IUserInput {
    SearchQuery: (string |null );
}


export function SearchPageGrid(props: IUserInput) {
        
      interface IState {
            webformatURL: string ;
            tags: string;
        }



    const [ItemArray, setItemArray] = useState<IState[]>([{webformatURL: '', tags:''}]);
    const apik = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        fetch('https://pixabay.com/api/?key='+ apik +'&q='+ props.SearchQuery +'+flowers&image_type=photo')
            .then(response => response.json())
            .then(response => {
                setItemArray(response.hits)
            })      
            .catch(() => console.log("it didn't work")
            );
    }, [props.SearchQuery]);
    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.webformatURL[0]) {
            console.log("nothing");
            return;
        }  
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MediaCard ImageUrl={el.webformatURL} Description={'These are tags from the image:'+ ' ' +el.tags} />
            </Grid>)
    })

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

//export default MediaGrid