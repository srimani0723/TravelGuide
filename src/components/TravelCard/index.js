import {
  Card,
  Image,
  DetailsBox,
  DeatailsH1,
  DetailsPara,
} from './styledcomponents'

const TravelCard = props => {
  const {details} = props
  const {description, name, imageUrl} = details

  return (
    <Card>
      <Image src={imageUrl} alt={name} />
      <DetailsBox>
        <DeatailsH1>{name}</DeatailsH1>
        <DetailsPara>{description}</DetailsPara>
      </DetailsBox>
    </Card>
  )
}
export default TravelCard
