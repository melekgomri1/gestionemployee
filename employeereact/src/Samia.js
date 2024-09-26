import React, { useState } from 'react';
import Kamel from './Kamel';

function Samia() {
  // Déclare les états pour les champs du formulaire
  const [name, setName] = useState('melek');
  const [lastname, setLastname] = useState('gomri');
  const [age, setAge] = useState(12);
  const [x] = useState(0);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nom: ${name}, Prénom: ${lastname}, Âge: ${age}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entrez votre nom"
        /><br />
        
        <label>Prénom:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Entrez votre prénom"
        /><br />
        
        <label>Âge:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Entrez votre âge"
        /><br />
        
        <button type="submit">Soumettre</button>
      </form>
      
      <div>
        <h3>État actuel :</h3>
        Nom: {name}<br />
        Prénom: {lastname}<br />
        Âge: {age}<br />
        x: {x}<br />
        
       
      </div>

      <h1>Samia tajourya hhhh</h1>
      <Kamel data={{ name, lastname, age, x }} />
    </div>
  );
}

export default Samia;
