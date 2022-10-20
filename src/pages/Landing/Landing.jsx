import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
      <Link to="/the-coolest-things">naveens's Things</Link><br/>
      <Link to="/the-drink-things">Jenn's Things</Link><br/>    
      <Link to="/semi-cool-things">chris's Things</Link><br/>
      <Link to="/the-pokemon-things">Patrick's Things</Link><br/>
    </>
  )
} 
export default Landing