// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should
//   return a Object containing these two pieces of information. Use the function 
//   to make three dictionaries representing different albums. Print each return value
//    to show that Objects are storing the album information correctly. Add an optional 
//    parameter to make_album() that allows you to store the number of tracks on an album. 
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//     Make at least one new function call that includes the number of tracks on an album.
function make_album_40(name, title, tracks) {
    var album = {
        name_r: name,
        title_r: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album_40("album1", "title number 1", 5);
var album2 = make_album_40("album2", "title number 2");
var album3 = make_album_40("album3", "title number 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);
