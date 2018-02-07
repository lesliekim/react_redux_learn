import React from "react";
import { ChangeValue } from "../actions";
import ShowComponent from "./component";
import { connect } from "react-redux";

class ShowContainer extends React.Component {
    render(){
        return <ShowComponent value={this.props.value} 
        changeValue={this.props.changeValue}/>;
    }
}

function mapStateToProps(state) {
    return {
        value: state.show.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (text) => (dispatch(ChangeValue(text)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);