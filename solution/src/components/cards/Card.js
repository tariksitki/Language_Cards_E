
// import {languages} from "../../helpers/data";
// import Item from "../../components/item/Item";
// import "./Card.css";

// // card={...item} yaparsak karşılarken {name, image} şeklinde alabiliriz

// const Card = () => {
//     return (
//         <div className = "cards-area-container">
//             <div>
//                 <h1 className = "language-title">Languages</h1>
//                 {console.log(languages)}
//                 <div className = "cards-container">
//                 {
//                     languages.map((item, index) =>{
//                         return (
//                             <Item card = {item} key = {index} />
//                         )
//                     })
//                 }
//                 </div>
//             </div>
//         </div>
//     )
// };

// // ödev 5 sn tutma geri dönme

// export default Card;



import {languages} from "../../helpers/data";
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
        <h1 className="language-title">Languages</h1>
        <div className="bars"></div>
        <div className="cards-container">
          {languages.map((item, index) => {
              return <Item card= {{...item}} key={index} />;
          // return <Item card= {item} key={index} />; alternative
        })}
        </div>
    </div>
  );
};

export default Card;