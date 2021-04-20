import React from 'react';
import { themes,ThemeContext } from './theme-context'

class ThemedButtonChild extends React.Component{
    static contextType = ThemeContext
    render(){
        let props = this.props;
        let theme = this.context;
        return (
            <button
              {...props}
              style={{backgroundColor: theme.background}}
            />
          );
    }
}
class ThemedButtonChild2 extends React.Component{
    static contextType = ThemeContext
    render(){
        let props = this.props;
        let theme = this.context;
        console.log(this.context)
        return  <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => (
                        <button onClick={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                        Toggle Theme
                        </button>
                    )}
                </ThemeContext.Consumer>
    }
}

// 一个使用 ThemedButtonChild 的中间组件
function Toolbar(props) {
    return (
      <ThemedButtonChild onClick={props.changeTheme}>
        Change Theme
      </ThemedButtonChild>
    );
}

export default class ThemeButton extends React.Component{
    constructor(props){
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this)
        this.state = {
            theme:themes.light,
            toggleTheme:this.toggleTheme
        }
    }
    toggleTheme(){
        this.setState(state => ({
            theme:
              state.theme === themes.dark
                ? themes.light
                : themes.dark,
          }));
    }
    render(){
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                {/* <ThemeContext.Provider value={this.state}>
                    <ThemedButtonChild2 />
                </ThemeContext.Provider> */}
            </div>
        )
    }
}