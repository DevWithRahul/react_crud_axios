import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
//get Method
export const getPost = () =>{
    return api.get("/posts");
};
// Delete Method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}
// post Method
export const postData = (post) =>{
    return api.post("/posts", post)
}

//put method 
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post)
}