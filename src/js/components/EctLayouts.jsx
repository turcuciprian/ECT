import React, {Component} from "react";
import EctDateTime from '../containers/EctDateTime.jsx';
import LayoutsCont from '../containers/layouts.jsx';
class EctLayouts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ectLayouts">
                <div>
                    <span className="title">Timer Layouts</span>
                    <LayoutsCont />
                </div>

            </div>
        )
    }
}
export default EctLayouts;
