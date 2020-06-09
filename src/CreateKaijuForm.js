import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: '',
    power: '',
    image: ''
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

    fetch(`http://localhost:4000/kaijus`,options)
    .then(response => response.json())
    .then(this.props.reRender)
  }

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.handleSubmit} >
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
