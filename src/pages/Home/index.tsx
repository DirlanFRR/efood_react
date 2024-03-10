import { useGetRestaurantsQuery } from '../../services/api'

import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
