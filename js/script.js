// DOCUMENTOS - ORGANIGRAMA
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

// SLIDER DE LOS PROFESORES
$(".sliderdocentes").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: false,
});

// TERMINOS Y CONDICIONES
const openterm = document.getElementById('openterm');
const modalterm_container = document.getElementById('modalterm_container');
const closeterm = document.getElementById('closeterm');

openterm.addEventListener('click', () => {
  modalterm_container.classList.add('show');  
});

closeterm.addEventListener('click', () => {
  modalterm_container.classList.remove('show');
});

$('.terminarboton').on('click', function() {
	$('.terminos').css('opacity', 0);
	$('.botonterminos').css('opacity', 0);
});