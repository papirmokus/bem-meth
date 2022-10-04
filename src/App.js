import Container from './components/Container/Container'
import './index.css'

import RecipeCard from './components/RecipeCard/RecipeCard'
import data from './data'

function App() {
  return (
    <Container>
      {data.map(recipe => (
        <RecipeCard {...recipe} />
      ))}
    </Container>
  )
}

export default App
