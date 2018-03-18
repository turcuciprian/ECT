import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
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
        let tYear = this.state.fullDate.year;
        let tMonth = this.state.fullDate.month;
        let tDay = this.state.fullDate.day;
        let tHour = this.state.fullDate.hour;
        let tMinute = this.state.fullDate.minute;
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
        this.setState(newState);
        const newDate = {
            id: 1,
            date: `${tMonth}/${tDay}/${tYear}`,
            time: `${tHour}:${tMinute}`,
            timezone: '+7200000',
            numbersText: {
                Years: 'Years',
                Months: 'Months',
                Weeks: 'Weeks',
                Days: 'Days',
                Hours: 'Hours',
                Minutes: 'Minutes',
                Seconds: 'Seconds'
            },
            numbersSize: 42,
            numbersTxtSize: 21,
            numbersColor: 'red',
            numbersTxtColor: 'green'
        };
        console.log(newDate,'newDate');
        
        this.props.selectDate(newDate);
        console.log(this.props.dateTimeSel,'dateTimeSel');
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
    return {
        dateTimeSel: state.dateTimeSel, 
        layoutSel: state.layoutSel
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectDate: selectDate
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctDatePickerCont);
