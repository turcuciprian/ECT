import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate, changeLayout, changeStyle, changeCustomText} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import newCustomTexts from '../reducers/modifiers/customTexts';
import newStyle from '../reducers/modifiers/style';
import moment from "moment";
import axios from "axios";

class EctButtons extends Component {
  constructor(props) {
    super(props);
    this.insertTimerData = this.insertTimerData.bind(this);
    this.deletePopup = this.deletePopup.bind(this);
  }
  insertTimerData() {
    let _data = {};
    _data['data'] = this.props.dateTimeSel;
    console.log(_data);
    _data['ectKs'] = ectKs;
    axios.put('http://localhost/wordpress/wp-json/ect/v2/addTimer', _data).then(function(response) {
      console.log(response);
    });
  }
  deletePopup() {
    if (typeof window.ectWPClosePopupButton != "undefined") {
      window.ectWPClosePopupButton();
    }
    this.props.changeCustomText({
        Years: 'a',
        Months: 'b',
        Weeks: 'c',
        Days: 'd',
        Hours: 'e',
        Minutes: 'f',
        Seconds: 'g'
    })
  }
  render() {
    return (<div className="buttons">
      <p>
        <button type="button" className="insert" onClick={this.insertTimerData}>Add Timer</button>
      </p>
      <p>
        <button type="button" onClick={this.deletePopup}>Close Popup</button>
      </p>
    </div>);
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, newCustomTexts: state.newCustomTexts};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate,
    changeCustomText: changeCustomText
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctButtons);
