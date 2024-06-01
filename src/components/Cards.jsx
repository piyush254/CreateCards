import React, { useContext } from "react";
import Card from "./Card";
import "../App.css";
import { PostList } from "../store/Post-list";
import WelcomeMessage from "./WelcomeMessage";

const Cards = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const handleOnClick = () => {
    fetch('https://dummyjson.com/posts/search?q=love')
    .then(res => res.json())
    .then(data =>{
      addInitialPosts(data.posts)
      console.log(data.posts);
    } );
  }
  
  return (
    <div className="Cards">
      {postList.length === 0 && <WelcomeMessage onclickedMessage ={handleOnClick}    />}
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
