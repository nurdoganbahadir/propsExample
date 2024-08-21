const Dog = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img
        src="https://www.elityavru.com/images/irk-bilgileri/kopek-irki/siberian-husky-dog.webp"
        alt=""
      />
      <p>{props.color}</p>
    </div>
  );
};

export default Dog;
