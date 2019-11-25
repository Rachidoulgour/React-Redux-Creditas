import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class GoHome extends PureComponent {

  redirectToHome = () => {
   const { history } = this.props;
   if(history) history.push('/');
  }

  render() {
    const { history } = this.props;

    return(
      (history)
      ?
        <div onClick={this.redirectToHome} className="goBack">◀</div>
      :
        <div>Ops there is no paath</div>
    );
  }

}

export default withRouter(GoHome);