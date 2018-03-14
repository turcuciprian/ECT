import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateMath from '../customLib/dateMath';
import moment from "moment";

// import all layouts
import {
    HorizontalBasic
} from '../components/layouts/all';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class EctPreviewCont extends Component {
    constructor(props) {
        super(props);
        this.state ={
            timeout:[],
            test:0
        }
        this.dinamicComponent = this.dinamicComponent.bind(this);
    };
    dinamicComponent() {
        
        const compnts = {
            HorizontalBasic: HorizontalBasic
        };
        var DynamicComponentName = compnts['HorizontalBasic'];
        if(this.props.layoutSel){
            DynamicComponentName = compnts[this.props.layoutSel.type];
        }

        return (
            <div>
                <DynamicComponentName className="floatingPreview" />
            </div>
        );
    }
    render() {
    var endDateTimeObj = {};
    //if state exists
    if(this.props.dateTimeSel){
    endDateTimeObj = {
                endDate: moment(this.props.dateTimeSel.date),
                endHour: 23,
                endMinute: 56,
                timezoneOffset: -(new Date().getTimezoneOffset() * 60000)
            };
        const tempDate = dateMath.returnRemainingDateTime(endDateTimeObj); 
    }
        return (
            <div>
                {this.dinamicComponent()}
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

export default connect(mapStateToProps)(EctPreviewCont);