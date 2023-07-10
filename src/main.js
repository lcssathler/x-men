var isEnter = false;
var isOut = false;

var heroes = document.querySelectorAll(".hero");
heroes.forEach((hero) => {
	const imgSelectedHero = document.querySelector(".large-hero-img");
	const nameHero = document.getElementById('name-hero');
	const descriptionHero = document.getElementById('description-hero');

	hero.addEventListener("mouseenter", () => {
		if (window.innerWidth < 450) {
			window.scrollTo({top: 0, behavior: 'smooth'});
		}

		removeSelectedClass();
		hero.classList.add("selected");

		const idHero = hero.attributes.id.value;
		changeSelectedImgHero(imgSelectedHero, idHero);
		changeSelectedNameHero(nameHero, idHero);
		changeSelectedDescriptionHero(descriptionHero, hero);
	});
});

function changeSelectedDescriptionHero(descriptionHero, hero) {
	descriptionHero.innerHTML = hero.getAttribute('data-description');
}

function changeSelectedNameHero(nameHero, idHero) {
	nameHero.innerHTML = idHero;
}

function changeSelectedImgHero(imgSelectedHero, idHero) {
	imgSelectedHero.src = `./src/images/card-${idHero}.png`;
}

function removeSelectedClass() {
	const selectedHero = document.querySelector(".selected");
	selectedHero.classList.remove("selected");
}

