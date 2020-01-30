import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isCollapsed: true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  render() {
      // const { heading, content } = this.props;
      const { isCollapsed } = this.state;
    
      return (
        <div className="Accordion">
            <div className="Heading" onClick={this.onClick}><h2>{ this.props.heading }</h2></div>
            <h2>I am a {this.props.brand.model}!</h2>
            { !isCollapsed && <div className="Content">{ this.props.content }</div> }
        </div>  
      );
  }
}

Accordion.propTypes = {
  onClick: PropTypes.func,
  heading: PropTypes.string,
  content: PropTypes.string,
  brand: PropTypes.shape({
    name: PropTypes.string,
    model: PropTypes.string.isRequired
  })
};

export default Accordion;
