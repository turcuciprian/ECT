import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import EctDateTime from '../containers/EctDateTime.jsx';
import LayoutsCont from '../containers/layouts.jsx';
class EctLayouts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.dateTimeSel) {
            return (
                <div className="ectLayouts">
                    <div>
                        <span className="title">Timer Layouts</span>
                        <LayoutsCont/>
                    </div>

                </div>
            );
        } else {
            return false;
        }
    }
}
function mapStateToProps(state) {
    return {dateTimeSel: state.dateTimeSel};
}

export default connect(mapStateToProps)(EctLayouts);
