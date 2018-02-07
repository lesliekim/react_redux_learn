import React from "react";

class ButtonComponent extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(event){
        let id = event.target.id;
        this.props.onClick(id);
    }
    render(){
        const buttons = []
        for (let i=0; i<this.props.buttons.length; i++) {
            let btn = this.props.buttons[i];
            let background = "white";
            if (btn.active) {
                background = "yellow";
            }
            buttons.push(<button key={i} id={btn.id} style={{backgroundColor: background}} onClick={this.onClick}>{btn.name}</button>)
        }
        return (<div>
            {buttons}
        </div>);
    }
}

export default ButtonComponent;