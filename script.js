// For the form, prevent the default submission and console log the values.
// You'll need to replace this with your own back-end service or use something like Firebase.

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});

// For the calendar, you'll need to implement this yourself or use a library like FullCalendar

var slideIndex = 1;

function openModal() {
    document.getElementById('modal').style.display = "block";
    showSlides(slideIndex);
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

<script type="module">
import Lightbox from './photoswipe-lightbox.esm.js';
const lightbox = new Lightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('./photoswipe.esm.js')
});
lightbox.init();
</script>