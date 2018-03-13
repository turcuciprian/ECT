import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateMath from '../../customLib/dateMath';
import moment from "moment";

class HorizontalBasicCont extends Component {
  constructor(props) {
    super(props);
    this.state={
        timeout:[]
    }
  }
  render() {
    var tempTimeout = this.state.timeout;
    tempTimeout.push(setTimeout(() => {
        this.setState({
            timeout: []
        });
    }, 1000));
      var endDateTimeObj = {
        endDate: moment(this.props.dateTimeSel.date),
        endHour: 23,
        endMinute: 56,
        timezoneOffset: -(new Date().getTimezoneOffset() * 60000)
    };
    const tempDate = dateMath.returnRemainingDateTime(endDateTimeObj); 
    const remainingTime = 'aaa';

      return ( 
                <div>{tempDate.Years} Years {tempDate.Months} Months {tempDate.Weeks} Weeks {tempDate.Days} Days {tempDate.Hours}:{tempDate.Minutes}:{tempDate.Seconds}</div>
            );
          }
        }

function mapStateToProps(state) {
    return {
        dateTimeSel: state.dateTimeOrig[0],
        layoutSel: state.layoutOrig[0]

    };
}

export default connect(mapStateToProps)(HorizontalBasicCont);