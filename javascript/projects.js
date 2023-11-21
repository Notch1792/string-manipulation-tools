let projects = document.getElementsByClassName("sort");
let searchBar = document.getElementById("search");

function filter () {
    console.log("test");

    let searchQuery = document.getElementById("search").value.toLowerCase();

    for (var i = 0; i < projects.length; i++) {
        var item = projects[i];
        var itemText = item.getElementsByTagName('h1')[0].innerHTML.toLowerCase();


        if (itemText.indexOf(searchQuery) !== -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
    
};
