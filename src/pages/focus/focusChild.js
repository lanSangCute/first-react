import React from "react";

export default class FocusChild extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <input
            type="text"
            placeholder="我是子组件"
            ref={this.props.childRef}
        />
    }
}