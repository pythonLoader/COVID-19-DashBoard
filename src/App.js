import React from 'react'

import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './Components'
import { fetchData } from './api'

import coronaImage from './Images/Image.png';

class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data:fetchedData });
    }

    handleCountryChange = async (country) => {

        // console.log(country)
        const fetchedData = await fetchData(country)

        // console.log(fetchedData)

        this.setState({ data:fetchedData , country: country });
        //fetch the data
        //set the state
    }

    render(){

        const { data,country } = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.Image} src={coronaImage} alt="Covid-19" />
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
        
    }
}

export default App