import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
class EctDatePickerCont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullDate: {
                year: 2018,
                month: 3,
                day: 19,
                hour: 12,
                minute: 39
            }
        }
    }
    ectGetFromChildren(data,type){
        
    }
    EctDateTimeChildren() {
        const dateTimes = ['year', 'month', 'day', 'hour', 'minute'];
        let dateTimesFinal = [];
        dateTimes.forEach((item, i) => {
            dateTimesFinal.push(<EctDateTime key={i} type={item} date={this.state.fullDate} ectCallback={this.ectGetFromChildren} />);
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
export default EctDatePickerCont;
