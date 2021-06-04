import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CovidMap from './Covidmap';
import Legend from './Legend';

const Covid19 = () => {
    const [countries, setCountries] = useState(["korea"]);
    return (<div>
        {countries.length === 0 ? (
        <Loading/>
        ) : (
        <div> 
            <CovidMap/> 
            <Legend/> 
        </div>
        )}
    </div>
    );
}; 
 
export default Covid19;