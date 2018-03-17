import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import moment from "moment";

class EctDatePickerCont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullDate: {
                year: moment().year(),
                month: moment().month()+1,
                day: moment().date(),
                hour: moment().hour(),
                minute: moment().minute()
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
