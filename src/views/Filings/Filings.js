import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Button from "@material-ui/core/Button";

import MaterialTable from "material-table";
import AddFiling from "./AddFiling";
import FormDetail from "./FormDetail";

class Filings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPdf: false,
      formType: "",
      formID: "",
      formContent: {}
    };
  }

  formatFilings = filings => {
    let formattedFilings;

    formattedFilings = filings.map(filing => {
      return {
        ...filing,
        created: moment.unix(filing.dateCreated).format("MMMM Do YYYY, h:mm a"),
        updated: moment
          .unix(filing.dateLastEdited)
          .format("MMMM Do YYYY, h:mm a"),
        filed: filing.dateFiled
          ? moment.unix(filing.dateFiled).format("MMMM Do YYYY, h:mm a")
          : ""
      };
    });
    return formattedFilings;
  };

  showPdf = form => {
    this.setState({
      formID: form.formID,
      content: form.content,
      showPdf: true
    });
  };

  closeForm = () => {
    this.setState({
      formID: "",
      content: "",
      showPdf: false
    });
  };

  render() {
    return (
      <GridContainer>
        {this.props.filings && !this.state.showPdf && (
          <GridItem xs={12} sm={12} md={12}>
            <MaterialTable
              columns={[
                { title: "Form", field: "formID" },
                { title: "Created", field: "created" },
                { title: "Updated", field: "updated" },
                { title: "Filed", field: "filed" }
              ]}
              data={this.formatFilings(this.props.filings)}
              title="Forms"
              actions={[
                {
                  icon: "picture_as_pdf",
                  tooltip: "Open PDF",
                  onClick: (event, rowData) => this.showPdf(rowData)
                },
                {
                  icon: "delete",
                  tooltip: "Delete User",
                  onClick: (event, rowData) =>
                    alert("You want to delete " + rowData.name)
                }
              ]}
            />

            <AddFiling />
          </GridItem>
        )}
        {this.state.showPdf && (
          <GridItem xs={12} sm={12} md={12}>
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.closeForm}
            >
              Cancel
            </Button>
            <FormDetail form={this.state.formID} content={this.state.content} />
          </GridItem>
        )}
      </GridContainer>
    );
  }
}

export default compose(
  firestoreConnect(["filings"]), // or { collection: 'todos' }
  connect((state, props) => ({
    filings: state.firestore.ordered.filings
  }))
)(Filings);
