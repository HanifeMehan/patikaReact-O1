import axios from "axios";

async function getData(id){
  //Axios calls made
  const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+id);
  const {data: posts}= await axios("https://jsonplaceholder.typicode.com/posts?id="+id);

  console.log("USERS:",users);
  console.log("POSTS:",posts);

}
export default getData;
