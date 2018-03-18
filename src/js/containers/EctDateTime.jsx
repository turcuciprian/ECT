import React, {Component} from "react";
import moment from "moment";

class EctDateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compValue: this.props.data
        }
        this.dtCall = this.dtCall.bind(this);
    }
    dtCall(evt) {
        const data = evt.target.value;
        const cProp = this.props.ectCallback;
        this.setState({compValue: data});
        cProp(data, this.props.type);
    }
    render() {
        let compValue = this.state.compValue;
        var options = [];
        var start;
        var end;
        var labelText = 'Default';
        switch (this.props.type) {
            case 'year':
                compValue = moment().year();
                labelText = 'Year';
                start = moment().year();
                end = moment().year() + 50;
                for (var i = start; i <= end; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }
                break;
            case 'month':
                start = 1;
                end = 12;
                compValue = moment().month() + 1;
                if (this.props.date.year == moment().year()) {
                    start = compValue;
                }

                labelText = 'Month';
                const dpMonths = {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                }
                for (var i = start; i <= end; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{dpMonths[i]}</option>
                    )
                }
                break;
            case 'day':
                start = 1; // start min day
                end = moment(this.props.date.year + '-' + this.props.date.month, 'YYY-MM').daysInMonth(); // end max day

                compValue = moment().date(); // current day

                if (this.props.date.year == moment().year() && this.props.date.month == moment().month() + 1) {
                    start = compValue;
                }
                labelText = 'Day';
                let maxDays = typeof this.props.date != 'undefined'
                    ? moment(this.props.date.year + '-' + this.props.date.month, 'YYY-MM').daysInMonth()
                    : 28;
                for (var i = start; i <= end; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }

                break;
            case 'hour':
                start = 0; // start min hour
                end = 23; // end max hour

                compValue = moment().hour(); // current hour
                if (this.props.date.year == moment().year() && this.props.date.month == moment().month() + 1 && this.props.date.day == moment().date()) {
                    start = compValue;
                }

                labelText = 'Hour';
                for (var i = start; i <= end; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }
                break;
            case 'minute':
                start = 0; // start min hour
                end = 59; // end max hour 

                compValue = moment().minute(); // current hour
                if (this.props.date.year == moment().year() && this.props.date.month == moment().month() + 1 && this.props.date.day == moment().date() && this.props.date.hour == moment().hour()) {
                    start = compValue;
                }
                labelText = 'Minute';
                for (var i = start; i <= end; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }
                break;
        }
        return (
            <div className={labelText + ' cDT'}>
                <span>
                    {labelText}</span>
                <select value={this.state.compValue} name={'ectDTP' + labelText} onChange={this.dtCall}>
                    {options}
                </select>
            </div>
        )
    }
}
export default EctDateTime;
