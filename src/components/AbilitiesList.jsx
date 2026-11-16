
function AbilitiesList(props) {
  return (
    <div>
      <h4>Abilities:</h4>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

export default AbilitiesList;
