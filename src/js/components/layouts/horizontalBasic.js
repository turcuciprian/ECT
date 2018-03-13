import React, {Component} from 'react';
import HorizontalBasicCont from '../../containers/layouts/horizontalBasic';

class HorizontalBasic extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return ( 
                <div>
                    <HorizontalBasicCont />
                </div>
            );
    }
}
export default HorizontalBasic;