/* Array of movies */
const movie_array = [];

/* This function is the object constructor that creates each movie object. */
function Movie(title, rating, havewatched) {
        return {title:title, rating:rating, haveWatched:havewatched};

} // Movie

/* This function adds a movie object to the array of all movie objects. */
function addMovie(movie) {

        console.log("A new movie is added");
        movie_array.length++;
        movie_array[movie_array.length - 1] = movie;

} // addMovie

/* This function does the following:
        Iterate through all elements of the array
        Print out to console in a correct format
        Print out the total number of movies
*/
function printMovies() {
        
        let output = "Printing all movies...\n";

        for (let i = 0; i < movie_array.length; i++) {
                let m = movie_array[i];
                output += ("" + m.title + ", rating of " + m.rating + ", havewatched: " + m.haveWatched + "\n");
    
        }

        output += ("\nYou have " + movie_array.length + " movies in total\n");
        console.log(output);

} // printMovies

/* This function does the following:
        Print out to console, only the movies have a rating higher a specified value (passed as an argument)
        Print out the total number of matches
*/
function highRatings(rating) {
        
        let output = "printing movie that has a rating higher than " + rating + "\n";
        let matches = 0;

        for (let i = 0; i < movie_array.length; i++) {
                
                let m = movie_array[i];

                if (m.rating >= rating) {
                        output += ("" + m.title + ", rating of " + m.rating + ", havewatched: " + m.haveWatched + "\n");
                        matches++;

                }
    
        }


        output += ("\nIn total, there are " + matches + " matches\n");
        console.log(output);

} // highRatings
     
/* This function toggles the 'haveWatched' property of the specified movie (from true to false or vice versa). */
function changeWatched(title) {

        console.log("changing the status of the movie...");

        for (let i = 0; i < movie_array.length; i++) {
                
                let m = movie_array[i];

                if (m.title == title) {
                        m.haveWatched = !m.haveWatched;

                }
    
        }

}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);