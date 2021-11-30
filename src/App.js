import React, {  useState, useEffect } from 'react'

import axios from 'axios';
import Weather from './Weather';
const App = () => {

    const [city, setCity] = useState('');
    const [list, setList] = useState('');

    const apiKey = "f518846b7e9d25426cc5677577d0ee55";

 

useEffect(()=>{

    if(city){

        y();

    }


    


},[]);
            
    const y =  async ()=>{

                 const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
                 setList(data);
                 console.log(data);
                 setCity('');
                 

         }
         
         
    

    return (

        
        <>

<h1 className="world">Building Weather App</h1>
<input type="text" onChange={(e)=>setCity(e.target.value)} value={city} placeholder="Search Weather"/>
<button onClick={()=>y()}>search</button>
{list && <Weather  {...list}/>}
               

        </>
    )
}

export default App
