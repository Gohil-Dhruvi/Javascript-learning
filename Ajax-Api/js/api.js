document.getElementById('btn').addEventListener('click', () => {
    let dogimages = document.getElementById('dog-images');

    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            let img = document.createElement('img');
            img.setAttribute('src', data.message)
            dogimages.prepend(img)
        })
        .catch((err) => {
            console.log(err);

        })
})