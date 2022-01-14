// Menu Hamburger

function menuApparait() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  // Modal maquette
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myMobile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Slider

const imgs = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){

    if(index < 6){

        imgs[index].classList.remove('active');
        index++;
        imgs[index].classList.add('active');

    }
    else if (index === 6) {

        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');

    }

    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }

}


precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){

    if(index > 0){

        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');

    }
    else if (index === 0) {

        imgs[index].classList.remove('active');
        index = 6;
        imgs[index].classList.add('active');

    }
    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }
}
document.addEventListener('keydown', keyPressed)

function keyPressed(e){

    if(e.keyCode === 37){
        slidePrecedente();
    } 
    else if (e.keyCode === 39) {
        slideSuivante();
    }

}


// Cercles 


cercles.forEach(cercle => {

    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');

        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic') - 1;
        imgs[index].classList.add('active');
    })

})