import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import newCustomTexts from '../reducers/modifiers/customTexts';
import newStyle from '../reducers/modifiers/style';
import moment from "moment";
import axios from "axios";
import {Slider} from 'material-ui';

class EctSlider extends Component {
  constructor(props) {
    super(props);
    this.modifySize = this
      .modifySize
      .bind(this);
    this.state = {
      minNr: 12,
      maxNr: 80
    }
  }
  modifySize(evt, val) {
    const originalDateTime = this.props.dateTimeSel;
    let newDateTime = originalDateTime;
    const newValue = parseInt(val * this.state.maxNr);
    if (newValue <= this.state.minNr) {
      newValue = this.state.minNr;
    }
    switch (this.props.type) {
      case 'numbers':
        newDateTime.style.numbersSize = newValue;
        break;
      case 'texts':
        newDateTime.style.numbersTxtSize = newValue;
        break;
    }
    this
      .props
      .selectDate(newDateTime);

  }
  render() {
    let startTitle,
      startNr;
    let originalDateTime = this.props.dateTimeSel;
    switch (this.props.type) {
      case 'numbers':
        startTitle = 'Numbers(ex: 0,1,2,3...) Size';
        if (this.state.dateTimeSel) {
          startNr = (this.props.dateTimeSel.style.numbersSize / this.state.maxNr) ;

        } else {
          startNr = (this.props.dateTime.style.numbersSize / this.state.maxNr);
        }
        break;
      case 'texts':
        startTitle = 'Numbers Text (ex: Year, Month,...) Size';
        if (this.state.dateTimeSel) {
          startNr = (this.props.dateTimeSel.style.numbersTxtSize / this.state.maxNr);
        } else {
          startNr = (this.props.dateTime.style.numbersTxtSize / this.state.maxNr);
        }
        break;
    }

    return (
      <div className="EctSlider">
        <span className="title">{startTitle}</span>
        <Slider defaultValue={startNr} onChange={this.modifySize}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, dateTime: state.dateTime};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctSlider);
