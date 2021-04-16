import React from 'react';
export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
        this.tick = this.tick.bind(this)
    }
    render(){
        return (
            <div>
                <h1> Hello, world </h1>
                <div>
                    It is { this.state.date.toLocaleTimeString() }
                </div>
            </div>
        )
    }
    // 方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
}