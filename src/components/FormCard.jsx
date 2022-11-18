function FormCard(props) {
  return (
    <div className="form_card">
      {props.children}
      <h3>{props.name}</h3>
      <input type="number" placeholder="Time used (min)" />
    </div>
  );
}

export default FormCard;
