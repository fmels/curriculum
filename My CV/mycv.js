



// //This is the jQuery option I found online// 
//   jQuery.githubUser = function(fmels, callback) {
//     jQuery.getJSON('https://api.github.com/users/fmels/repos?callback=?',callback)
//  }
  
//  jQuery.fn.loadRepositories = function(fmels) {
//      this.html("<span>Querying GitHub for " + fmels +"'s repositories...</span>");
      
//      var target = this;
//      $.githubUser(fmels, function(data) {
//          var repos = data.data; // JSON Parsing
//          sortByName(repos);    
      
//          var list = $('<dl/>');
//          target.empty().append(list);
//          $(repos).each(function() {
//              if (this.name != (fmels.toLowerCase()+'.github.com')) {
//                  list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em></dt>');
//                  list.append('<dd>' + this.description +'</dd>');
//              }
//          });      
//        });
       
//      function sortByName(repos) {
//          repos.sort(function(a,b) {
//          return a.name - b.name;
//         });
//      }
//  };

// // This is the JSON option //

const baseURL = "https://api.github.com"
const list = document.getElementById("repo").innerText=out
function repo(
fetch(`${baseURL}/users/fmels`)
    .then(response => response.json())
    .then(result => {
    list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
    list.append('<dd>' + this.language + '</dd>');
    list.append('<dd>' + this.description + '</dd>');
    list.append('<dd>' + this.size + '</dd>');
    })
    


// jQuery.githubUserRepositories = function(username, callback) {
//     jQuery.getJSON("https://api.github.com/users/" + fmels + "/repos?callback=?", callback);
//   }
   
//   jQuery.fn.loadRepositores = function(username) {
//     this.html("<span>Querying GitHub for repositories...</span>");
   
//     var target = this; 
//     $.githubUserRepositories(fmels, function(data) {
//       var repos = data.data;
//       sortByNumberOfWatchers(repos);
   
//       var list = $('<dl/>');
//       target.empty().append(list);
//       $(repos).each(function() {
//         list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
//         list.append('<dd>' + this.description + '</dd>');
//         list.append('<dd>' + this.size + '</dd>');
//       });
//     });
   
//     function sortByNumberOfWatchers(repos) {
//       repos.sort(function(a,b) {
//         return b.watchers - a.watchers;
//       });
//     }
//   };
