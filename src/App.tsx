import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import { GlobalCss } from './styles'
import RestaurantsList from './components/RestaurantsList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <RestaurantsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
