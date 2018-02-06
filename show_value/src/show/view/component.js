import React from "react";

class ShowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.refInput = this.refInput.bind(this);
    }
    onChange(){
        let text = this.input.value;
        this.props.changeValue(text);
    }
    refInput(node){
        this.input=node
    }
    render() {
        return (<div>
            <div>Value: {this.props.value}</div>
            <lable>Change me: <input type="text" ref={this.refInput} onChange={this.onChange}/></lable>
        </div>);
    }
}

export default ShowComponent