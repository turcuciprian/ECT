import React, {Component} from "react";
import moment from "moment";

class EctDateTime extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var options = [];
        var start;
        var end;
        var labelText = 'Default';
        switch (this.props.type) {
            case 'year':
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
                for (var i = 1; i <= 11; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{dpMonths[i]}</option>
                    )
                }
                break;
            case 'day':
                labelText = 'Day';
                for (var i = 1; i <= 31; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }

                break;
            case 'hour':
                labelText = 'Hour';
                for (var i = 0; i <= 23; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }
                break;
            case 'minute':
                labelText = 'Minute';
                for (var i = 0; i <= 59; i++) {
                    options.push(
                        <option key={labelText + i} value={i}>{i}</option>
                    )
                }
                break;
        }

        return (
            <div className={labelText}>
                <span>
                    {labelText}</span>
                <select name={'ectDTP' + labelText}>
                    {options}
                </select>
            </div>
        )
    }
}
export default EctDateTime;
