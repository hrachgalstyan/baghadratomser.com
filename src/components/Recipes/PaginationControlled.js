import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { RecipesConsumer } from '../../context/recipes';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationControlled() {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return(
        <RecipesConsumer>
            {value => {
                const {setPage} = value;
                return (
                    <div className={`${classes.root} d-flex justify-content-center pt-4`}>
                        <Pagination count={10} page={page} onChange={handleChange} />
                    </div>
                )
            }}
        </RecipesConsumer>
    )
}