import React, { useState, useEffect }  from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ( {handleCountryChange} ) => {

    const [countryData, setcountryData] = useState([]);
    useEffect( () => {

        const fetchAPI = async () => {
            setcountryData(await fetchCountries());
        }

        // console.log(countryData)

        fetchAPI();


    }, [setcountryData]);

    // console.log(countryData)

    return(
        
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value) }>
                <option value="global">Global</option>
                {countryData.map((country, i) => <option key={i} value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
        
    )
}

export default CountryPicker