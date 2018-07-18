import React from 'react'

import Child from './Child'

class Parent extends React.Component {
  render() {
    return (
      <div id="parent">
       <div>
        ini merupakan INDUK dari ANAK
        <br />
        <Child />
       </div>
       <div>ini coba untuk bikin react ya dibaris 2</div>
      </div>
    )
  }
}

export default Parent
