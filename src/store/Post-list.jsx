import { createContext, useReducer } from "react";

const defaultContext = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(defaultContext);

const postListReducer = (currPostList, action) => {
  let newCard = currPostList;
  if (action.type == "DeletePost") {
    newCard = currPostList.filter((card) => card.id !== action.payLoad.cardId);
  }else if(action.type == "ADD_Post"){
    newCard = [action.payLoad,...currPostList]
  }
  return newCard;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    default_Post_List
  );
  const addPost = (userid,title,reaction,body,tags) => {
    dispatchpostList({
      type: "ADD_Post",
      payLoad: {
        id: Date.now(),
        title: title,
        body: body,
        numberOflikes: reaction,
        userId: userid,
        tags : tags,
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
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const default_Post_List = [
  {
    id: 1,
    title: "Going to Maldives",
    body: "Hi friend i am going to vaccation for enjoying a lot",
    numberOflikes: 200,
    userId: "user1",
    tags: ["vaccation", "Doing fun", "Alot of joy"],
  },
  {
    id: 2,
    title: "Doing web",
    body: "Web dev  if very fun for life let make something new here",
    numberOflikes: 15,
    userId: "user10",
    tags: ["Development", "web is fun"],
  },
];
export default PostListProvider;
