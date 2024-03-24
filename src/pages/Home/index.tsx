import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
