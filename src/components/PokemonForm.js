import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  // const [name, setName] =useState("");
  // const [hp, setHP] =useState(0);
  // const [front, setFront] =useState("");
  // const [back, setBack] = useState(""); do formData instead
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });

  function handleChange(e){
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e){
    // e.preventDefault();
    const pokemonData = {
      // name: name,
      // hp: parseInt(hp),
      // front: front,
      // back: back
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl, //this might be where I messed up, since I didn't make a separate object for the sprites.
      }
    };
    fetch(`http://127.0.0.1:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonData)
    })
    .then(res => res.json())
    .then(data => onAddPokemon(data))
  }
    

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
          // onChange={(e) => setName(e.target.value)} do values and handleChange instead
          value={formData.name}
          onChange={handleChange}
          />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
          // onChange={(e) => setHP(e.target.value)}
          value={formData.hp}
          onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            // onChange={(e) => setFront(e.target.value)}
            value={formData.frontUrl} //this part confuses me a bit.
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            // onChange={(e) => setBack(e.target.value)}
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
