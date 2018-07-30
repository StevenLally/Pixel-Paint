/*
Pixel Paint project.  Goal is to set up a grid on the page so that
when a square is clicked, it changes to the color entered in the
input field at the top of the page (can be named color, hex, or rgb).

Eventually would like to add ability to let user modify grid size, change
from text input for color select to color grid or gradient for more
intuitive color selection
*/

//set default color to white
let color = 'white';
let mdown = false;

//declaring constants
const colorInput = document.getElementById('colorInput');
const colorSelect = document.getElementById('colorSelect');
const about = document.getElementById('about'); 
const divs = document.querySelectorAll('div');

colorSelect.addEventListener('click', () => {
	color = colorInput.value;
});

about.addEventListener('click', () => {
	alert("Insert info on how to use Pixel Paint here");
});


for (let i = 0; i < divs.length; i += 1) {
	divs[i].addEventListener('mousedown', () => {
		divs[i].style.backgroundColor = color;
		mdown = true;
	});

	divs[i].addEventListener('mouseup', () => {
		mdown = false;
	});

	divs[i].addEventListener('mouseover', () => {
		if (mdown === true) {
			divs[i].style.backgroundColor = color;
		}
	});
}
