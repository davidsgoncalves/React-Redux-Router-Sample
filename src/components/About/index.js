// src/components/About/index.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNumber } from '../../stores/reducers/About/index';
import './style.css';

export default class About extends Component {
  constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  onClick(){
      this.props.dispatch(addNumber());
  }

  render() {
    const { number } = this.props;
    return (
      <div className={'About'} >
        <h1>
          About
            <p>{number}  </p>
            <button color="danger" onClick={this.onClick}>Button</button>
        </h1>
      </div>
    );
  }
}

About.propTypes = {
    number: PropTypes.number,
    dispatch: PropTypes.func
};