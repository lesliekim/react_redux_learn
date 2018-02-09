import React from "react";
import { connect } from "react-redux";
import { changeColor } from "../actions";
import SelectComponent from "./component";

class SelectContainer extends React.Component {
    render() {
        return <SelectComponent onClick={this.props.onClick}
                curColor={this.props.curColor}
                preColor={this.props.preColor}/>;
    }
}

function mapStateToProps(state) {
    return {
        curColor: state.select.curColor,
        preColor: state.select.preColor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (text) => (dispatch(changeColor(text)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
