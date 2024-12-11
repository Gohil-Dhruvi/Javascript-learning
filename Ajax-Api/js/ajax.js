document.getElementById('btn').addEventListener('click',()=>{
    let dogimages = document.getElementById('dog-images');

    const dog = new XMLHttpRequest();

    dog.open("GET","https://dog.ceo/api/breeds/image/random",true);

    dog.onload = function (){
        if(this.status == 200)
        {
            let img = document.createElement('img');
            img.setAttribute('src',JSON.parse(this.responseText).message)
            img.style.height = "100px"
            img.style.width = "100px"
            // dogimages.appendChild(img)
            dogimages.prepend(img)
        }
        else{
            console.log('API EROOR...');
        }
    }
    dog.send();
})