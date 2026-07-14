import { useRoutes } from 'react-router-dom'
import Layout from './components/Layout'
import { routes } from './routes/routes'

function App() {

  const routing=useRoutes(routes)

  return (
  <Layout>
    {routing}
  </Layout>    
  )
}

export default App
