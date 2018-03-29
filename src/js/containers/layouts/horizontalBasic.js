import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateMath from '../../customLib/dateMath';
import moment from "moment";
import {selectDate} from '../../actions';
import {bindActionCreators} from 'redux';

class HorizontalBasicCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: []
    }
  }

  render() {
    if (this.props.dateTimeSel) {
      var tempTimeout = this.state.timeout;
      tempTimeout.push(setTimeout(() => {
        if (this.state.timeout[1]) {
          clearTimeout(this.state.timeout[1]);
        }
        this.setState({timeout: []});
      }, 1000));
      var dateTimeTxt = this.props.dateTimeSel.numbersText;
      var endDateTimeObj = {
        endDate: `${this.props.dateTimeSel.endDate.month}/${this.props.dateTimeSel.endDate.day}/${this.props.dateTimeSel.endDate.year}`,
        endHour: this.props.dateTimeSel.endDate.hour,
        endMinute: this.props.dateTimeSel.endDate.minute,
        timezoneOffset: this.props.dateTimeSel.endDate.timezone
      };
      // Date time left
      const tempDate = dateMath.returnRemainingDateTime(endDateTimeObj);
      if (!tempDate) {
        this
          .props
          .selectDate(null);
      }

      // Numbers variables
      const numbersSize = this.props.dateTimeSel.style.numbersSize; // font size
      const numbersColor = this.props.dateTimeSel.style.numbersColor // color
      // Numbers  TEXT variables
      const numbersTxtSize = this.props.dateTimeSel.style.numbersTxtSize; // font size
      const numbersTxtColor = this.props.dateTimeSel.style.numbersTxtColor; // color

      //STYLE for numbers
      const numbersStyle = {
        fontSize: numbersSize,
        color: numbersColor
      };
      //STYLE for numbers Text
      const numbersTxtStyle = {
        fontSize: numbersTxtSize,
        color: numbersTxtColor
      };

      var finalResult = [];
      var isLast = true;
      for (var key in tempDate) {
        if (key != 'Styles') {
          if (isLast) {
            if (tempDate[key] != 0) {
              isLast = false;
            } else {
              continue;
            }
          }
          var tempItem = (
            <span key={key} className="spanDiv">
              <span style={numbersStyle}>
                {tempDate[key]}
              </span>
              <span style={numbersTxtStyle}>
                {dateTimeTxt[key]}
              </span>
              &nbsp;
            </span>
          );
          finalResult.push(tempItem);
        }
      }
      if (!tempDate) {
        finalResult = 'Please select a End Date & time to count down to'; // when timer is done because the countdown ended

      }
    } else {

      finalResult = 'Please select a End Date & time to count down to'; // when timer is done because redux store is empty - when the page loads

    }

    if (this.props.pType == "preview") {
      finalResult = (
        <span className="spanDiv">
          <span>
            16
          </span>
          <span>
            Hours
          </span>
          &nbsp;
        </span>
      );
    }
    return (
      <div onClick={this.changeLayout}>{finalResult}</div>
    );

  }
}

function mapStateToProps(state) {
  return {dateTime: state.dateTime, dateTimeSel: state.dateTimeSel, layouts: state.layouts, layoutSel: state.layoutSel};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HorizontalBasicCont);
