import Restaurant from '../../Model/restaurant'
import RestaurantCard from '../Restaurant'
import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <ListContainer className="container">
    {restaurants.map((restaurant) => (
      <RestaurantCard
        key={restaurant.id}
        image={restaurant.image}
        infoTags={restaurant.infoTags}
        title={restaurant.title}
        rate={restaurant.rate}
        description={restaurant.description}
        useLink
      />
    ))}
  </ListContainer>
)

export default RestaurantsList
