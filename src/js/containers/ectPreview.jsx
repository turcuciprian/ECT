import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateMath from '../customLib/dateMath';
import {bindActionCreators} from 'redux';
import {selectDate, changeCustomText, changeStyle} from '../actions';
import moment from "moment";

// import all layouts
import {HorizontalBasic} from '../components/layouts/all';

/* We need "if(!this.props.user)" because we set state to null by default */
class EctPreviewCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: []
    }
    this.dinamicComponent = this.dinamicComponent.bind(this);

    if (this.props.parentKey) {
      const tempCustomData = ectProperties[0][this.props.parentKey];
      const tempDate = tempCustomData;
      //
      // set the custom date
      //
      this.props.selectDate(tempDate);
    }
  };
  dinamicComponent() {
    const compnts = {
      HorizontalBasic: HorizontalBasic
    };
    var DynamicComponentName = compnts['HorizontalBasic'];
    if (this.props.layoutSel) {
      DynamicComponentName = compnts[this.props.layoutSel.type];
    }

    return (<DynamicComponentName className="floatingPreview"/>);
  }
  render() {
    var endDateTimeObj = {};
    //if state exists
    if (this.props.dateTimeSel) {
      endDateTimeObj = {
        endDate: `${this.props.dateTimeSel.month}/${this.props.dateTimeSel.day}/${this.props.dateTimeSel.year}`,
        endHour: this.props.dateTimeSel.hour,
        endMinute: this.props.dateTimeSel.minute,
        timezoneOffset: this.props.dateTimeSel.timezone
      };
      const tempDate = dateMath.returnRemainingDateTime(endDateTimeObj);
    }
    if (devMode) {
      return (<div className="ectLivePreview">
        <span className="title">Live preview</span>
        <div>
          <div className="preview">
            {this.dinamicComponent()}
          </div>
        </div>
      </div>);
    }
    return (<div className="ectLivePreview">
      {this.dinamicComponent()}
    </div>);
  }
}

function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, layoutSel: state.layoutSel};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctPreviewCont);
