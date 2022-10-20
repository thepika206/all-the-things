import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'
import CoolestThings from './pages/CoolestThings/CoolestThings'
import PokemonThings from './pages/PokemonThings/PokemonThings'
import SemiCoolThings from './pages/SemiCoolThings/SemiCoolThings'
import DrinkThings from './pages/DrinkThings/DrinkThings'

const App = () => {
  const bensThings = [
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]
  const naveensThings = [
    {
      name: "Apples",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "phones", "laptops", "beautiful"],
    },
  ]

  const chrisThings = [
    {
      name: "Music",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["hello friend", "wassaaappp"],
    },
  ]
  const patricksThings = [
    {
      name: "Pokemon",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png",  
      attributes: ["yellow", "cute",],
    },
  ]

  const jennsThings = [
    {
      name: "Cocktails",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["Mojito", "margarita", "cosmo", "green tea"],
    },
  ]
  
  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-coolest-things"
        element={<CoolestThings things={naveensThings} />}
      />
      <Route
        path="/the-pokemon-things"
        element={<PokemonThings things={patricksThings} />}
      />
      <Route
        path="/semi-cool-things"
        element={<SemiCoolThings things={chrisThings} />}
      />
      <Route
        path="/the-coolest-things"
        element={<CoolestThings things={naveensThings} />}
      />
      <Route
        path="/the-drink-things"
        element={<DrinkThings things={jennsThings} />}
      />
    </Routes>
  )
}

export default App
