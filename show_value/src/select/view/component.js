import React from "react";

const COLORS = [`' '`, 'blue', 'white', 'red'];

class SelectComponent extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
        let text = event.target.value;
        this.props.onClick(text);
    }
    render(){
        const colorList = [];
        for (let i in COLORS) {
            colorList.push(<label key={i}>
                <input type="checkbox" value={COLORS[i]} onChange={this.onClick} checked={this.props.curColor === COLORS[i]}/>
                {COLORS[i]}</label>);
        }
        return (
            <div>
                <p>Current Color: {this.props.curColor}</p>
                <p>Previous Color: {this.props.preColor}</p>
                {colorList}
            </div>
        );
    }
}

export default SelectComponent;