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
  }
  render() {
    let title;
    switch(this.props.type){
      case 'numbers':
      title = 'Numbers(ex: 0,1,2,3...) Size';
      break;
      case 'texts':
      title = 'Numbers Text (ex: Year, Month,...) Size';
      break;
    }
    return (
      <div className="EctSlider">
        <span className="title">{title}</span>
        <Slider defaultValue={0.2}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, newCustomTexts: state.newCustomTexts};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctSlider);
