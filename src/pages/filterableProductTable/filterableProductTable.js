import React from 'react';
import SearchBar from './searchBar';
import ProductTable from  './productTable';
export default class FilterableProductTable extends React.Component{
    constructor(props){
        super(props)

        this.inputHandle = this.inputHandle.bind(this);

        this.state = {
            inputVal:''
        }
    }
    inputHandle(e){
        this.setState({
            inputVal:e
        })
    }
    render(){
        const {
            inputVal
        } = this.state;
        return (
            <div>
                filterableProductTable ：
                <SearchBar
                    inputVal={inputVal}
                    onInputHandle={this.inputHandle}
                />
                {inputVal}
                <ProductTable
                    inputVal={inputVal}
                />
            </div>
        )
    }
}