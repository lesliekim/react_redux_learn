import React from "react";
import ButtonComponent from "./component";
import { clickButton } from "../actions";
import { connect } from "react-redux";

class ButtonContainer extends React.Component {
    render() {
        return <ButtonComponent buttons={this.props.buttons} onClick={this.props.onClick}/>;
    }
}

function mapStateToProps(state) {
    return {
        buttons: state.button
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (id) => dispatch(clickButton(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);