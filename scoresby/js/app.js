$( document ).ready( function() {
  $( '.menu-icon' ).click( function(e) {
    e.preventDefault();
    $( this ).toggleClass( 'open' );
    $('.nav-container').toggleClass( 'open' );
  });

  var today = new Date();
  var year = today.getFullYear();
  $( '.year' ).html( year );
});