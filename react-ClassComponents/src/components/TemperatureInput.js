import React from 'react'


const scaleName = {
        c : 'Celsius',
        f : 'Fahrenheit'
    };

function TemperatureInput({onTemperatureChange,scale, temperature}) {

    return (
        <fieldset>
                <legend> Enter temperature in {scaleName[scale]}:</legend>
                <input type='text' value={temperature} onChange={(e)=> onTemperatureChange(e, scale)}/>
        </fieldset>
    )
}

export default TemperatureInput
