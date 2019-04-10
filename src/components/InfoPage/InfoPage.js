import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './InfoPage.scss';
import Progress from '../Progress/Progress';


class InfoPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      focus_email: "",
      progress: {},
      show: false,
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
  }

  handleChangeEmail(event) {
    this.setState({
      focus_email: event.target.value
    })
  }

  handleSubmit(target) {
    if(target.charCode === 13) {
      target.preventDefault();
      try {
        fetch(`
          http://127.0.0.1:5000/progress-graph?email=${this.state.focus_email}`,
           {
          method: 'get',
          crossDomain: true
        })
        .then(response => {return response.json()})
        .then(
          data =>
          this.setState({
            progress: data,
            show: true
          }),
          console.log(this.state.progress)
        )
      } catch {

      }
    }
  }


  render() {
    return (
      <div className="infopage">

        <div>
          <Form>
            <FormGroup>
              <Label for="exampleEmail"
              >Search a volunteer!</Label>
              <Input type="email"
              name="email"
              id="emailSearch"
              className="form-control form-control-lg"
              placeholder="email"
              onKeyPress={this.handleSubmit}
              onChange={this.handleChangeEmail}/>
            </FormGroup>
          </Form>
        </div>

        {
          this.state.show === true ?
          <div><Progress
            email={this.state.focus_email}
            progress={JSON.stringify(this.state.progress)}
            searched={true}/></div> :
          this.state.error === true ?
          <div><br/>Email not listed</div> :
          <div></div>
        }

        <div>
        </div>
      </div>

    )
  }
}

export default InfoPage;
