import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelCard from '../TravelCard'
import {Container, Heading, TravelCards} from './styledcomponents'

const apiStatusConstraints = {
  initial: 'INITIAL',
  inProcess: 'IN_PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TravelGuide extends Component {
  state = {
    apiStatus: apiStatusConstraints.initial,
    list: [],
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    this.setState({
      apiStatus: apiStatusConstraints.inProcess,
    })

    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const newData = data.packages.map(each => ({
        id: each.id,
        description: each.description,
        imageUrl: each.image_url,
        name: each.name,
      }))

      this.setState({
        apiStatus: apiStatusConstraints.success,
        list: newData,
      })
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderCards = () => {
    const {list} = this.state

    return (
      <>
        {list.map(each => (
          <TravelCard key={each.id} details={each} />
        ))}
      </>
    )
  }

  render() {
    const {apiStatus} = this.state
    return (
      <Container>
        <Heading>Travel Guide</Heading>
        <TravelCards>
          {apiStatus === apiStatusConstraints.inProcess
            ? this.renderLoader()
            : this.renderCards()}
        </TravelCards>
      </Container>
    )
  }
}

export default TravelGuide
