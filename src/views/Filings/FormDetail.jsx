import React from "react";

import PDFViewer from "../../components/PDFViewer/PDFViewer";
import PDFJSBackend from "../../backends/pdfjs";

class FormDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const w = window.innerWidth - 150;
    const h = window.innerHeight - 60;

    return (
      <React.Fragment>
        <PDFViewer backend={PDFJSBackend} src={`/pdf/${this.props.form}.pdf`} />
      </React.Fragment>
    );
  }
}

export default FormDetail;
