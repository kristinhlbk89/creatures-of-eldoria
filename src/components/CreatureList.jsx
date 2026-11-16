
import CreatureCard from './CreatureCard.jsx';

function CreatureList(props) {
  return (
    <div className="creature-list">
      {props.creatures.map((creature) => (
        <CreatureCard key={creature.id} creature={creature} />
      ))}
    </div>
  );
}

export default CreatureList;
