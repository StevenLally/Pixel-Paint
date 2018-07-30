//Creating the HTML to fill the page with the desired grid size
let pageHTML;

//function to add content to the HTML file
const print = (divHTML) => {
	let body = document.getElementById('grid');
	body.innerHTML = divHTML;
}

//creating navbar-like feature to top of page
pageHTML = '<ul>';
pageHTML += '<li id="logo">Pixel Paint</li>';
pageHTML += '<li><input type="text" placeholder="Enter a color here" id="colorInput"></li>';
pageHTML += '<li><a href=# id="colorSelect">Select color</a></li>';
pageHTML += '<li id="about"><a href=#>About</a></li>';
pageHTML += '</ul>';

//creating divs to fill page (currently a 100x100 grid) and adding them after the navbar
for (let i = 1; i <= 10000; i += 1) {
	pageHTML += '<div id="box' + i + '"></div>';
}

//apply content to HTML file to display grid on page
print(pageHTML);
