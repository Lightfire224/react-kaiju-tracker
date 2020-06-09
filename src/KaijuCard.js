// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  render() {
    const filteredSightings = this.props.sightings.filter(sighting => sighting.kaijuId === this.props.id)
    console.log(this.props.name, filteredSightings)
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power:{this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={"Maybe something should go here"} />

        {filteredSightings.map(filteredSighting => <p> {filteredSighting.description} </p>)}
        {/* What should this edit button do? nothing*/}
        <button className='kaiju-card-edit-button'>Edit</button>

      </div>
    )
  }
}

export default KaijuCard

/*
  filter makes a new array that meets a certain condition
  call filter on sightings, which is an array of sightings
  looking for a kaijuID that matches the id of the kaiju
*/

// if you want it to render something you want map