// ========================== //
// CREATE A NEW POST
// ========================== //

// The purpose of this script is to take form fields and 
// turn them into something that can be easily pasted
// straight into a Jekyll markdown file – reducing the 
// need to understand how Github works to update the site.
//
// The format the generator should create is:
// ---
// layout: post
// date: YYYY-MM-DD HH:MM:SS
// title: ""
// artist: ""
// spotify: 
//     - https://open.spotify.com/
// applemusic: 
//     - https://music.apple.com/
// ---
// 
// This area will update with your post content.


function generateJekyllPost() {
    
    var date = new Date();
    var today =
      date.getFullYear() + "-" + 
      ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
      ("00" + date.getDate()).slice(-2) +
      " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
      console.log(today);
    var jekyllpost = "";
    
    jekyllpost += "---\n"
    jekyllpost += "layout: post\n";   
    jekyllpost += "date: " + today + "\n";
    jekyllpost += "title: \"" + document.getElementById("new-post--metadata--song-title").value + "\"\n";
    jekyllpost += "artist: \"" + document.getElementById("new-post--metadata--song-artist").value + "\"\n";
    if (document.getElementById("new-post--links--spotify").value != "") {
        jekyllpost += "spotify: \n    - " + document.getElementById("new-post--links--spotify").value + "\n";
    }
    if (document.getElementById("new-post--links--applemusic").value != "") {
        jekyllpost += "applemusic: \n    - " + document.getElementById("new-post--links--applemusic").value + "\n";
    }
    
    jekyllpost += "---\n\n"
    
    jekyllpost += document.getElementById("new-post--post-content--content").value;
    
    
    
    return jekyllpost;

}

function copyToClipboard(){
    
    var textToCopy = generateJekyllPost();
    navigator.clipboard.writeText(textToCopy);
    
    document.getElementById("new-post--tempOutput").innerHTML = textToCopy;
    
}