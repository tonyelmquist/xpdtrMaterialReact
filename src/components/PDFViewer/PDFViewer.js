import React from 'react';

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    const { src } = this.props;
    const element = this.viewerRef.current;
    console.log(src)
    this.backend.init(src, element);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  

  render() {
    return (
      <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: this.state.height - 130 }}>

      </div>
    )
  }
}