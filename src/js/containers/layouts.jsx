import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate, changeLayout, changeStyle} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import newCustomTexts from '../reducers/modifiers/customTexts';
import newStyle from '../reducers/modifiers/style';
import moment from "moment";

class LayoutsCont extends Component {
  constructor(props) {
    super(props);

    // this.EctDateTimeChildren = this.EctDateTimeChildren.bind(this);

  }
  changeLayout(item) {
    console.log(this.props.dateTimeSel);
    let newEndDate = this.props.dateTimeSel;
    const selLay = item;
    const newStyle = {
      numbersSize: selLay.numbersSize,
      numbersTxtSize: selLay.numbersTxtSize,
      numbersColor: selLay.numbersColor,
      numbersTxtColor: selLay.numbersTxtColor
    }
    this.props.changeStyle(newStyle);

    newEndDate.numbersSize = newStyle.numbersSize;
    newEndDate.numbersTxtSize = newStyle.numbersTxtSize;
    newEndDate.numbersColor = newStyle.numbersColor;
    newEndDate.numbersTxtColor = newStyle.numbersTxtColor;
    console.log('newEndDate', newEndDate);
    // this.props.changeLayout(item);

    //set new date
    // this.props.selectDate(newEndDate);

  }
  render() {
    return (<div className="layouts">
      {
        this.props.layouts.map((item) => {
          // Numbers variables
          const numbersSize = item.numbersSize; // font size
          const numbersColor = item.numbersColor // color
          // Numbers  TEXT variables
          const numbersTxtSize = item.numbersTxtSize; // font size
          const numbersTxtColor = item.numbersTxtColor; // color

          //STYLE for numbers
          const numbersStyle = {
            fontSize: numbersSize,
            color: numbersColor
          };
          //STYLE for numbers Text
          const numbersTxtStyle = {
            fontSize: numbersTxtSize,
            color: numbersTxtColor
          };
          return (<div className="indLayout" key={item.id} onClick={() => this.changeLayout(item)}>
            <div className="cont">
              <div>
                <span style={numbersStyle}>
                  16
                </span>
                <span style={numbersTxtStyle}>
                  Hours
                </span>
              </div>
            </div>
          </div>);
        })
      }
    </div>);
  }
}
function mapStateToProps(state) {
  return {
    dateTimeSel: state.dateTimeSel,
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
    changeLayout: changeLayout,
    changeStyle: changeStyle
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LayoutsCont);
