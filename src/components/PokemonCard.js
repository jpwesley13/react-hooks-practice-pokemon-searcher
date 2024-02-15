import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({monster}) {
  const {name, hp, sprites} = monster
  const [view, setView] = useState(sprites.front)

  function handleClick(){
    if(view === sprites.front) {
      setView(sprites.back)
    } else {
      setView(sprites.front)
    }
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" 
          src={view}
          onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{name.charAt(0).toUpperCase()+name.slice(1)}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
