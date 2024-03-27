import React, { useContext } from "react";
import Card from "./Card";
import "../App.css";
import { PostList } from "../store/Post-list";

const Cards = () => {


  const { postList } = useContext(PostList);
  return (
    <div className="Cards">
      {postList.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};
export default Cards;

// import React, { useContext } from "react";
// import Card from "./Card";
// import "../App.css";
// import { PostList  } from "../store/Post-list";

// const Cards = () => {
//   const { postList } = useContext(PostList);
//   return (
//     <>
//       {postList.map((card) => (
//         <Card />
//       ))}
//     </>
//   );
// };
// export default Cards;
