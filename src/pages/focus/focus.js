import React from 'react';
import DocumentTitle from 'react-document-title'
import FocusChild from './focusChild';
export default class Focus extends React.Component{
    constructor(props){
        super(props)
        this.focus = this.focus.bind(this)
        this.focusChild = this.focusChild.bind(this)
        this.ref = React.createRef();

        this.childRef = React.createRef();
    }
    focus(){
        console.log(this.ref.current,'this.ref.current')
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
                            ref={this.ref} />
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
                </div>
            </DocumentTitle>
            
        )
    }
}