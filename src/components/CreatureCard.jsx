
import AbilitiesList from './AbilitiesList.jsx';

function CreatureCard(props) {
  return (
    <div className="creature-card">
      <h3>{props.creature.name}</h3>
      <p><strong>Habitat:</strong> {props.creature.habitat}</p>
      <p>{props.creature.description}</p>
      <AbilitiesList abilities={props.creature.abilities} />
    </div>
  );
}

export default CreatureCard;
