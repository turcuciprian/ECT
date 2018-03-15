import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
class EctDatePickerCont extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <EctDateTime type="year"/>
                <EctDateTime type={"month"} />
                <EctDateTime type={"day"} />
                <EctDateTime type={"hour"} />
                <EctDateTime type={"minute"} />
                {/* // <EctDateTime start="1" end="31" text={"Day"}/> */}
            </div>
        )
    }
}
export default EctDatePickerCont;
