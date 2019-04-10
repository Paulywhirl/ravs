import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './InfoPage.scss';


class InfoPage extends Component {
  render() {
    return (
      <div className="infopage">

        <div>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder" />
            </FormGroup>
          </Form>
        </div>
      </div>

    )
  }
}

export default InfoPage;
