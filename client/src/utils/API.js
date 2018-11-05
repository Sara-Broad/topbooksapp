import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

// export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
// };

export default {

getBookByTitle: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
}

//get saved fiction
//get saved non-fiction
//save book - by type?
//delete book 

};