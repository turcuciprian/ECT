import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import dateMath from '../customLib/dateMath';
import moment from "moment";
import DatePicker from 'react-datepicker';
import {selectDate} from '../actions';


// import all layouts
import {
    HorizontalBasic
} from '../components/layouts/all';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class DatePickerCont extends Component {
    constructor(props) {
        super(props);
        this.state ={
            timeout:[],
            test:0
        }
        this.dinamicComponent = this.dinamicComponent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    dinamicComponent() {


        return (
            <div>
                <DatePicker
                placeholderText="Select a date"
                dateFormat="YYYY/MM/DD"
                onChange={this.handleChange}
                showTimeSelect
                dateFormat="LLL"
                className="datePickerStyle"
                timeCaption="time"
                timeIntervals={15}
                timeFormat="HH:mm"
                minTime={moment()}
                maxTime={moment().hours(23).minutes(59)}
                minDate={moment()}
                maxDate={moment().add(1000, "years")} />
            </div>
        );
    }
    handleChange(date) {
        var newDate;
        var newHour;
        var newMinute;
        
        
            if((date.month()+1)< 10 ){
                newDate = '0'+(date.month() + 1)+'/'+date.date()+'/'+date.year();
                }else{
                newDate = (date.month() + 1)+'/'+date.date()+'/'+date.year();
                }
           
            newHour = date.hour();
            newMinute = date.minute();
            
        
        const newDateTimeObj = {
                date: newDate,
                time: newHour+':'+newMinute,
                timezone: -(new Date().getTimezoneOffset() * 60000),
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
        
        this.props.selectDateFunc(newDateTimeObj)
        
      };
    render() {
            return (
                <div className="ectDateTimePicker">
                    <div className="Years">
                        <span> Years</span>
                        <select name="ectDTP_Years">
                        </select>
                    </div>
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
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {selectDateFunc: selectDate}
        , dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(DatePickerCont);