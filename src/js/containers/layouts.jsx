import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate, changeLayout} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import newCustomTexts from '../reducers/modifiers/customTexts';
import newStyle from '../reducers/modifiers/style';
import moment from "moment";

class LayoutsCont extends Component {
  constructor(props) {
    super(props);

    // this.EctDateTimeChildren = this.EctDateTimeChildren.bind(this);

  }
  render() {
    return (<div className="layouts">
      {
        this.props.layouts.map((item) => {
           return(<div className="indLayout" key={item.id}>{item.name}</div>);
        })
      }
    </div>);
  }
}
function mapStateToProps(state) {
  return {
    layoutSel: state.layoutSel,
    layouts: state.layouts,
    customTexts: state.customTexts,
    newCustomTexts: state.newCustomTexts,
    origStyle: state.origStyle,
    newStyle: state.styleSel
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate,
    changeLayout: changeLayout
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LayoutsCont);
