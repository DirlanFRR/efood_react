import { FooterContainer } from './styles'
import logo from '../../assets/images/logo.svg'

import insta from '../../assets/icons/instagram-round-svgrepo-com (1) 1.svg'
import face from '../../assets/icons/facebook-round-svgrepo-com 1.svg'
import twit from '../../assets/icons/twitter-2-svgrepo-com 1.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="logo efood" />
    <div>
      <img src={insta} alt="instagram logo" />
      <img src={face} alt="facebook logo" />
      <img src={twit} alt="twiter logo" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
