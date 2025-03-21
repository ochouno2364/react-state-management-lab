import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
// Fighters array
  const fighters = [
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  
// State Variables
const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [zombieFighters, setZombieFighters] = useState([... fighters]);
const [agility, setAgility] = useState(0);
const [strength, setStrength] = useState(0);


// ADD FIGHTERS FUNCTION

const handleAddFighter = (newFighter) => {
if (money >= newFighter.price) {
  setMoney(money - newFighter.price);
  setAgility(agility + newFighter.agility);
  setStrength(strength + newFighter.strength);
setTeam([...team, newFighter]);
setZombieFighters((zomebieFighters) => zomebieFighters.slice(0, -1));
} else {
  console.log('not enough')
};


};



  return (
    <>
    
    <div className={zombieFighters}>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Strength: {strength}</h2>
      <h2>Agility: {agility}</h2>
      <h2>Team: {team.map((newFighter) => {
        return (
          <li key={newFighter.id}> <img src={newFighter.img}></img>
          <br></br> Name: {newFighter.name}
           <br></br> Price: {newFighter.price}
            <br></br> Strength: {newFighter.strength}
             <br></br> Agility: {newFighter.agility}
             </li>
        )
      })} </h2>
      <h4>Pick some team members</h4>
      <ul>
        {fighters.map((fighter) => {
        return (
          <li key={fighter.id}> <img src={fighter.img}></img>
          <br></br> Name: {fighter.name}
           <br></br> Price: {fighter.price}
            <br></br> Strength: {fighter.strength}
             <br></br> Agility: {fighter.agility}
             
             <br></br>
             <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button></li>
        )
        })}
      </ul>
    </div>
    
    </>
  );
}




export default App
