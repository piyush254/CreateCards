import { createContext, useReducer } from "react";

const defaultContext = {
  postList: [],
  addPost: () => {},
  addInitialPosts : () =>{},
  deletePost: () => {},
};

export const PostList = createContext(defaultContext);

const postListReducer = (currPostList, action) => {
  let newCard = currPostList;
  if (action.type == "DeletePost") {
    newCard = currPostList.filter((card) => card.id !== action.payLoad.cardId);
  }else if(action.type == "ADD_INITIAL_POSTS"){
    newCard = action.payLoad.posts;
  }else if(action.type == "ADD_Post"){
    newCard = [action.payLoad,...currPostList]
  }
  return newCard;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,[]
  );
  const addPost = (userid,title,reaction,body,tags) => {
    dispatchpostList({
      type: "ADD_Post",
      payLoad: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reaction,
        userId: userid,
        tags : tags,
      },
    });
  };
   const addInitialPosts = (posts) => {
    dispatchpostList({
      type: "ADD_INITIAL_POSTS",
      payLoad: {
      posts
      },
    });
  };
  const deletePost = (cardId) => {
    dispatchpostList({
      type: "DeletePost",
      payLoad: {
        cardId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        // postList, addPost, deletePost   or we can write like this also
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts : addInitialPosts
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
