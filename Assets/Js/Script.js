let btn=document.querySelector("#btn")
let card=document.querySelector(".cards") 
let spinner=document.querySelector(".spinner-border")

spinner.classList.add("d-none")
 
btn.addEventListener("click",function(){
    spinner.classList.remove("d-none")
    setTimeout(()=>{
        getAllPosts()
    },2000)
 
})



async function getAllPosts() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await data.json();
    spinner.classList.add("d-none")
    //console.log(posts)
     
    posts.map(post => {
        let userName = getUserName(post.userId);
        //console.log(userName)
        card.innerHTML +=(`<div class="card">
        <h5 class="card-header">${userName}</h5>
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div> `)

        
    });
   

}
async function getUserName(postId){
    let userData = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}`);
    let user = await userData.json();
    return user;

}
 

 
