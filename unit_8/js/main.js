const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

$('input,textarea').on('blur', function(){
  if( !$(this).val() == "" ){
    $(this).next().addClass('stay');
  } else {
    $(this).next().removeClass('stay');
  }
});

