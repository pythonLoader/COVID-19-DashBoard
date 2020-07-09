import React from 'react'
import { Card, Typography, Grid } from '@material-ui/core';
import CardComponent  from '@material-ui/core/Card';
import CountUp from 'react-countup';
import cx from 'classnames';


import styles from './Cards.module.css';


const Cards = ( { data: { confirmed, recovered,deaths, lastUpdate } } ) => { 
    //have to destructure sent prop (data) first, otherwise four parameters won't work
    
    if(!confirmed){
        return "loading...";
    }
    return(
        <div className= {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.infected)} >
                    <CardComponent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant= "h5">  
                            <CountUp start={0} end = {confirmed.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of COVID-19 cases</Typography>
                    </CardComponent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.recovered)} >
                    <CardComponent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant= "h5">
                            <CountUp start={0} end = {recovered.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19.</Typography>
                    </CardComponent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.deaths)} >
                    <CardComponent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant= "h5">
                            <CountUp start={0} end = {deaths.value} duration = {2.5} separator = ","/>   
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19.</Typography>
                    </CardComponent>
                </Grid>

            </Grid>
            

        </div>
    );
}

export default Cards