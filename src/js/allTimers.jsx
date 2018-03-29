import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class AllTimers extends React.Component {
    constructor(props) {
        super(props);
        this.returnTimers();
        this.state = {
            timersHTML: ''
        }
        this.returnTimers = this
            .returnTimers
            .bind(this);
        this.deleteTimer = this
            .deleteTimer
            .bind(this);
    }
    deleteTimer(itemToDelete, id, index) {
        var _parent = this;

        axios
            .delete(ectWPPath + '/ect/v2/removeTimer/' + id + '/' + ectKs)
            .then(function (response) {
                var allTimers = _parent.state.timersHTML;
                allTimers.forEach(function (item, tIndex) {

                    if (item.key == id) {
                        index = tIndex;
                        return;
                    }
                });

                allTimers.splice(index, 1);
                _parent.setState({timersHTML: allTimers});
                _parent.setState({timersHTML: allTimers});
            });
    }

    returnTimers() {
        var timersReturned;
        var _parent = this;
        axios
            .get(ectWPPath + '/ect/v2/getTimers/' + ectKs)
            .then(function (response) {
                var _data = response.data;
                timersReturned = _data;
                var timerToShow = [];
                let i = 0;
                for (var key in timersReturned) {
                    let element = timersReturned[key];

                    if (!element['timerID']) {
                        continue;
                    }
                    console.log('element', element);
                    let ListElement;
                    var timerNameFinal;
                    var imgUrl = ectScriptBase + "/src/img/trash.png";
                    var shortcodeId = '[ectSc id="' + element['timerID'] + '"]'
                    if (typeof element.timerName != "undefined" && element.timerName != "") {
                        timerNameFinal = element.timerName;
                    } else {
                        timerNameFinal = 'Timer-' + element['timerID'];
                    }
                    ListElement = (
                        <li key={element['timerID']}>
                            <div className="timersName">
                                <span>{timerNameFinal}</span>
                            </div>
                            <div className="timersDeleteContainer"><input type="text" value={shortcodeId} readOnly/><img
                                onClick={() => {
                            _parent.deleteTimer(element, element['timerID'], i)
                        }}
                                src={imgUrl}/></div>
                        </li>
                    )
                    
                    timerToShow.push(ListElement);
                    i++;
                };
                console.log('timerToShow',timerToShow);
                
                _parent.setState({timersHTML: timerToShow});

            })
            .catch(function (error) {
                console.log(error);

            });

    }
    render() {
        return (
            <div>
                <h1>Easy Countdown Timer - Timers</h1>
                <p>
                    Manage your timers</p>
                <ul>{this.state.timersHTML}</ul>
            </div>
        )
    }
}
const allTimersElem = document.getElementById("allTimers");
if (allTimersElem != null) 
    ReactDOM.render(
        <AllTimers/>, allTimersElem);
