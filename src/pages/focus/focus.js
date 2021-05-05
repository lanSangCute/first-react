import React, { useRef, Component } from 'react';
import DocumentTitle from 'react-document-title'
import FocusChild from './focusChild';

function FuncitonFocus(props) {
    const refInput = useRef(null)

    function focus() {
        refInput.current.focus();
    }
    
    return (
        <div>
            <input
                type="text"
                placeholder="我是FuncitonFocus"
                ref={refInput}
            />
            <button onClick={focus}>FuncitonFocus</button>
        </div>
    );
}

class FunctionFocusClass extends Component {
    constructor(props) {
        super(props);
        
        this.textInput = null;
        this.setTextInputRef = el => {
            this.textInput = el;
        }

        this.focus = () => {
            if(this.textInput){
                this.textInput.focus();
            }
        }
    }
    
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="我是FunctionFocusClass"
                    ref={this.setTextInputRef}
                />
                <button onClick={this.focus}>FunctionFocusClass</button>
            </div>
        );
    }
}
export default class Focus extends React.Component{
    constructor(props){
        super(props)
        this.focus = this.focus.bind(this)
        this.focusChild = this.focusChild.bind(this)
        this.ref = React.createRef();

        this.childRef = React.createRef();
    }
    focus(){
        this.ref.current.focus();
    }
    focusChild(){
        this.childRef.current.focus();
    }
    render(){
        return (
            <DocumentTitle title='LANJUAN'>
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="我是当前组件"
                            ref={this.ref}
                        />
                        <button
                            onClick={this.focus}
                        >设置当前组件输入框focus</button>
                    </div>
                    <div>
                        <FocusChild childRef={this.childRef} />
                        <button
                            onClick={this.focusChild}
                        >设置子组件输入框focus</button>
                    </div>
                    <FuncitonFocus />
                    <FunctionFocusClass />
                </div>
            </DocumentTitle>
            
        )
    }
}