import React, { Component } from 'react';

class HighBase extends Component {
    render() {
        return (
            <div>
                <button>highTest：lanjuan</button>
            </div>
        );
    }
}
function highComps(WrappedComponent){
    class HighComps extends Component{
        componentWillMount() {
            console.log('highComps lanjuan')
        }

        componentDidUpdate(prevProps, prevState) {
            console.log('old lanjuan:', prevProps,prevState);
            console.log('new lanjuan:', this.props,this.state);
        }
        
        render(){
            return [
                <WrappedComponent {...this.props} />
            ]
        }
    }
    return HighComps
}

export default highComps(HighBase)