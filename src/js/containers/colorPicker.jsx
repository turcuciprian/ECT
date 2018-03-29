import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate} from '../actions';
import dateTimeSel from '../reducers/modifiers/dateTime';
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss';

class EctColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false
    };
    this.modifyColor = this
      .modifyColor
      .bind(this);
    this.handleClick = this
      .handleClick
      .bind(this);
    this.handleClose = this
      .handleClose
      .bind(this);

  }
  modifyColor(val, evt) {
    let newDateTime = this.props.dateTimeSel;
    const newValue = val.hex;

    switch (this.props.type) {
      case 'numbers':
        newDateTime.style.numbersColor = newValue;
        break;
      case 'texts':
        newDateTime.style.numbersTxtColor = newValue;
        break;
    }
    this
      .props
      .selectDate(newDateTime);

  }
  handleClick() {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  };
  handleClose() {
    this.setState({displayColorPicker: false})
  };
  render() {
    let beginColor;
    let originalDateTime = this.props.dateTimeSel;
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `#fff`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    });
    switch (this.props.type) {
      case 'numbers':
        if (originalDateTime) {
          beginColor = originalDateTime.style.numbersColor;
        } else {
          beginColor = this.props.dateTime.style.numbersColor;
        }
        break;
      case 'texts':
        if (originalDateTime) {
          beginColor = originalDateTime.style.numbersTxtColor;
        } else {
          beginColor = this.props.dateTime.style.numbersTxtColor;
        }
        break;
    }
    styles.color.background = beginColor;

    return (
      <div>
        <div className="EctColorPicker">
          <span className="title">Color</span>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color}/>
          </div>
          {this.state.displayColorPicker
            ? <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose}/>
                <SketchPicker
                  color={beginColor}
                  onChangeComplete={this.modifyColor}
                  onChange={this.modifyColor}/>
              </div>
            : null}

        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, dateTime: state.dateTime};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(EctColorPicker);
