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
      if(this.props.dateTimeSel){
    var tempTimeout = this.state.timeout;
    tempTimeout.push(setTimeout(() => {
        this.setState({
            timeout: []
        });
    }, 1000));
    var dateTimeTxt = this.props.dateTimeSel.numbersText
      var endDateTimeObj = {
        endDate: moment(this.props.dateTimeSel.date),
        endHour: 23,
        endMinute: 56,
        timezoneOffset: -(new Date().getTimezoneOffset() * 60000)
    };
    // Date time left
    const tempDate = dateMath.returnRemainingDateTime(endDateTimeObj);
    // Numbers variables
    const numbersSize = this.props.dateTimeSel.numbersSize; // font size
    const numbersColor = this.props.dateTimeSel.numbersColor // color
    // Numbers  TEXT variables
    const numbersTxtSize = this.props.dateTimeSel.numbersTxtSize; // font size
    const numbersTxtColor = this.props.dateTimeSel.numbersTxtColor; // color

    //STYLE for numbers
    const numbersStyle = {
        fontSize:numbersSize,
        color:numbersColor
    };
    //STYLE for numbers Text
    const numbersTxtStyle = {
        fontSize:numbersTxtSize,
        color:numbersTxtColor
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
              <span key={key} className="spanDiv" > 
                    <span style={numbersStyle}>
                        { tempDate[key] }  
                    </span> 
                    <span style={numbersTxtStyle}>
                        {dateTimeTxt[key]}
                    </span>
                    &nbsp; 
                </span>);
                finalResult.push(tempItem);
              }
            }
        }else{
            var finalResult ='Timer Ended';
        }

      return ( 
                <div>{finalResult}</div>
            );
          }
        }

function mapStateToProps(state) {
    return {
        dateTime: state.dateTime,
        dateTimeSel: state.dateTimeSel,
        layouts: state.layouts,
        layoutSel: state.layoutSel

    };
}

export default connect(mapStateToProps)(HorizontalBasicCont);