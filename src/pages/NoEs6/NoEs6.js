let createReactClass = require('create-react-class')

let SetIntervalMixin = {
    componentWillMount:function(){
        this.intervals = [];
    },
    setInterval:function(){
        this.intervals.push(setInterval.apply(null,arguments))
    },
    componentWillUnmount:function(){
        this.intervals.forEach(clearInterval)
    }
};

let NoEs6 = createReactClass({
    mixins:[SetIntervalMixin],
    // 声明默认属性，无论是函数组件还是 class 组件，都拥有 defaultProps 属性
    getDefaultProps: function() {
        return {
            name: 'Mary'
        };
    },
    // 初始化 State
    getInitialState: function() {
        return {
            name: this.props.name,
            seconds: 0
        };
    },
    componentDidMount:function(){
        this.setInterval(this.tick,1000)
    },
    tick:function() {
        this.setState((state, props) => { return { 
            seconds:state.seconds + 1
         }});
          
    },
    render:function(){
        // const state = this.getInitialState();
        return <h1>NoEs6:Hello, {this.state.name}-{this.state.seconds}</h1>;
    }
})

export default NoEs6