import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Busqueda() {

    const navigate = useNavigate();

    const [datosPokemon, setDatosPokemon] = useState({});
    const [PokemonElegido, setPokemonElegido] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
                if (!response.ok) {
                    throw new Error('La Consulta no fue exitosa');
                }
                const data = await response.json();
                setDatosPokemon(data);
            } catch (error) {
                console.error("Error al traer datos!: ", error);
            }
        };

        fetchData();

    }, []); 

    const IrADetalle = () => {
        navigate(`/busqueda/${PokemonElegido}`)
    }

    const CambiarEleccion = (event) => {
        setPokemonElegido(event.target.value);
    };

    return (
        <div>
            <h1>Pokemon List</h1>
            {datosPokemon.results ? (
                <div>
                    <label>Elige a tu Pokemon!:</label>
                    <br/>
                    <select onChange={CambiarEleccion}>
                        <option value="">Elige a tu Pokemon!</option>
                        {datosPokemon.results.map((pokemon, index) => (
                            <option key={index} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <button onClick={IrADetalle}>Buscar!</button>
        </div>
    );
}

export default Busqueda;