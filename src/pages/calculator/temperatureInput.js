import React from "react";

export default class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const {
            temperature,scale
        } = this.props

        return (
            <div>
                <label></label>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}