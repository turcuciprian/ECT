import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate, changeCustomText} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import newCustomTexts from '../reducers/modifiers/customTexts';
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
        this.ectGetFromChildren = this
            .ectGetFromChildren
            .bind(this);
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
        const newState = {
            fullDate: {
                year: tYear,
                month: tMonth,
                day: tDay,
                hour: tHour,
                minute: tMinute
            }
        }
        let newCTxts;
        if (!this.props.newCustomTexts) {
            newCTxts = this.props.customTexts;
        } else {
            newCTxts = this.props.newCustomTexts;
        }

        const newDate = {
            id: 1,
            date: `${tMonth}/${tDay}/${tYear}`,
            time: `${tHour}:${tMinute}`,
            timezone: '+7200000',
            numbersText: newCTxts,
            numbersSize: 42,
            numbersTxtSize: 21,
            numbersColor: 'red',
            numbersTxtColor: 'green'
        };

        this
            .props
            .selectDate(newDate);
    }
    EctDateTimeChildren() {
        const dateTimes = ['year', 'month', 'day', 'hour', 'minute'];
        let dateTimesFinal = [];
        dateTimes.forEach((item, i) => {
            dateTimesFinal.push(<EctDateTime
                key={i}
                type={item}
                date={this.state.fullDate}
                ectCallback={this.ectGetFromChildren}/>);
        });
        return dateTimesFinal;

    }
    render() {
        const children = this.props.children
        return (
            <div className="ectDateTimePicker">
                <div>
                    <span className="title">When Should the timer stop?</span>
                </div>
                {this.EctDateTimeChildren()}
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {dateTimeSel: state.dateTimeSel, layoutSel: state.layoutSel, customTexts: state.customTexts, newCustomTexts: state.newCustomTexts, newCustomTexts: state.newCustomTexts}
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectDate: selectDate
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctDatePickerCont);
