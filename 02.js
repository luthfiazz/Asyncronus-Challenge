const axios = require('axios');

// const linkposts = 'https://jsonplaceholder.typicode.com/posts';
// const linkusers = 'https://jsonplaceholder.typicode.com/users';

// axios.get(linkposts)
//                     .then((hasil)=>{
//                       let res = hasil.data
//                       res.map(x=>)
//                     })


function getPost(){
    const postUrl='https://jsonplaceholder.typicode.com/posts';
    return axios.get(postUrl)
}
    function getUser(){
    const userUrl = 'https://jsonplaceholder.typicode.com/users';
    return axios.get(userUrl)
}

 
axios.all ([getPost(),getUser()])
.then(axios.spread((posts,users)=>{
let resposts=posts.data
let resusers=users.data

let x = resposts.map(z=>{
  z.User = resusers.filter(items=>items.id===z.userId)
  console.log(z);
})

    // console.log(x)
    // console.log(users)
}));

// async function getUser() {
//     try {
//       const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       const response2 = await axios.get(' https://jsonplaceholder.typicode.com/users');
//       console.log(response1,response2);

//       const data = response1.data.map(items=>{
//         items.title

//       })
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   console.log(getUser())
