//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    sightings: []
  }

  getAllKaijus = () => {
    requests.fetchKaijus()
      .then(kaijus => {
        this.setState({ kaijus })
      })
  }

  componentDidMount() {
    this.getAllKaijus()
    this.getAllSightings()
  }

  getAllSightings = () => {
    requests.fetchSightings()
      .then(sightings => {
        this.setState({sightings})
      })
  }




  //first we have to get the fetches
  //then we should console.log the fetches to see if we have them
  // -- within the fetch, we should setState of kaijus to the fetch data
  // then componentDidMount on the fetch function

  render() {
    return (
      <>

        <CreateKaijuForm reRender={this.getAllKaijus} />

        <div id='kaiju-container'>
          {this.state.kaijus.map(kaiju => <KaijuCard reRender={this.getAllSightings} key={kaiju.id} {...kaiju} sightings={this.state.sightings}/>)}
        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
