function movieSearch(title){
    return new Promise((resolve, reject) => {
        const apikey = "b4cdfba7";
        const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
        data = fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (title.length === 0){
                reject("Please enter a movie name")
            }
            else if(data.Error){
                reject(data.Error);
            }
            else{
                resolve(data);
            }
            });
        });
}
function validMovie(data){
    document.getElementById("movieTitle").innerHTML = `<b>Title:</b>${data.Title}`;
    document.getElementById("details").innerHTML = `<b>Release Year:</b>${data.Year}<br><b>Director Name:</b>${data.Director}<br><b>Overview:</b>${data.Plot}<br><b>Casts:</b>${data.Actors}<br><img src="${data.Poster}">`;
    document.getElementById("api").innerHTML = `&copy Made by Mayank Baryal with OMDBapi`
}

async function input_check(){
    try{
        const title = document.getElementById("movieName").value;
        data = await movieSearch(title);
        setTimeout(()=>{
            validMovie(data);
        },1000)
    }
    catch (error){
        alert(error);
    }
}


document.getElementById("Search").addEventListener("click", input_check);
document.querySelector("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input_check();
    }
});