import React from 'react'

import Child from './Child'

class Parent extends React.Component {
  render() {
    return (
      <div id="parent">
       <div>
        ini merupakan INDUK dari ANAK
        <br />
        <Child text="ini contoh properties 1"/>
        <br />
        <Child text="ini contoh properties 2"/>
        <br />
        <Child text="ini contoh properties 3"/>
       </div>
       <div>ini coba untuk bikin react ya dibaris 2</div>
      </div>
    )
  }
}

export default Parent
