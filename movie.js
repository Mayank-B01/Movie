function movieSearch(movieName){
    return new Promise((resolve, reject) => {
        const title = document.getElementById("movieName").value;
        const apikey = "b4cdfba7";
        const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (movieName.length==0){
                reject("Please enter a movie name")
            }
            else if(data.Error){
                reject("Entered movie not found");
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
function validData(data){
    setTimeout(()=>{
        validMovie(data);
    },1000);
}
async function input_check(input){
    try{
        const title = document.getElementById("movieName").value;
        data = await movieSearch(title);
        validData(data);
    }
    catch (error){
        alert(error);
    }
}
document.getElementById("title").addEventListener("click", movieSearch);
let key = document.querySelector("input")
key.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
    event.preventDefault();
    input_check(document.getElementById("movieName").value);
    }
});