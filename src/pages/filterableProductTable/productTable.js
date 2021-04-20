import React, {Fragment}from 'react';

const base = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
export default class ProductTable extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul>
                {/* Fragment */}
                {
                    base.filter(item=>item.price.includes(this.props.inputVal)).map(item=>(
                        <Fragment key={item.name}>
                            <li>
                                {item.category}-{item.price}-{item.stocked}-{item.name}
                            </li>
                        </Fragment>
                    ))
                }
                {/* 或者 短语法 */}
                {
                    base.filter(item=>item.price.includes(this.props.inputVal)).map(item=>(
                        <>
                            <li>
                                {item.category}-{item.price}-{item.stocked}-{item.name}
                            </li>
                        </>
                    ))
                }
            </ul>
        )
    }
}