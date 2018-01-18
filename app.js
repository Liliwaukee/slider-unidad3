
$(document).ready(function() { //Inicializamos Jquery
  $('.image').hide();
  $('.image:first').show();
/*

//Vamos a llamar a la clase de los botones y les vamos a asignar el evento click
  $('.btn').click(function(event) {
    $(event.currentTarget).addClass('active');//curretTarget va a decirnos a quién le hacemos click y le va a agregar la clase active que cambia los colores
    $(event.currentTarget).siblings().removeClass('active')//con sibling() y remove classs le vamos a decir que a los hermanos de a quien le dimos click le quite la clase active
  });

*/
  // Ejecutamos todas las funciones
  	$('.btn').click(pagination);

/*
function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

    $('.image').hide();// Ocultamos todos los slides
		$('.container-image .image:nth-child('+ paginationPos +')').show(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.btn').css({'background-color': '#858585'});
		$(this).css({'background-color': '#CD6E2E'});
		//imgPos = paginationPos;

	}
*/
  function pagination(event){
    $('.image').hide();
    var bulletSelect = $(event.currentTarget).index()+1;
    $('.image:nth-child('+bulletSelect+')').show();
    $(event.currentTarget).addClass('active');//curretTarget va a decirnos a quién le hacemos click y le va a agregar la clase active que cambia los colores
    $(event.currentTarget).siblings().removeClass('active')//con sibling() y remove classs le vamos a decir que a los hermanos de a quien le dimos click le quite la clase active
  }





//  $(event.currentTarget).closest('.product-details').next().toggle()
// });

});
