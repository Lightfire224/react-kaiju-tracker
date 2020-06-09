// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    location: '',
    description: '',
    kaijuId: this.props.id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.persist()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch(`http://localhost:4000/sightings`, options)
      .then(response => response.json())
      .then(this.props.reRender)
  }

  render() {
    //do filteredSightings with a filter
    const filteredSightings = this.props.sightings.filter(sighting => sighting.kaijuId === this.props.id)

    //do filteredsightings in a forEach
    // let filteredSightings = []
    // this.props.sightings.forEach(sighting => {
    //   if (sighting.kaijuId === this.props.id) {
    //     filteredSightings.push(sighting.id)
    //   }
    // })
    ////////////////////////////////////////////////////////////////////////////////////////

    //map item is always pushed but you can modify it beforehand. Without modification looks like this:
    // you can modify whats in the push, here we tacked on id to make an array of sighting id's 
    // let filteredSightings = []
    // this.props.sightings.forEach(sighting => {
    //   filteredSightings.push(sighting.id)
    // })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // let filteredSightings = 0
    // this.props.sightings.forEach(sighting => {
    //   if (sighting.kaijuId === this.props.id) {
    //     filteredSightings+= sighting.id
    //   }
    // })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
      <div className='kaiju-card'>
        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power:{this.props.power}</h3>
        <img className='kaiju-card-image' src={this.props.image} alt={"Maybe something should go here"} />
        {filteredSightings.map(filteredSighting => <p> {filteredSighting.description} </p>)}
        {/* -----------------------FORM STARTS HERE --------------------------------------------------------------------- */}
        <form id='create-sighting-form' onSubmit={this.handleSubmit}>
          <label>Location: </label>
          <input type='text' name='location' value={this.state.location} onChange={this.handleChange} placeholder="add your name here.." />
          <label>Description: </label>
          <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder="add your power here..." />
          <input type='submit' value='List Sighting' />
        </form>
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