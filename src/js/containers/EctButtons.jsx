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
    this.insertTimerData = this
      .insertTimerData
      .bind(this);
    this.deletePopup = this
      .deletePopup
      .bind(this);
  }
  insertTimerData() {
    let _data = {};
    _data['data'] = this.props.dateTimeSel;
    console.log(_data);
    _data['ectKs'] = ectKs;
    // get the this scope of the component
    let tThis = this;

    axios
      .put(ectWPPath + '/ect/v2/addTimer', _data)
      .then(function (response) {

        let _data = response.data[1];
        //reset timer tThis   .props   .selectDate(null);
        if (typeof window.ectWPInsertSC != "undefined") {
          ectWPInsertSC(_data.returnID);
        }
      });
  }
  deletePopup() {
    //reset timer this   .props   .selectDate(null);
    if (typeof window.ectWPClosePopupButton != "undefined") {

      window.ectWPClosePopupButton();
    }
  }
  render() {
    if (this.props.dateTimeSel) {
      let closePopupButton = (
        <p>
          <button className="close" type="button" onClick={this.deletePopup}>Close Popup</button>
        </p>
      );

      return (
        <div className="buttons">
          <p>
            <button type="button" className="insert" onClick={this.insertTimerData}>Add Timer</button>
          </p>
          {closePopupButton}
        </div>
      );
    } else {
      return (
        <p>
          <button type="button" onClick={this.deletePopup}>Close Popup</button>
        </p>
      );
    }

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
