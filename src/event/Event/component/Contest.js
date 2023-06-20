import  axios from "axios";
import React, { useEffect, useState } from "react";
import Contest from './Contest/Contest'
import Program from './Contest/Program'


const About = () => {

    const [User, setuser] = useState('');
    useEffect(() => {
  axios.get(`${process.env.REACT_APP_ULR_API}/global/624dd766a0b1a8253012eec9`)
 .then((response) => {
   setuser(response.data);});
   }, [ ]);
   console.log('event',User.select_event_name)

 let About 

    if(User.select_event_name=='program'){
         About= <Program/>

    }else if(User.select_event_name=='contest'){
         About= <Contest/>
    }else{
         return null
    }


    return (

        <div>
           {About}

        </div>
    );
}

export default About;
