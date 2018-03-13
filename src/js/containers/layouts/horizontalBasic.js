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
          var tempItem = (<span key={key} className="spanDiv"> { tempDate[key] } &nbsp; </span>);
                finalResult.push(tempItem);
              }
            }
           

      return ( 
                <div>{finalResult}</div>
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