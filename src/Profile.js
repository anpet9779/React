import React,{useState} from 'react';

export default function Profile(){

    const[condition, setCondition]=useState(3);

    return(
        <div>
            {condition == 1?<h1>True</h1>:condition == 2?<h1>False</h1>:<h1>Neutral</h1>}
        </div>
    );

    
}