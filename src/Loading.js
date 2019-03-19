import React, { Component } from "react";
import { RiseLoader } from 'react-spinners';

import { css } from '@emotion/core';

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
`;

export default class loading extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }


  render(){
    return (
      <div className='sweet-loading'>
        <RiseLoader
          css={override}
          sizeUnit={"px"}
          size={30}
          color={'#5f27cd'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
