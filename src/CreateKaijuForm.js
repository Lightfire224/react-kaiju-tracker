import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: '',
    power: '',
    image: ''
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  handlePower = (event) => {
    this.setState({power: event.target.value})
  }

  handleImage = (event) => {
    this.setState({image: event.target.value})
  }

  handleChange = (event) => {
    event.persist()

    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = (event) => {
    // onSubmit={this.handleSubmit}
  // }
  render() {
    return (
      <form id='create-kaiju-form' >
        <label>Name: </label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder="add your name here.." />

        <label>Power: </label>
        <input type='text' name='power' value={this.state.power} onChange={this.handleChange} placeholder="add your power here..." />

        <label>Image: </label>
        <input type='text' name='image' value={this.state.image} onChange={this.handleChange} placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
