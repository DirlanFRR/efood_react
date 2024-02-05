import Restaurant from '../Restaurant'
import { ListContainer } from './styles'
import image1 from '../../assets/images/image 1.svg'
import image2 from '../../assets/images/imagem.svg'

const RestaurantsList = () => (
  <ListContainer className="container">
    <Restaurant
      image={image2}
      infoTags={['Destaque da semana', 'Japonesa']}
      title="La Dulce Vitta"
      rate={4.9}
      description={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem asperiores praesentium debitis nisi perspiciatis laboriosam veniam natus, voluptatibus excepturi, enim dolores aspernatur. Ut exercitationem eaque nostrum, nisi dolore ab.'
      }
      useLink
    />
    <Restaurant
      image={image1}
      infoTags={['Destaque da semana', 'Japonesa']}
      title="La Dulce Vitta"
      rate={4.9}
      description={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem asperiores praesentium debitis nisi perspiciatis laboriosam veniam natus, voluptatibus excepturi, enim dolores aspernatur. Ut exercitationem eaque nostrum, nisi dolore ab.'
      }
      useLink
    />
    <Restaurant
      image={image1}
      infoTags={['Destaque da semana', 'Japonesa']}
      title="La Dulce Vitta"
      rate={4.9}
      description={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem asperiores praesentium debitis nisi perspiciatis laboriosam veniam natus, voluptatibus excepturi, enim dolores aspernatur. Ut exercitationem eaque nostrum, nisi dolore ab.'
      }
      useLink
    />
    <Restaurant
      image={image1}
      infoTags={['Destaque da semana', 'Japonesa']}
      title="La Dulce Vitta"
      rate={4.9}
      description={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem asperiores praesentium debitis nisi perspiciatis laboriosam veniam natus, voluptatibus excepturi, enim dolores aspernatur. Ut exercitationem eaque nostrum, nisi dolore ab.'
      }
      useLink
    />
    <Restaurant
      image={image1}
      infoTags={['Destaque da semana', 'Japonesa']}
      title="La Dulce Vitta"
      rate={4.9}
      description={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem asperiores praesentium debitis nisi perspiciatis laboriosam veniam natus, voluptatibus excepturi, enim dolores aspernatur. Ut exercitationem eaque nostrum, nisi dolore ab.'
      }
      useLink
    />
    <Restaurant
      image={image1}
      infoTags={['Destaque da semana', 'Japonesa']}
      title="La Dulce Vitta"
      rate={4.9}
      description={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem asperiores praesentium debitis nisi perspiciatis laboriosam veniam natus, voluptatibus excepturi, enim dolores aspernatur. Ut exercitationem eaque nostrum, nisi dolore ab.'
      }
      useLink
    />
  </ListContainer>
)

export default RestaurantsList
