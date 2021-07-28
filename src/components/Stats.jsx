import React from 'react'
import { 
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles
         } from '@material-ui/core';

    const useStyles = makeStyles({
        table: {
            minWidth: 450,
        },
    });

  

export default function Stats(props) {
    const classes = useStyles();
    if(props.FFXIVData) {
        
        return (
        
            <div className="char-stats-content">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Attributes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            Object.values(props.FFXIVData.Character.GearSet.Attributes).map((attributeInfo) => {
                                    return(
                                        <TableRow key={attributeInfo.Attributes.Name}>
                                            <TableCell component="th" scope="row">
                                                {attributeInfo.Value}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
    else {
        return (
        <div className="char-stats-content">
            <Typography variant="h3" >
                No stats to show yet..
            </Typography>
        </div>
        )
    }
}
