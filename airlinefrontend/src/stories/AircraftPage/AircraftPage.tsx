import { CircularProgress, Typography,
        Divider, Card, CardActionArea, CardMedia, CardContent,
        CardActions, Button} from '@material-ui/core';
import React from 'react';
import AircraftPageCardList  from './AircraftPageCardList';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { AIRCRAFTS } from '../../api/queries';
import { Aircrafts, Aircrafts_aircrafts_nodes } from '../../api/__generated__/Aircrafts';


const AircraftPage = (): JSX.Element => {
    const [cards, setCards] = React.useState<JSX.Element[]>([]);
    
    const {loading, error, data} = useQuery<Aircrafts>(AIRCRAFTS);
  
      useEffect(() => {
          if(!loading && !error) {
              setCards(data!.aircrafts!.nodes!.map((aircraft : Aircrafts_aircrafts_nodes) => {
                  return (               
                   <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={aircraft.imageURL}
                                alt="aircraft image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {aircraft.type}
                                </Typography>
                                <Typography variant="body2">
                                        {aircraft.gitHub}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Divider/>
                        <CardActions>
                            <Button size="small" color="primary">
                                {aircraft.id[0]}
                            </Button>
                        </CardActions>
                  </Card>
                  )
              }))
          }
      }, [data]);
  
      return <div className="craftPage">
          {cards.length === 0 ? <CircularProgress /> : <AircraftPageCardList cards={cards} cols={4} />}
      </div>
    
  };
  
  export default AircraftPage;