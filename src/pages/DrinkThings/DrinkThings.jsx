import DrinkThings from '../../components/'
import { Link } from 'react-router-dom'

const DrinkThings = (props) => {
  return (
    <>
      <h1>Jenns's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <DrinkCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default DrinkThings
