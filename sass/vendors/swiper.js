/*  
 *  Swiper 1
 */
// initialisation
const mySwiper_1 = new Swiper('.mySwiper_1', {
  lazy: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true, // si la souris est sur le caroussel la lecture automatique sera en pause 
    disableOnInteraction: false, //Réglé sur false et la lecture automatique ne sera pas désactivée après les interactions de l'utilisateur
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});


/*  
 * Swiper 2 : produits accessoires
 */

// La fonction détruit ou active le swiper
(function() {
   // point d'arrêt où le swiper sera détruit
   // et bascule vers une mise en page à trois colonnes
  const breakpoint = window.matchMedia( '(min-width:45em)' );

  let mySwiper_2;

  const breakpointChecker = function() {
    // Détruit le swiper si la largeur d'écran est supérieur à 45em
    if ( breakpoint.matches === true && mySwiper_2 !== undefined ) {
	     mySwiper_2.destroy( true, true );      
    }
    // Appelle la fonction qui active le swiper si la largeur d'écran est inférieur à 45em
    else if ( breakpoint.matches === false ) {
        enableSwiper();
      }
  };
   
  // Démarre le swiper
  const enableSwiper = function() {
   //  initialisation Swiper 2 
    mySwiper_2 = new Swiper(".mySwiper_2", {
    lazy: true,
    autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true, // si la souris est sur le caroussel la lecture automatique sera en pause 
    disableOnInteraction: false, //Réglé sur false, la lecture automatique reprend dès que la souris n'est plus sur le caroussel
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    });
  };
  // Observe les changements de fenêtre (taille de l'écran)
  // S'il y'a un changement, la fonction breakpointChecker
  // sera appelée
  breakpoint.addEventListener("change", () => {
    breakpointChecker();
  });
  // La fonction sera appelée dès le départ
  breakpointChecker();
})(); 




