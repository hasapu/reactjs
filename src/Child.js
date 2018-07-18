import React from 'react'

class Child extends React.Component {
  render() {
    return (
      <div onClick={this.props.counterClick}>
        {this.props.text}
      </div>
    )
  }
}

export default Child

//NOTE: tulisan yang berada di dalam kurung kurawal merupakan code bukan tulisan biasa
