// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  // How can we show the edit form conditionally?
  render() {
    console.log(this.props)
    return (
      <div className='kaiju-card'>

    <h2 className='kaiju-card-name'>{this.props.name}</h2>
    <h3 className='kaiju-card-power'>Power:{this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={"Maybe something should go here"} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button'>Edit</button>

      </div>
    )
  }
}

export default KaijuCard
