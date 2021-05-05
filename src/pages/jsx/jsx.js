import React, { Component } from 'react';

const component = {
    JsxTp1:function JsxTp1(props){
        return <div {...props}>Jsx:Hello1 Lanjuan</div>
    },
    JsxTp2:class JsxTp2 extends Component{
        constructor(props) {
            super(props);
        }
        render() {
            let items = [];
            for (let i = 0; i < this.props.numTimes; i++) {
                items.push(this.props.children(i,`lanjuan-${i}`));
            }
            return (
                <div>
                    <div {...this.props}>Jsx:Hello2 Lanjuan</div>
                    <div>{items}</div>
                </div>
            )
        }
    }
}
function Jsx(props) {
    const {kind,...other} = props;
    console.log(kind,other)
    return [
        <component.JsxTp1 {...other} />,
        <component.JsxTp2 numTimes={10} {...other}>
            {(index,indexName)=><div key={index}>函数组件：{index}----{indexName}</div>}
        </component.JsxTp2>
    ];
}

export default Jsx;