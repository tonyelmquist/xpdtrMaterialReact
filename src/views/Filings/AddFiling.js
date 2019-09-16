import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import TextField from "@material-ui/core/TextField";

class AddFiling extends Component {
  static propTypes = {
    uid: PropTypes.string,
    firestore: PropTypes.shape({
      add: PropTypes.func.isRequired
    }).isRequired
  };
  state = { formID: "" };

  addFiling() {
    console.log(this.state.formID)
    this.props.firestore.add(
      { collection: "filings" },
      {
        uid: this.props.uid,
        formID: this.state.formID,
        dateCreated: moment().format("X"),
        dateLastEdited: moment().format("X"),
        dateFiled: null
      }
    );
    this.setState({ category: "" });
  }

  onChange = event => {
    this.setState({ formID: event.target.value });
  };
  render() {
    if (!this.props.uid) return null;
    console.log("filing");
    return (
      <div>
        <TextField
          labelText="Form"
          id="formID"
          type="text"
          value={this.state.formID}
          onChange={evt => this.onChange(evt)}
        />
        <button onClick={evt => this.addFiling()}>Add Filing</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect()
)(AddFiling);
