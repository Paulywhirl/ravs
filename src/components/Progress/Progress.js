import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
  ModalFooter} from 'reactstrap';
import './Progress.scss';
import lockimage from '../../assets/icons/lock1.png';

class Progress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      progress: JSON.parse(this.props.progress),
      progressToPresent: [],
      show: false,
      focus: {},
      searched: false
    }
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      progress: JSON.parse(this.props.progress),
      searched: this.props.searched
    })
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  handleShow(e, obj) {
    this.setState({ show: true, focus: obj });
  }

  handleConfirm(){
    let sessionFocus = this.state.focus
    let session_id = sessionFocus.session_id
    let session_no = sessionFocus.session_number
    sessionFocus.completed = true;
    if (session_id === "Tr") {
      this.state.progress.session_progression.Training.completed = true
    }
    this.setState({
      show: !this.state.show
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = JSON.stringify({
      "email": this.state.email,
      "progress_graph": this.state.progress
    })
    try {
      fetch(`http://127.0.0.1:5000/progress-graph/submit`, {
        method: 'post',
        crossDomain: true,
        headers: {'Content-Type':'application/json'},
        body: user
      })
      .then(
        response => {return response.json()}
      )
      .then(
        data =>
        alert(data.message),
        () => {
          this.props.sendToParent({
            progress: JSON.stringify(this.state.progress)
        })
      }
      ).catch(function(error){
        console.log(error)
      })
    } catch(error) {
      console.log(error)
    }
  }


  render() {
    return (
      <div className="progressinfo">

        <h1>Progress Graph</h1>
        <hr />
        <br />

        <div className="rowContent">

          <div className="contain">
            <h4>Intro to CHRW</h4>
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Training.completed === true
                    ? 'success' : 'info'}
            onClick={this.state.progress.session_progression.Training.completed === false ?
              (e) => this.handleShow(e,
               this.state.progress.session_progression.Training) : ''}>
               100
            </Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>On-Air</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} 101</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[1].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[1].completed === false}>
            {this.state.progress.session_progression.On_Air[1].completed ? '' : (<i className="fas fa-lock"></i>)} 102</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[2].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[2].completed === false}>
            {this.state.progress.session_progression.On_Air[2].completed ? '' : (<i className="fas fa-lock"></i>)} 103</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[3].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[3].completed === false}>
            {this.state.progress.session_progression.On_Air[3].completed ? '' : (<i className="fas fa-lock"></i>)} 104</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[4].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[4].completed === false}>
            {this.state.progress.session_progression.On_Air[4].completed ? '' : (<i className="fas fa-lock"></i>)} 105</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[5].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[5].completed === false}>
            {this.state.progress.session_progression.On_Air[5].completed ? '' : (<i className="fas fa-lock"></i>)} 106</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.On_Air[6].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.On_Air[6].completed === false}>
            {this.state.progress.session_progression.On_Air[6].completed ? '' : (<i className="fas fa-lock"></i>)} 107</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Music</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Music[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Music[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} 201</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Music[1].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Music[1].completed === false}>
            {this.state.progress.session_progression.Music[1].completed ? '' : (<i className="fas fa-lock"></i>)} 202</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Music[2].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Music[2].completed === false}>
            {this.state.progress.session_progression.Music[2].completed ? '' : (<i className="fas fa-lock"></i>)} 203</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>News</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.News[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.News[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} 301</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Sports</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Sports[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Sports[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} 401</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Spoken Word</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Spoken_Word[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Spoken_Word[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} 501</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Podcasting</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} POD1</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[1].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[1].completed === false}>
            {this.state.progress.session_progression.Podcasting[1].completed ? '' : (<i className="fas fa-lock"></i>)} POD2</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[2].completed === true
                    ? 'success' : 'info'} disabled={this.state.progress.session_progression.Podcasting[2].completed === false}>
            {this.state.progress.session_progression.Podcasting[2].completed ? '' : (<i className="fas fa-lock"></i>)} POD3</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[3].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[3].completed === false}>
            {this.state.progress.session_progression.Podcasting[3].completed ? '' : (<i className="fas fa-lock"></i>)} POD4</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[4].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[4].completed === false}>
            {this.state.progress.session_progression.Podcasting[4].completed ? '' : (<i className="fas fa-lock"></i>)} POD5</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[5].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[5].completed === false}>
            {this.state.progress.session_progression.Podcasting[5].completed ? '' : (<i className="fas fa-lock"></i>)} POD6</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[6].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[6].completed === false}>
            {this.state.progress.session_progression.Podcasting[6].completed ? '' : (<i className="fas fa-lock"></i>)} POD7</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[7].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[7].completed === false}>
            {this.state.progress.session_progression.Podcasting[7].completed ? '' : (<i className="fas fa-lock"></i>)} POD8</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Podcasting[8].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Podcasting[8].completed === false}>
            {this.state.progress.session_progression.Podcasting[8].completed ? '' : (<i className="fas fa-lock"></i>)} POD9</Button>
          </div>
        </div>
        <hr className="hr1" />

        <div className="rowContent">
          <div className="contain">
            <h4>Production</h4>
            <br />
          </div>
          <div>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Production[0].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Production[0].completed === false &&
                      this.state.progress.session_progression.Training.completed === false}>
            {this.state.progress.session_progression.Training.completed ? '' : (<i className="fas fa-lock"></i>)} 601</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Production[1].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Production[1].completed === false}>
            {this.state.progress.session_progression.Production[1].completed ? '' : (<i className="fas fa-lock"></i>)} 602</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Production[2].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Production[2].completed === false}>
            {this.state.progress.session_progression.Production[2].completed ? '' : (<i className="fas fa-lock"></i>)} 603</Button>
            <Button color="light" className="btnstyle"
            color={this.state.progress.session_progression.Production[3].completed === true
                    ? 'success' : 'info'}
            disabled={this.state.progress.session_progression.Production[3].completed === false}>
            {this.state.progress.session_progression.Production[3].completed ? '' : (<i className="fas fa-lock"></i>)} 604</Button>
          </div>
        </div>

        {
          this.state.searched === true ?
          <div></div> :
          <div className="submitContent">
            <Button
            type="button"
            id="progress_submit"
            onClick={this.handleSubmit}>
            Submit
            </Button>
          </div>
        }

        <Modal isOpen={this.state.show}
              toggle={this.toggle}
              className={this.props.className}
              fade={false}>
          <ModalHeader toggle={this.toggle}>
            Training
          </ModalHeader>
          <ModalBody>Did you complete this Training Session?</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={this.toggle}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleConfirm}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>

      </div>

    )
  }
}

export default Progress;
