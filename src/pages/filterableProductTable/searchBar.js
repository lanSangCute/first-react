import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.inputHandle = this.inputHandle.bind(this)
    }
    inputHandle(e){
        this.props.onInputHandle(e.target.value)
    }
    render(){
        return (
            <div>
                <span>请输入price：</span>
                <input
                    value={this.props.inputVal}
                    onChange={this.inputHandle}
                />
            </div>
        )
    }
}