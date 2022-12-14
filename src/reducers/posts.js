import { CREATE, UPDATE, FETCH_ALL, DELETE } from "../constans/actionTypes";
//init state = post:

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map(
        (post) => (post._id === action.payload._id ? action.payload : post) //new unpdatePost == action.payload
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload); //action.payload === id
    default:
      return posts;
  }
};
