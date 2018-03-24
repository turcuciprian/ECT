import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateMath from '../../customLib/dateMath';
import moment from "moment";

class HorizontalBasicCont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: []
        }
    }
    render() {
        var finalResult = null;
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
                endDate: `${this.props.dateTimeSel.month}/${this.props.dateTimeSel.day}/${this.props.dateTimeSel.year}`,
                endHour: this.props.dateTimeSel.hour,
                endMinute: this.props.dateTimeSel.minute,
                timezoneOffset: this.props.dateTimeSel.timezone
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
                finalResult = 'Countdown Ended'; // when timer is done because the countdown ended

            }
        } else {
            finalResult = 'Countdown Ended'; // when timer is done because redux store is empty - when the page loads
        }
        return (
            <div>{finalResult}</div>
        );
    }
}

function mapStateToProps(state) {
    return {dateTime: state.dateTime, dateTimeSel: state.dateTimeSel, layouts: state.layouts, layoutSel: state.layoutSel};
}

export default connect(mapStateToProps)(HorizontalBasicCont);