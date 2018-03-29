import React, {Component} from 'react';
import {connect} from 'react-redux';
import dateMath from '../customLib/dateMath';
import {bindActionCreators} from 'redux';
import {selectDate, changeCustomText, changeStyle, changeLayout} from '../actions';
import moment from "moment";

// import all layouts
import {HorizontalBasic, VerticalBasic} from '../components/layouts/all';

/* We need "if(!this.props.user)" because we set state to null by default */
class EctPreviewCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: []
    }
    this.dinamicComponent = this
      .dinamicComponent
      .bind(this);

    if (this.props.parentKey) {
      //
      // set the custom date
      //
      const tThis = this;
      ectProperties.forEach(function (item, index) {
        console.log(ectProperties[index]);
        if (ectProperties[index][tThis.props.parentKey]) {
          tThis
            .props
            .selectDate(ectProperties[index][tThis.props.parentKey]);
        }
      });

    }
    //Set custom layout -set the first one as default if not set

  };
  dinamicComponent() {
    let tempLayout;
    if (!this.props.dateTimeSel) {
      tempLayout = this.props.layouts[0].type;
    } else {
      tempLayout = this.props.dateTimeSel.style.layout;
    }
    const compnts = {
      HorizontalBasic: HorizontalBasic,
      VerticalBasic: VerticalBasic
    };
    var DynamicComponentName = compnts[tempLayout];

    return (<DynamicComponentName
      className={DynamicComponentName}
      className="floatingPreview"/>);
  }
  render() {
    var endDateTimeObj = {};
    //if state exists
    if (this.props.dateTimeSel) {
      endDateTimeObj = {
        endDate: `${this.props.dateTimeSel.endDate.month}/${this.props.dateTimeSel.endDate.day}/${this.props.dateTimeSel.endDate.year}`,
        endHour: this.props.dateTimeSel.endDate.hour,
        endMinute: this.props.dateTimeSel.endDate.minute,
        timezoneOffset: this.props.dateTimeSel.endDate.timezone
      };
      // const tempDate = dateMath.returnRemainingDateTime(endDateTimeObj);
    }
    let parentLayClass;
    if (this.props.dateTimeSel) {
      parentLayClass = this.props.dateTimeSel.style.layout
    }
    if (devMode) {
      return (
        <div className={` ectLivePreview ${parentLayClass}`}>
          <span className="title">Live preview</span>
          <div>
            <div className="preview">
              {this.dinamicComponent()}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={` ectLivePreview ${parentLayClass}`}>
        {this.dinamicComponent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, layoutSel: state.layoutSel, layouts: state.layouts};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate,
    changeLayout: changeLayout
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EctPreviewCont);
