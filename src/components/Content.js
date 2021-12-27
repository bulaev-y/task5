import React, { Component } from "react";

import { Row, Col, Toast, ToastBody, ToastHeader , Button, ButtonGroup} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import {ProfileComponent} from ".././views/Profile";


class Content extends Component {
  render() {
    return (
      <div className="p-3 bg-primary my-2 rounded">
      <Toast>
      <ToastHeader>
      Добро пожаловать
      </ToastHeader>
      <ToastBody>
      Это задание №5, здесь можно банить людей.
      </ToastBody>
      </Toast>
      <ButtonGroup>
      <Button color = "warning">
      Block
      </Button>
      <Button color = "success">
      Unblock
      </Button>
      <Button color = "danger">
      Delete
      </Button>
      </ButtonGroup>
      </div>
    );
  }
}

export default Content;
