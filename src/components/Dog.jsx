// const Dog = (props) => {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <img
//         src="https://www.elityavru.com/images/irk-bilgileri/kopek-irki/siberian-husky-dog.webp"
//         alt=""
//       />
//       <p style={{ backgroundColor: props.color }}>{props.color}</p>
//     </div>
//   );
// };

export default Dog;

const Dog = ({ name, color }) => {
  return (
    <div>
      <p>{name}</p>
      <img
        src="https://www.elityavru.com/images/irk-bilgileri/kopek-irki/siberian-husky-dog.webp"
        alt=""
      />
      <p style={{ backgroundColor: color }}>{color}</p>
    </div>
  );
};
