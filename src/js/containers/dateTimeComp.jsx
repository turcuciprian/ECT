import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate, changeCustomText, changeStyle} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import newCustomTexts from '../reducers/modifiers/customTexts';
import newStyle from '../reducers/modifiers/style';
import moment from "moment";

class EctDatePickerCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDate: {
        year: moment().year(),
        month: moment().month() + 1,
        day: moment().date(),
        hour: moment().hour(),
        minute: moment().minute()
      }
    }
    this.ectGetFromChildren = this.ectGetFromChildren.bind(this);
    this.EctDateTimeChildren = this.EctDateTimeChildren.bind(this);

  }
  ectGetFromChildren(data, type) {
    data = parseInt(data);
    let tYear,
      tMonth,
      tDay,
      tHour,
      tMinute;

    if (this.props.dateTimeSel) {
      tYear = this.props.dateTimeSel.year;
      tMonth = this.props.dateTimeSel.month;
      tDay = this.props.dateTimeSel.day;
      tHour = this.props.dateTimeSel.hour;
      tMinute = this.props.dateTimeSel.minute;
    } else {
      tYear = this.state.fullDate.year;
      tMonth = this.state.fullDate.month;
      tDay = this.state.fullDate.day;
      tHour = this.state.fullDate.hour;
      tMinute = this.state.fullDate.minute;
    }

    switch (type) {
      case 'year':
        tYear = data;
        break;
      case 'month':
        tMonth = data;
        break;
      case 'day':
        tDay = data;
        break;
      case 'hour':
        tHour = data;
        break;
      case 'minute':
        tMinute = data;
        break;
    }
    let newCTxts,
      newStyle;
    //custom texts
    if (!this.props.newCustomTexts) {
      newCTxts = this.props.customTexts;
    } else {
      newCTxts = this.props.newCustomTexts;
    }
    if (!this.props.styleSel) {
      newStyle = this.props.origStyle;
    } else {
      newStyle = this.props.styleSel;
    }

    const newDate = {
      id: 1,
      year: tYear,
      month: tMonth,
      day: tDay,
      hour: tHour,
      minute: tMinute,
      timezone: '+7200000',
      numbersText: newCTxts,
      numbersSize: newStyle.numbersSize,
      numbersTxtSize: newStyle.numbersTxtSize,
      numbersColor: newStyle.numbersColor,
      numbersTxtColor: newStyle.numbersTxtColor
    };
    this.props.selectDate(newDate);
  }
  EctDateTimeChildren() {
    const dateTimes = ['year', 'month', 'day', 'hour', 'minute'];
    let fullDate;
    if (!this.props.dateTimeSel) {
      fullDate = this.state.fullDate;
    } else {
      fullDate = {
        year: this.props.dateTimeSel.year,
        month: this.props.dateTimeSel.month,
        day: this.props.dateTimeSel.day,
        hour: this.props.dateTimeSel.hour,
        minute: this.props.dateTimeSel.minute
      }
    }
    let dateTimesFinal = [];
    dateTimes.forEach((item, i) => {
      dateTimesFinal.push(<EctDateTime key={i} type={item} date={fullDate} ectCallback={this.ectGetFromChildren}/>);
    });
    return dateTimesFinal;

  }
  render() {
    const children = this.props.children
    return (<div className="ectDateTimePicker">
      <div>
        <span className="title">When Should the timer stop?</span>
      </div>
      {this.EctDateTimeChildren()}
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    dateTimeSel: state.dateTimeSel,
    layoutSel: state.layoutSel,
    customTexts: state.customTexts,
    newCustomTexts: state.newCustomTexts,
    origStyle: state.origStyle,
    newStyle: state.styleSel
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctDatePickerCont);
