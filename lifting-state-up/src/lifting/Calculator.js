import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends Component {
    state = {
        temperature: '',
    }

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value,
        })
    }
    render() {
        const {temperature} = this.state;
        return (
          <div>
            <fieldset>
              <legend>Enter temparature in Celsius:</legend>
              <input
                type="text"
                value={temperature}
                onChange={this.onTemperatureChange}
              />
            </fieldset>
            <BoilingVerdict celcius={parseFloat(temperature)} />
          </div>
        );
    }
}
