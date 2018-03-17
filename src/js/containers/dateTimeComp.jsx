import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
class EctDatePickerCont extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullDate: {
                year: 2018,
                month: 1,
                day: 1,
                hour: 12,
                minute: 12
            }
        }
    }
    render() {
        return (
            <div className="ectDateTimePicker">
                <div>
                    <span className="title">When Should the timer stop?</span>
                </div>
                <EctDateTime type="year"/>
                <EctDateTime type={"month"}/>
                <EctDateTime type={"day"}/>
                <EctDateTime type={"hour"}/>
                <EctDateTime type={"minute"}/>
            </div>
        )
    }
}
export default EctDatePickerCont;
