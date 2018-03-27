import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';

import {UnmountClosed} from 'react-collapse';

class MoreOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }

  }

  render() {
    return (
      <div className="moreOptions">
        <UnmountClosed isOpened={!this.state.collapsed}>
          <div>Lorem ipsum dolor sit amet, no vix nobis verear, eu dictas maiorum nominavi
            ius. Mea vivendo menandri cu, cu mea facer praesent dissentias, te habeo option
            periculis sit. Ei sumo accusata quo. Ad sonet iisque ius, te eos cibo copiosae
            gubergren. Wisi nominati an sit. No vis vitae tibique omittantur, sit ludus
            fuisset ne. Agam justo per no. Vis quem laoreet facilisi id. Cu cum nibh dicam,
            eripuit pericula ne vix, ei impetus phaedrum scribentur his. Ferri verear
            eleifend an per, abhorreant incorrupte qui in. Vis ut primis accusata
            argumentum, ne vel platonem sapientem. Pro quod corrumpit ne. Nec odio graecis
            no, tamquam postulant usu ex. Et sensibus neglegentur duo. Et putant officiis
            percipitur vel, laudem incorrupte ea nec, dictas copiosae pro ei. Sed et
            similique adipiscing, ex probatus postulant sed. Integre democritum
            interpretaris qui cu, est sanctus nominavi senserit ei, ei cum probo solet
            minimum. Ut odio decore oporteat per, et mei postea quidam periculis. Purto
            albucius mea no. Ad eum wisi reque falli, prima officiis in mel. Omnis legimus
            pro et. Mei at cetero labores incorrupte, saperet similique per ea. Ne iusto
            cetero pri, mea cu repudiare concludaturque. Ad sea choro iudico adipisci, et
            ferri solet delectus mei. Option regione eloquentiam sed ad, cetero convenire
            dissentiunt ius ad. Id vel omnis homero assueverit, eam justo lorem noster cu.</div>
        </UnmountClosed>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, newCustomTexts: state.newCustomTexts};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate,
    changeCustomText: changeCustomText
  }, dispatch);
}

export default MoreOptions;
