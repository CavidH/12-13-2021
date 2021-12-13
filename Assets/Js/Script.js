let btn = document.querySelector("#btn")
let card = document.querySelector(".cards")
let spinner = document.querySelector(".spinner-border")

// spinner.classList.add("d-none")

// btn.addEventListener("click", function () {
//     spinner.classList.remove("d-none")
//     setTimeout(() => {
//         // getUsers()
//     }, 1)

// })



/*async function getAllPosts() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await data.json();
    spinner.classList.add("d-none")
    //console.log(posts)
     
    posts.map(post => {
        /!*let userName = getUserName(post.userId);*!/
        //console.log(userName)
        card.innerHTML +=(`<div class="card">
        <h5 class="card-header">${userName}</h5>
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div> `)

        
    });
   

}*/
// async function getUsers() {
//     let userData = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     let users = await userData.json();
//     spinner.classList.add("d-none")
//     await showUsers(users)

// }
// async function showUsers(Users) {
//     Users.forEach(async user => {

//         card.innerHTML += (`<div class="card mt-2">
//         <h5 class="card-header">User Name: ${user.username}</h5>
//         <div class="card-body">
//         <h5 class="card-title">Full Name: ${user.name}</h5>
//         <p class="card-text">WebSite: ${user.website}<br>Phone: ${user.phone}</p>
//         <a href="#" class="btn btn-primary">Detail</a>
//         </div>
//         `);
 
//         console.log(card);

//         let posts= await getPostContent(user.id);
//         // console.log(posts);
//          card.innerHTML+=posts
//     });
// }
 
// async function getPosts() {
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let posts = await data.json();
//     return posts;
// }
// async function getPostContent(userId){
//     let Htmlcon="";
//     let allposts=await getPosts();
//     allposts.forEach(async (post) => {
//         if(userId==post.userId){
//         Htmlcon+=(`<div class="card-header mt-2">
//         <p>Postlar<p>
//         </div>
//         <div class="card-body ">
//         <blockquote class="blockquote mb-0">
//         <p>Title: ${post.title}</p>
//         <p>Title: ${post.body}</p>
//         </blockquote>
//         </div>
//         </div>`)
    
//         }
//     })
//     return Htmlcon;
// } 


async function getAllUser() {
    let usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    return await usersData.json();
}

async function getPostsById(id) {
    let postData = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await postData.json();
    return posts.filter(n => {
        if (n.id == id){
            return n;
        }
    });
}


let users = getAllUser();
users.then(res => res.forEach(async element => {
    let posts = await getPostsById(element.id);
    posts.forEach(elmn => {
        console.log(elmn);
    })
}))

 
 





