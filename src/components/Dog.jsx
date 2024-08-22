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

//*DISTRUCTİNG METHOD */
const Dog = ({ name, color,img }) => {
  return (
    <div>
      <p>{name}</p>
      <img
        src={img}
        alt=""
      />
      <p style={{ backgroundColor: color }}>{color}</p>
    </div>
  );
};

//*default değer verilebilir, nested yöntem kullanılabilir yani compenent içerisinde compenent olabilir.*/
export default Dog;
