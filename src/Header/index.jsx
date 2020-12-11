import React, {useState} from 'react';
import {withRouter} from 'react-router';
import * as Constants from '../Utils/Constants';

const Header = ({
                history
                }) => {

    const [onShownSignUpModal, setOnShowSignUpModal] = useState(false);
    const [onShownLogInModal, setOnShowLogInModal] = useState(false);

    const onGoToSelectedRoute = (route) => () => {
        history.push({
            pathname: route,
        })
    }

    const onShowSignUpModal = () => {
        setOnShowSignUpModal(!onShownSignUpModal)
    }

    const onShowLogInModal = () => {
        setOnShowLogInModal(!onShownLogInModal)
    }

    return (
        <header>
        <div class="container">
          <div class="row">
            <nav class="col-12 navbar navbar-expand-lg">
              <div class="logo-brand mr-lg-auto">
                <div onClick={onGoToSelectedRoute()}>FANDOM LEARNING</div>
              </div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav header-navbar__list ml-auto">
                    {Constants.HEADERS_SWITCHERS.map((route, index) => 
                        <li>
                            <div onClick={onGoToSelectedRoute(route.route)}>
                                {route.name}
                            </div>
                        </li>
                    )}
                </ul>
                <div class="header-buttons">
                  <button class="btn btn-sign-up" onClick={onShowSignUpModal}>Sign Up</button>
                  <button class="btn btn-log-in" onClick={onShowLogInModal}>Log In</button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}

export default withRouter(Header); 