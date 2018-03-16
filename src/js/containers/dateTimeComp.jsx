import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
class EctDatePickerCont extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ectDateTimePicker">
                <div>
                    <span class="title">When Should the timer stop?</span>
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
