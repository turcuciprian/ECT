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
    let newEndDate = this.props.dateTimeSel.style;
    const newStyle = {
      layout: item.layout,
      numbersSize: this.props.dateTimeSel.style.numbersSize,
      numbersTxtSize: this.props.dateTimeSel.style.numbersTxtSize,
      numbersColor: this.props.dateTimeSel.style.numbersColor,
      numbersTxtColor: this.props.dateTimeSel.style.numbersTxtColor
    }
    this
      .props
      .changeStyle(newStyle);

    newEndDate.layout = newStyle.layout;
    newEndDate.numbersSize = newStyle.numbersSize;
    newEndDate.numbersTxtSize = newStyle.numbersTxtSize;
    newEndDate.numbersColor = newStyle.numbersColor;
    newEndDate.numbersTxtColor = newStyle.numbersTxtColor;
    // this.props.changeLayout(item); set new date
    // this.props.selectDate(newEndDate);

  }
  render() {
    return (
      <div className="layouts">
        {this
          .props
          .layouts
          .map((item) => {
            let tNumbersSize = item.numbersSize;
            let tNumbersColor = item.numbersColor;
            let tNumbersTxtSize = item.numbersTxtSize;
            let tNumbersTxtColor = item.numbersTxtColor;
            if(this.props.dateTimeSel){
              tNumbersSize = this.props.dateTimeSel.style.numbersSize;
            tNumbersColor = this.props.dateTimeSel.style.numbersColor;
            tNumbersTxtSize = this.props.dateTimeSel.style.numbersTxtSize;
            tNumbersTxtColor = this.props.dateTimeSel.style.numbersTxtColor;
            }

            // Numbers variables
            const numbersSize = tNumbersSize; // font size
            const numbersColor = tNumbersColor // color
            // Numbers  TEXT variables
            const numbersTxtSize = tNumbersTxtSize; // font size
            const numbersTxtColor = tNumbersTxtColor; // color

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
            return (
              <div
                className={`indLayout ${item.layout}`}
                key={item.id}
                onClick={() => this.changeLayout(item)}>
                <div className={`cont spanDiv`}>
                  <div>
                    <span style={numbersStyle}>
                      16
                    </span>
                    <span style={numbersTxtStyle}>
                      Hours
                    </span>
                  </div>
                </div>
              </div>
            );
          })
}
      </div>
    );
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
