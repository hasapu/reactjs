import React from 'react'

import Child from './Child'

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {texts: [], color:''}
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    if(this.state.color==='red') {
      this.setState({color:'blue'})
    } else {
      this.setState({color:'red'})
    }

  }

  componentDidMount() {
    this.setState({texts: ['contoh state 1', 'contoh state 2', 'contoh state 3'], color:'red'})
  }
  render() {

    let texts = this.state.texts.map(function(text){
      return (
        <Child text={text} />
      )
    })

    let col = this.state.color

    return (
      <div id="parent" style={{color:col}} onClick={this.changeColor}>
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
