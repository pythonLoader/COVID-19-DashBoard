import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {

    let changedURL = url;
    if(country){
        if(country === "global"){
            changedURL = url;

        }
        else{
            changedURL = `${url}/countries/${country}`
        }
        
    }
    
    try{
        const { data: { confirmed,deaths,recovered,lastUpdate } } = await axios.get(changedURL);

        const modified_Data = { confirmed, deaths, recovered, lastUpdate };
        return modified_Data;

    }catch(error){
        console.log(error);
    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        // console.log(data)
        const modified_Data = data.map((dailyData) => ({ 
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date : dailyData.reportDate
        }));
        return modified_Data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        // const modified_Data = data.map((countryData) => ({ 
        //     cont_: countryData.countries.names

        // }));

        return data.countries.map( ( country ) => country.name )
        // return modified_Data
        // console.log(response)

    } catch (error) {
        console.log(error);
    }
}


// export const fetchData = async () => {
//     try{
//         const { data } = await axios.get(url);

//         const modified_Data = {
//             confirmed: data.confirmed,
//             deaths: data.deaths,
//             recovered: data.recovered,
//             lastUpdate: data.lastUpdate
//         }
//         return modified_Data

//     }catch(error){

//     }

// }