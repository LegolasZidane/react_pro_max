import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }){

    const [ isEditing, setIsEditing ] = useState(false);
    const [ pName, setPName ] = useState(initialName); 

    function handleEditClick(){
        setIsEditing( (prev) => !prev );
    }

    function handleChange( e ){
        setPName(e.target.value);
    }

    let playerName = <span className="player-name">{pName}</span>;

    if( isEditing ){
        playerName= <input type="text" value={pName} onChange={(e) => handleChange(e)} required/>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick} >{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}