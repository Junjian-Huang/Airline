import { makeStyles, createStyles, CircularProgress, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { CardList, GithubCard, SectionHeader } from './stories';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { AIRLINES } from './api/queries';
import { Airlines,Airlines_airlines_nodes } from './api/__generated__/Airlines';

const FeedPageStyles = makeStyles(
  createStyles({
    header: {
        position: 'sticky'
    },
    page: {
        padding: '20px'
    }
}));

export interface FeedPageProps {
  pageTitle: string;
}

const FeedPage = ({ pageTitle }: FeedPageProps): JSX.Element => {
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  
  const {loading, error, data} = useQuery<Airlines>(AIRLINES)
  const styles = FeedPageStyles();

    useEffect(() => {
        if(!loading && !error) {
            setCards(data!.airlines!.nodes!.map((airline : Airlines_airlines_nodes) => {
                return <GithubCard 
                    avatar={<Avatar>{airline.aircraft.type[0]}</Avatar>}
                    cardTitle={airline.name}
                    subHeader={airline.aircraft.type}
                    cardContent={<Typography>{airline.name}</Typography>}
                    url={airline.destination}
                 />
            }))
        }
    }, [data]);

    return <div className={styles.page}>
        <div className={styles.header}>
            <SectionHeader sectionTitle={pageTitle} doClick={() => { }} />
        </div>
        {cards.length === 0 ? <CircularProgress /> : <CardList cards={cards} cols={window.innerWidth / 650} />}
    </div>
  
};

export default FeedPage;
