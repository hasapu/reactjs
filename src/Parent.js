import React from 'react'

import Child from './Child'

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {texts: []}
  }

  componentDidMount() {
    this.setState({texts: ['contoh state 1', 'contoh state 2', 'contoh state 3']})
  }
  render() {

    let texts = this.state.texts.map(function(text){
      return (
        <Child text={text} />
      )
    })

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
       <div>
       ini coba untuk bikin react ya dibaris 2 menggunakan state
       {texts}
       </div>
      </div>
    )
  }
}

export default Parent
