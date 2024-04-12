import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Pokemon = () => {

    const {id} = useParams()

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
              if (!response.ok) {
                  throw new Error('El pedido no se logro completar');
              }
              const data = await response.json();
              setPokemon(data)
              
          } catch (error) {
              console.error("Error al traer datos:", error);
          }
      };

      fetchData();

  }, []); 

  return (
  <>
   { pokemon && pokemon.id ? (
    <div>{console.log(pokemon)}
    
    <div class="container bcontent">
        <div class="card" width={500}>
            <div class="row">
                <div class="col-sm-5">
                <img class="card-img" src={pokemon.sprites.other.dream_world.front_default} alt="Carta pokemon" />
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">{pokemon.name.toUpperCase()}</h5>
                        <p class="card-text">HP: {pokemon.stats[0].base_stat}</p>
                        <p class="card-text">Ataque: {pokemon.stats[1].base_stat}</p>
                        <p class="card-text">Defensa: {pokemon.stats[2].base_stat}</p>
                        <p class="card-text">Ataque Especial: {pokemon.stats[3].base_stat}</p>
                        <p class="card-text">Defensa Especial: {pokemon.stats[4].base_stat}</p>
                        <p class="card-text">Velocidad: {pokemon.stats[5].base_stat}</p>
                        <br/>
                        <p class="card-text">Tipo: {pokemon.types[0].type.name}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> ): (<p>...Loading</p>)}</>
  )
}

export default Pokemon