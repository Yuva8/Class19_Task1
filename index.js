
document.getElementById("image").addEventListener("click",image)
function image(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then ((res)=>{
    //  console.log(res.json()) 
      return res.json()
  })
  .then((data)=>{
    let img = document.getElementById("img")
       img.setAttribute("src",data.message)
       
       
      
  })
}

