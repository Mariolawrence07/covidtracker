import React from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import { Cards, Charts, CountryPicker} from './components';
import{fetchData} from './api';
class App extends React.Component {

    state = {
        data:{},
        country:"",
    }
  async componentDidMount(){
       const fetchedData = await fetchData();

       this.setState({data:fetchedData});

       
   }
   handleCountryChange = async (country) => {
       
       //    fetch the data
       const fetchedData = await fetchData(country);
    //    set the state
       this.setState({data:fetchedData, country:country});
   }
    
    
    render() { 
        const {data, country} = this.state;
        return ( 
        <div className={styles.container}>
            <Cards  data= {data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Charts data={data} country={country} />
        </div>  
        );
    }
}
 
export default App;