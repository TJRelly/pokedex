import "./Pokecard.css"

const Pokecard = ({ id, name, type, base_experience }) => {
    const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="Pokemon">
            <h3>{name}</h3>
            <img src={IMG_URL} alt="pokemon image" />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
};

export default Pokecard;
