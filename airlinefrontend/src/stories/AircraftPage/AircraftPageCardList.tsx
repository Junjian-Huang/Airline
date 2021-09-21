import { ImageList, ImageListItem,makeStyles, createStyles } from '@material-ui/core';

const CardListStyles = makeStyles(createStyles({
    cardList: {
        width: '100%',
        gap: '1%'
    },
    cardListItem: {
        minWidth: '280px'
    }
}));

interface CardListProps {
    cards: JSX.Element[],
    cols: number
};

const AircraftPageCardList = ({cards, cols} : CardListProps) : JSX.Element => {
    const styles = CardListStyles();
    return <ImageList className={styles.cardList} cols={cols} rowHeight={'auto'}>
            {Itemize(cards)}
        </ImageList>
};

const Itemize = (cards : JSX.Element[]) : JSX.Element[] => {
    const styles = CardListStyles();
    const out : JSX.Element[] = [];
    
    //TODO: If we have time, set the rows and cols taken up based on the code size / some metric.
    cards.forEach(card => {
        out.push(<ImageListItem className={styles.cardListItem}>
                {card}
            </ImageListItem>)
    });

    return out;
}

export default AircraftPageCardList;