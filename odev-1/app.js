
//import fetch from "node-fetch";
import axios from "axios";

const getData = async(number) => {
    return new Promise(async () => {
        const { data : users } = await axios("https://jsonplaceholder.typicode.com/users/1");
        const { data : posts }  = await axios("https://jsonplaceholder.typicode.com/posts?userId=1");
        console.log(users);
        console.log(posts);
    })
}


export default getData;