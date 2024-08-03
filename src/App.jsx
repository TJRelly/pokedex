import Pokecard from "./components/Pokecard";
import "./App.css";
import POKEMON from "./components/Pokedex";

function App() {
    return (
        <div className="App">
            <h1 className="App-title">Pokedex</h1>
            <div className="App-pokedex">
                {POKEMON.map((p) => (
                    <Pokecard {...p} key={p.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
