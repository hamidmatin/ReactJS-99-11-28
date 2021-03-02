import React, { Component } from 'react'

import MY_PROJECT_NAME, { MY_NAME } from '../../impoer-export-module/my-constant';

// import { myFunction, sessionName, student} from './impoer-export-module/my-modules'
import * as myModules from '../../impoer-export-module/my-modules';

export default class Header extends Component {
  render() {
    return (
      <div className='page-title'>
          <h1>{MY_PROJECT_NAME}</h1>
          <p>{MY_NAME}</p>
          <p>{myModules.sessionName}</p>
        </div>
    )
  }
}
