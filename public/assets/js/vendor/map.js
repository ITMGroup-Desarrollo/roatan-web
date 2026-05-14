// #region Detección de dispositivo
// Detectar si es un dispositivo móvil
var isMobile = window.innerWidth <= 768;
// #endregion

// #region Configuración del mapa
// Configuración del mapa
var map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -1, // Permitir un zoom más alejado
  maxZoom: 1,
  zoomControl: false,
  attributionControl: false,
  maxBounds: [
    [-200, -150], // Límites más amplios
    [1250, 1600],
  ],
  maxBoundsViscosity: 0.3, // Restringir el movimiento fuera de los límites
});

// Agrega un nuevo control de zoom en la posición deseada
L.control
  .zoom({
    position: "topright", // Cambia 'topright' a la posición deseada ('topleft', 'bottomleft', 'bottomright')
  })
  .addTo(map);
// Deshabilitar el zoom con el scroll del mouse si no es un dispositivo móvil
if (!isMobile) {
  map.scrollWheelZoom.disable();
}
// #endregion

// #region Configuración de tamaño y zoom según el dispositivo
var bounds = [
  [0, 0],
  [1100, 1500],
];

if (isMobile) {
  document.getElementById("map").style.height = "70vh"; // Tamaño más pequeño para mobile
  document.getElementById("map").style.width = "92vw"; // Tamaño más pequeño para mobile
} else {
  document.getElementById("map").style.height = "100vh"; // Tamaño normal para desktop
  document.getElementById("map").style.width = "95vw"; // Tamaño normal para desktop
}
// #endregion

// #region Agrega la imagen del mapa
L.imageOverlay("/assets/images/media/taino-actualizado-2026.webp", bounds).addTo(
  map,
);
map.fitBounds(bounds); // Ajustar los bounds para que el mapa se vea correctamente

// Ajustar el nivel de zoom según el dispositivo después de ajustar los bounds
if (!isMobile) {
  map.setZoom(0); // Zoom inicial en escritorio
} else {
  map.setZoom(-1);
}

// #endregion

// #region Evento para minimizar o expandir el contenido del filtro

$(document).on("click", ".minimize-btn", function () {
  var $minimizeBtn = $(this); // Botón que disparó el evento
  var $filter = $minimizeBtn.closest(".leaflet-control-filter"); // Contenedor asociado
  var $filterContent = $filter.find(".filter-content");
  var $headerText = $filter.find(".header-text");

  // Verifica si el botón clicado actualmente está en estado "hide"
  var isExpanding = !$minimizeBtn.hasClass("show");

  // Cambia todos los demás botones a "hide"
  $(".minimize-btn.show")
    .not($minimizeBtn)
    .each(function () {
      var $otherBtn = $(this);
      $otherBtn.removeClass("show").addClass("hide");
      var $otherFilter = $otherBtn.closest(".leaflet-control-filter");
      $otherFilter.find(".filter-content").slideUp(200); // Contrae contenido de otros botones
      $otherBtn.text("☰"); // Restablece el texto
      $otherFilter.find(".header-text").get(0).style.paddingRight = "0rem"; // Ajusta estilo
    });

  // Alternar el estado del botón clicado
  if (isExpanding) {
    $minimizeBtn.removeClass("hide").addClass("show"); // Cambia a "show"
    $filterContent.slideDown(200); // Expande el contenido
    $minimizeBtn.html('<img src="/assets/icons/map/x.svg" alt="close">'); // Cambia el contenido del botón
    $headerText.get(0).style.paddingRight = ""; // Restablece el relleno
  } else {
    $minimizeBtn.removeClass("show").addClass("hide"); // Cambia a "hide"
    $filterContent.slideUp(200); // Contrae el contenido
    $minimizeBtn.text("☰"); // Cambia el texto
    $headerText.get(0).style.paddingRight = "0rem"; // Ajusta el relleno
  }
});

// #endregion

// #region Definición de íconos usando L.divIcon
// var retailIcon = L.divIcon({
//   html: `<div class="custom-icon" data-aos="fade-zoom-in"
//      data-aos-easing="ease-in-back"
//      data-aos-delay="300"
//      data-aos-offset="0">
//                <img src="/assets/icons/map/retail.svg" alt="retail" width="20" height="20">
//            </div>`,
//   className: "shadowMarker", // Puedes usar tu propia clase CSS o dejarla vacía
//   iconSize: [20, 20],
//   iconAnchor: [0, 0], // Ajusta el anclaje como en L.icon
//   popupAnchor: [12, -20], // Ajusta el anclaje del popup como en L.icon
// });
var retailIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
  data-aos-easing="ease-in-back"
  data-aos-delay="200"
  data-aos-offset="0">
            <img src="/assets/icons/map/retail.svg" alt="retail" width="20" height="20">
        </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});

var restroomsIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/restrooms.svg" alt="restrooms" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var barIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0">
               <img src="/assets/icons/map/bar.svg" alt="bar" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var foodIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
               <img src="/assets/icons/map/food.svg" alt="food" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var drugstoreIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/drugstore.svg" alt="drugstore" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var experienceIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
               <img src="/assets/icons/map/experience.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var showIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0">
               <img src="/assets/icons/map/show.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var fruitIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/coco.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var camaraIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/camara.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var starIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
               <img src="/assets/icons/map/star.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var taxiIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0">
               <img src="/assets/icons/map/taxi.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var shorexIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
               <img src="/assets/icons/map/shorex.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var poolIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/pool-marker.svg" alt="pool" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var beachIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/beach-marker.svg" alt="beach" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var rumquestIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/rum-quest-marker.svg" alt="rum-quest" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var riverIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/lazy-river-marker.svg" alt="lazy-river" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var splashIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/splash-marker.svg" alt="splash-surfing" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var BeachPlayIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/beach-play.svg" alt="beach-playground" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var YongolIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/yongol.svg" alt="yongol" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var AviarioIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/aviario.svg" alt="aviarius" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var spaIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/spa-marker.svg" alt="spa wellness" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var monkeyIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0">
               <img src="/assets/icons/map/port-experience/monkey-marker.svg" alt="monkey-island" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});

var salidaCaminoIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0"
     data-aos-offset="0">
               <img class="salidaCaminoIcon" src="/assets/icons/map/arrowRed.svg" alt="PORT EXIT" width="30" height="30">
           </div>`,
  className: "shadowMarker",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var salidaIcon = L.divIcon({
  html: `<span style="color: #ed1654; font-weight: bold; font-size: 1.2rem; text-shadow: 
    -1px -1px 0 white,  
     1px -1px 0 white,
    -1px  1px 0 white,
     1px  1px 0 white;">${idioma === "es" ? "SALIDA" : "EXIT"}</span>`,
  className: "shadowMarker",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});
var regresoCaminoIcon = L.divIcon({
  html: `<div class="custom-icon" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="0"
     data-aos-offset="0">
               <img class="regresoCaminoIcon" src="/assets/icons/map/arrowGreen.svg" alt="PORT EXIT" width="30" height="30">
           </div>`,
  className: "shadowMarker",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var regresoIcon = L.divIcon({
  html: `<span style="color: #008f39; font-weight: bold; font-size: 1.2rem; text-shadow: 
    -1px -1px 0 white,  
     1px -1px 0 white,
    -1px  1px 0 white,
     1px  1px 0 white;">${idioma === "es" ? "VUELTA AL BARCO" : "BACK TO SHIP"}</span>`,
  className: "shadowMarker",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});
var exitIcon = L.divIcon({
  html: `<span style="color: #ffffff; font-weight: bold; font-size: 1.2rem; text-shadow: 
    ">${idioma === "es" ? "SALIDA" : "EXIT"}</span>`,
  className: "shadowMarker",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
});
// #endregion

// #region Marcadores y sus eventos
var caminoCoordenadas = [
  [150, 310],
  [180, 320],
  [230, 325],
  [250, 305],
  [280, 270],
  [300, 260],
  [320, 260],
  [370, 290],
  [400, 290],
  [440, 275],
  [465, 275],
  [495, 300],
  [510, 330],
  [520, 340],
  [590, 340],
  [615, 360],
  [625, 400],
  [610, 450],
  [595, 480],
  [610, 510],
  [620, 515],
  [660, 525], //Bifurcación

  [680, 520],
  [710, 505],
  [740, 505],
  [850, 550],
  [885, 575],
  [905, 600],
  [915, 650],
  [920, 700],
  [945, 750],
  [955, 790],
  [960, 850],
  [955, 980],
  [900, 1100], //union de la bifurcación
  [910, 1130],
  [890, 1210],
  [880, 1210],
  [860, 1230],
  [850, 1245],
  [730, 1300],
  [500, 1235],
];
var caminoCoordenadas2 = [
  [665, 532], //Bifurcación
  [690, 540],
  [720, 535],
  [755, 532],
  [775, 540],
  [800, 560],
  [810, 580],
  [810, 640],
  [835, 720],
  [845, 765],
  [870, 810],
  [910, 870],
  [912, 880],
  [912, 950],
  [910, 1000],
  [895, 1050],

  [895, 1090], //union de la bifurcación
];
var caminoCoordenadas3 = [
  [150, 310],
  [180, 320],
  [230, 325],
  [250, 305],
  [280, 270],
  [300, 260],
  [320, 260],
  [370, 290],
  [400, 290],
  [440, 275],
  [465, 275],
  [495, 300],
  [510, 330],
  [520, 340],
  [590, 340],
  [615, 360],
  [625, 400],
  [610, 450],
  [595, 480],
  [610, 510],
  [620, 515],
  [660, 525], //Bifurcación

  [680, 520],
  [710, 505],
  [740, 505],
  [850, 550],
  [885, 575],
  [905, 600],
  [915, 650],
  [920, 700],
  [945, 750],
  [955, 790],
  [960, 850],
  [955, 980],
  [900, 1100], //union de la bifurcación
  [910, 1130],
  [890, 1210],
  [880, 1210],
  [860, 1230],
  [850, 1245],
  [730, 1300],
  [500, 1235],
];
var caminoCoordenadas4 = [
  [665, 532], //Bifurcación
  [690, 540],
  [720, 535],
  [755, 532],
  [775, 540],
  [800, 560],
  [810, 580],
  [810, 640],
  [835, 720],
  [845, 765],
  [870, 810],
  [910, 870],
  [912, 880],
  [912, 950],
  [910, 1000],
  [895, 1050],

  [895, 1090], //union de la bifurcación
];
// Dibujar el camino en el mapa
// Capa de borde para camino3 (línea más gruesa en blanco)
var bordeCamino3 = L.polyline(caminoCoordenadas3, {
  color: "white",
  weight: 6,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa principal para camino3
var camino3 = L.polyline(caminoCoordenadas3, {
  color: "#008f39",
  weight: 3,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa de borde para camino4
var bordeCamino4 = L.polyline(caminoCoordenadas4, {
  color: "white",
  weight: 6,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa principal para camino4
var camino4 = L.polyline(caminoCoordenadas4, {
  color: "#008f39",
  weight: 3,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa de borde para camino
var bordeCamino = L.polyline(caminoCoordenadas, {
  color: "white",
  weight: 6,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa principal para camino
var camino = L.polyline(caminoCoordenadas, {
  color: "#ed1654",
  weight: 3,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa de borde para camino2
var bordeCamino2 = L.polyline(caminoCoordenadas2, {
  color: "white",
  weight: 6,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

// Capa principal para camino2
var camino2 = L.polyline(caminoCoordenadas2, {
  color: "#ed1654",
  weight: 3,
  opacity: 1,
  dashArray: "8, 10",
}).addTo(map);

var markers = {
  2: [
    L.marker([890, 650], { icon: rumquestIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/rum-quest.svg" alt="Logo" style="width: 70px; height: 70px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Sigue a Mr Rum y acompáñalo en este viaje a través de la historia."
                    : "Follow Mr Rum and enjoy a fun journey through history!"
                }</p>
                <a href="${idioma}/port-experience/mr-rum-quest" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  3: [
    L.marker([470, 300], { icon: riverIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/lazy-river.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">LAZY RIVER</p>
                <p>${
                  idioma === "es"
                    ? "¡Flotemos y disfrutemos!"
                    : "Let’s float around and enjoy the ride!"
                }</p>
                <a href="${idioma}/port-experience/lazy-river" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  4: [
    L.marker([520, 560], { icon: splashIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/splash-surffing.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¡Sol, arena y mucha&nbsp;diversión!"
                    : "Sun, sand, and lots of&nbsp;fun!"
                }</p>
                <a href="${idioma}/port-experience/splash-surfing" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  5: [
    L.marker([880, 1105], { icon: spaIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/spa-wellness.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "Consiéntete y relájate con un masaje."
                    : "Treat yourself and relax with a massage."
                }</p>
                <a href="${idioma}/port-experience/spa-wellness" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  6: [
    L.marker([1030, 770], { icon: monkeyIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/monkey-island.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MONKEY ISLAND</p>
                <p>${
                  idioma === "es"
                    ? "Nuevos amigos, grandes recuerdos. "
                    : "Make new monkey friends and have a great time!"
                }</p>
                <a href="${idioma}/port-experience/monkey-island" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  7: [
    L.marker([750, 580], { icon: poolIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/pool.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">${idioma === "es" ? "PISCINA" : "POOL"}</p>
            <p>${
              idioma === "es"
                ? "Nada, relájate y disfruta."
                : "Swim, relax, and enjoy. "
            }</p>
            <a href="${idioma}/port-experience/pool" >
                     <button 
                       style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                       onmouseover="this.style.backgroundColor='#f5a23a';" 
                       onmouseout="this.style.backgroundColor='#1c355e';">
                       ${idioma === "es" ? "Ver más" : "View more"}
                     </button>
                 </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([360, 390], { icon: poolIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/pool.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">${idioma === "es" ? "PISCINA" : "POOL"}</p>
            <p>${
              idioma === "es"
                ? "¡Refréscate al llegar! No te pierdas la fiesta y los shows."
                : "Freshen up upon arrival. Grab a spot and don’t miss the party and shows"
            }</p>            
            <a href="${idioma}/port-experience/pool" >
                     <button 
                       style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                       onmouseover="this.style.backgroundColor='#f5a23a';" 
                       onmouseout="this.style.backgroundColor='#1c355e';">
                       ${idioma === "es" ? "Ver más" : "View more"}
                     </button>
                 </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  8: [
    L.marker([830, 900], { icon: beachIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/beach-playground.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">${idioma === "es" ? "PLAYA" : "BEACH"}</p>
            <p>${
              idioma === "es"
                ? "¡La playa en el puerto! Descansa y broncéate."
                : "Beach vibes at port! Lay by a sunbed for a nice tan."
            }</p>
            <a href="${idioma}/port-experience/beach" >
                     <button 
                       style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                       onmouseover="this.style.backgroundColor='#f5a23a';" 
                       onmouseout="this.style.backgroundColor='#1c355e';">
                       ${idioma === "es" ? "Ver más" : "View more"}
                     </button>
                 </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([650, 680], { icon: beachIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/beach-playground.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">${idioma === "es" ? "PLAYA" : "BEACH"}</p>
            <p>${
              idioma === "es"
                ? "¡La playa en el puerto! Descansa y broncéate."
                : "Beach vibes at port! Lay by a sunbed for a nice tan."
            }</p>
            <a href="${idioma}/port-experience/beach" >
                     <button 
                       style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                       onmouseover="this.style.backgroundColor='#f5a23a';" 
                       onmouseout="this.style.backgroundColor='#1c355e';">
                       ${idioma === "es" ? "Ver más" : "View more"}
                     </button>
                 </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([560, 395], { icon: beachIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/beach-playground.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">${idioma === "es" ? "PLAYA" : "BEACH"}</p>
            <p>${
              idioma === "es"
                ? "¡La playa en el puerto! Descansa y broncéate."
                : "Beach vibes at port! Lay by a sunbed for a nice tan."
            }</p>
            <a href="${idioma}/port-experience/beach" >
                     <button 
                       style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                       onmouseover="this.style.backgroundColor='#f5a23a';" 
                       onmouseout="this.style.backgroundColor='#1c355e';">
                       ${idioma === "es" ? "Ver más" : "View more"}
                     </button>
                 </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([330, 315], { icon: beachIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/beach-playground.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">${idioma === "es" ? "PLAYA" : "BEACH"}</p>
            <p>${
              idioma === "es"
                ? "¡La playa en el puerto! Descansa y broncéate."
                : "Beach vibes at port! Lay by a sunbed for a nice tan."
            }</p>
            <a href="${idioma}/port-experience/beach" >
                     <button 
                       style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                       onmouseover="this.style.backgroundColor='#f5a23a';" 
                       onmouseout="this.style.backgroundColor='#1c355e';">
                       ${idioma === "es" ? "Ver más" : "View more"}
                     </button>
                 </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  9: [
    L.marker([863, 1290], { icon: restroomsIcon })
      .addTo(map)
      // .bindPopup(
      //   `
      //       <div class="pop" style="text-align: center;">
      //           <img src="/assets/images/port-experience/blue-parrot/blue-parrot-logo-black.svg" alt="Logo" style="width: 50px; height: 50px;">
      //           <p>Fugiat </p>
      //           <a href="https://example.com" target="_self">
      //               <button
      //                 style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
      //                 onmouseover="this.style.backgroundColor='#f5a23a';"
      //                 onmouseout="this.style.backgroundColor='#1c355e';">
      //                 ${idioma === 'es' ? 'Ver más' : 'View more'}
      //               </button>
      //           </a>
      //       </div>
      //   `
      // )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([1000, 1100], { icon: restroomsIcon })
      .addTo(map)
      // .bindPopup(
      //   `
      //       <div class="pop" style="text-align: center;">
      //           <img src="/assets/images/port-experience/blue-parrot/blue-parrot-logo-black.svg" alt="Logo" style="width: 50px; height: 50px;">
      //           <p>Fugiat </p>
      //           <a href="https://example.com" target="_self">
      //               <button
      //                 style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
      //                 onmouseover="this.style.backgroundColor='#f5a23a';"
      //                 onmouseout="this.style.backgroundColor='#1c355e';">
      //                 ${idioma === 'es' ? 'Ver más' : 'View more'}
      //               </button>
      //           </a>
      //       </div>
      //   `
      // )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([585, 490], { icon: restroomsIcon })
      .addTo(map)
      // .bindPopup(
      //   `
      //       <div class="pop" style="text-align: center;">
      //           <img src="/assets/images/port-experience/blue-parrot/blue-parrot-logo-black.svg" alt="Logo" style="width: 50px; height: 50px;">
      //           <p>Fugiat </p>
      //           <a href="https://example.com" target="_self">
      //               <button
      //                 style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
      //                 onmouseover="this.style.backgroundColor='#f5a23a';"
      //                 onmouseout="this.style.backgroundColor='#1c355e';">
      //                 ${idioma === 'es' ? 'Ver más' : 'View more'}
      //               </button>
      //           </a>
      //       </div>
      //   `
      // )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([800, 760], { icon: restroomsIcon })
      .addTo(map)
      // .bindPopup(
      //   `
      //       <div class="pop" style="text-align: center;">
      //           <img src="/assets/images/port-experience/blue-parrot/blue-parrot-logo-black.svg" alt="Logo" style="width: 50px; height: 50px;">
      //           <p>Fugiat </p>
      //           <a href="https://example.com" target="_self">
      //               <button
      //                 style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
      //                 onmouseover="this.style.backgroundColor='#f5a23a';"
      //                 onmouseout="this.style.backgroundColor='#1c355e';">
      //                 ${idioma === 'es' ? 'Ver más' : 'View more'}
      //               </button>
      //           </a>
      //       </div>
      //   `
      // )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  10: [
    L.marker([883, 1260], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/show-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Lo mejor del entretenimiento dominicano en el puerto. "
                    : "The best of Dominican entertainment for you to&nbspenjoy!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([975, 1070], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/show-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Lo mejor del entretenimiento dominicano en el puerto. "
                    : "The best of Dominican entertainment for you to&nbspenjoy!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([825, 495], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/show-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Lo mejor del entretenimiento dominicano en el puerto. "
                    : "The best of Dominican entertainment for you to&nbspenjoy!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([745, 605], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/show-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No te pierdas del show principal! "
                    : "Don't miss the main&nbspshow!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([445, 395], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/show-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Lo mejor del entretenimiento dominicano en el puerto. "
                    : "The best of Dominican entertainment for you to&nbspenjoy!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  11: [
    L.marker([945, 950], { icon: fruitIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map//port-experience/coco-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para drinks de frutas y buenas&nbsp;vibras!"
                    : "The spot for fresh fruit drinks & good&nbsp;vibes!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([825, 695], { icon: fruitIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map//port-experience/coco-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para drinks de frutas y buenas&nbsp;vibras!"
                    : "The spot for fresh fruit drinks & good&nbsp;vibes!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([625, 525], { icon: fruitIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map//port-experience/coco-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para drinks de frutas y buenas&nbsp;vibras!"
                    : "The spot for fresh fruit drinks & good&nbsp;vibes!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([505, 360], { icon: fruitIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map//port-experience/coco-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para drinks de frutas y buenas&nbsp;vibras!"
                    : "The spot for fresh fruit drinks & good&nbsp;vibes!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([430, 275], { icon: fruitIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map//port-experience/coco-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para drinks de frutas y buenas&nbsp;vibras!"
                    : "The spot for fresh fruit drinks & good&nbsp;vibes!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([255, 305], { icon: fruitIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map//port-experience/coco-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para drinks de frutas y buenas&nbsp;vibras!"
                    : "The spot for fresh fruit drinks & good&nbsp;vibes!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  12: [
    L.marker([800, 1300], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([940, 1090], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([945, 915], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([1040, 845], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([645, 715], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([900, 535], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([410, 430], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([300, 260], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([220, 335], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/camara-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡No olvides tomar fotos y taggearnos en Instagram!"
                    : "Don't forget to share your pics and tag us on Instagram!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  13: [
    L.marker([835, 1265], { icon: starIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/star-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¿Sin reserva? Aparta tu tour favorito al llegar."
                    : "Don't Forget to book your favorite tour upon arrival"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([900, 1130], { icon: starIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/star-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¿Sin reserva? Aparta tu tour favorito al llegar."
                    : "Don't Forget to book your favorite tour upon arrival"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  14: [
    L.marker([185, 270], { icon: taxiIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/taxi-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Servicios de transportación."
                    : "Transportation services"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  15: [
    L.marker([920, 1280], { icon: shorexIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/shorex-logo.svg" alt="Logo" style="width: 80px; height: 80px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "¡Encuentra tu tour al llegar!"
                    : "Find your excursion upon arrival!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  16: [
    L.marker([570, 580], { icon: BeachPlayIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/beach-play-logo.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¡Sol, arena y mucha&nbsp;diversión!"
                    : "Sun, sand, and lots of&nbsp;fun!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  17: [
    L.marker([700, 700], { icon: YongolIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/yongol-logo.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¡Ejercitarse en el paraíso siempre será&nbsp;divertido!"
                    : "Working out in paradise is always&nbsp;fun!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  18: [
    L.marker([820, 850], { icon: AviarioIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/aviario-logo.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¡Pasa un día genial en compañía de las&nbsp;aves!"
                    : "Have a great day in the company of our feathery&nbsp;friends!"
                }</p>
                <a href="${idioma}/port-experience/aviary" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  20: [
    L.marker([840, 1177], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
            <p class="popupTitle">DIAMONDS INTERNATIONAL</p>
            <p>${idioma === "es" ? "Joyería" : "Jewelry"}</p>
            
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  21: [
    L.marker([930, 1157], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DUFRY</p>
                <p>${idioma === "es" ? "Tienda" : "Big Retailer"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  22: [
    L.marker([990, 960], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">BLUE STONE</p>
                <p>${idioma === "es" ? "Joyería" : "Jewelry"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([595, 297], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">BLUE STONE</p>
                <p>${idioma === "es" ? "Joyería" : "Jewelry"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  23: [
    L.marker([995, 896], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MORENA MIA</p>
                <p>${
                  idioma === "es"
                    ? "Perfumeria y cosmetica"
                    : "Perfumery and Cosmetics"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([890, 1002], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MORENA MIA</p>
                <p>${
                  idioma === "es"
                    ? "Perfumeria y cosmetica"
                    : "Perfumery and Cosmetics"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([885, 738], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MORENA MIA</p>
                <p>${
                  idioma === "es"
                    ? "Perfumeria y cosmetica"
                    : "Perfumery and Cosmetics"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  24: [
    L.marker([995, 862], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PAWS BY THE SEA</p>
                <p>${idioma === "es" ? "Tienda de regalos" : "Gift Shop"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  25: [
    L.marker([995, 830], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">TSUNAMI XL</p>
                <p>${idioma === "es" ? "Conveniencia" : "Convenience Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  26: [
    L.marker([1000, 799], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PIRAÑA JOE</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  27: [
    L.marker([985, 725], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ISLAND LIFE - SURF SHOP</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  28: [
    L.marker([966, 683], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DOMINICAN THINGS'</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([895, 910], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DOMINICAN THINGS</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([280, 225], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DOMINICAN THINGS</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  29: [
    L.marker([957, 650], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">CHRISTMAS BY THE SEA</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  30: [
    L.marker([953, 620], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">RUTA DE LAS INDAS</p>
                <p>${idioma === "es" ? "Boutique" : "Boutique"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  31: [
    L.marker([880, 1065], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">THE TIE DYE HUT</p>
                <p>${idioma === "es" ? "Boutique" : "Boutique"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  32: [
    L.marker([882, 1035], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PIÑA COLADA BOUTIQUE</p>
                <p>${idioma === "es" ? "Boutique" : "Boutique"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  33: [
    L.marker([895, 955], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SHARK ATTACK</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([510, 250], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SHARK ATTACK</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  34: [
    L.marker([871, 835], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">BLOSSOM SOAP</p>
                <p>${idioma === "es" ? "Boutique" : "Boutique"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  35: [
    L.marker([845, 802], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SEA SALT</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([461, 233], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SEA SALT</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  36: [
    L.marker([920, 785], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">RIVIERA</p>
                <p>${idioma === "es" ? "Cosmetología" : "Cosmetology"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  37: [
    L.marker([870, 595], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MEXICAN EXPERIENCE</p>
                <p>${
                  idioma === "es"
                    ? "Tienda de regalos/Tabaco"
                    : "Gift Shop/Tobacco"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  38: [
    L.marker([995, 925], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MUSEO DEL TABACO</p>
                <p>${idioma === "es" ? "Tabaco" : "Tobacco"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  39: [
    L.marker([860, 622], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER BY THE SEA</p>
                <p>${idioma === "es" ? "Joyeria" : "Jewelry"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([320, 220], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER BY THE SEA</p>
                <p>${idioma === "es" ? "Joyeria" : "Jewelry"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([250, 240], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER BY THE SEA</p>
                <p>${idioma === "es" ? "Joyeria" : "Jewelry"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  40: [
    L.marker([865, 648], { icon: drugstoreIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/drugstore-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">${
                  idioma === "es" ? "FARMACIA TAINO BAY" : "TAINO BAY DRUGSTORE"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  41: [
    L.marker([868, 675], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">TAINO LOGO SHOP</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  42: [
    L.marker([878, 710], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DOMINICAN YUCAYAQUE</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  43: [
    L.marker([900, 763], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">TURQUESA</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([360, 230], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">TURQUESA</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  44: [
    L.marker([660, 355], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">NATURAL BEAUTY</p>
                <p>${
                  idioma === "es"
                    ? "Perfumeria y cosmetica"
                    : "Perfumery and Cosmetics"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  45: [
    L.marker([651, 334], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">HARD ROCK CAFE</p>
                <p>${idioma === "es" ? "Tienda destino" : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  46: [
    L.marker([640, 320], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DEL SOL</p>
                <p>${
                  idioma === "es"
                    ? "Ropa y accesorios"
                    : "Fashion & Accessories"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  47: [
    L.marker([627, 309], { icon: drugstoreIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/drugstore-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">${
                  idioma === "es" ? "FARMACIA" : "DRUGSTORE"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  48: [
    L.marker([612, 302], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">VEARI PIEL</p>
                <p>${
                  idioma === "es" ? "Artículos de Piel " : "Leather goods"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  49: [
    L.marker([578, 295], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ABYSSAL</p>
                <p>${idioma === "es" ? "Tienda destino " : "Store"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  50: [
    L.marker([533, 273], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle" >VELASCO HABANOS</p>
                <p>${idioma === "es" ? "Tabaco" : "Tobacco"}</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  60: [
    L.marker([990, 1250], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/keloke-bar.svg" alt="Logo" style="width: 90px; height: 90px;">
            <p>${
              idioma === "es"
                ? "¡Empecemos la fiesta con un drink!"
                : "Let’s start this party with a drink"
            }</p>
            <a href="${idioma}/port-experience/keloke">
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  61: [
    L.marker([890, 860], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `   <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/coffee-factory.svg" alt="Logo" style="width: 80px; height: 80px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es"
                    ? "Visita y disfruta el auténtico café dominicano."
                    : "Make a stop, and fuel up with Dominican coffee!"
                }</p>
                <a href="${idioma}/port-experience/coffee-factory" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  62: [
    L.marker([920, 740], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/icekery.svg" alt="Logo" style="width: 70px; height: 70px;">
                <p>${
                  idioma === "es"
                    ? "Un delicioso postre te espera."
                    : "Have a delicious treat!"
                }</p>
                <a href="${idioma}/port-experience/icekery" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  63: [
    L.marker([908, 703], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/mojito-bar.svg" alt="Logo" style="width: 80px; height: 80px;" >
                <p>${
                  idioma === "es"
                    ? "Un mojito siempre es una buena idea."
                    : "A mojito is always a great idea!"
                }</p>
                <a href="${idioma}/port-experience/mojito-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([662, 472], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/mojito-bar.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "Un mojito siempre es una buena idea."
                    : "A mojito is always a great idea!"
                }</p>
                <a href="${idioma}/port-experience/mojito-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  64: [
    L.marker([965, 1008], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/cantina-latina.svg" alt="Logo" style="width: 80px; height: 80px; ">
                <p>${
                  idioma === "es"
                    ? "¡El mejor spot para el sabor caribeño!"
                    : "The top spot for Caribbean food! "
                }</p>
                <a href="${idioma}/port-experience/cantina-latina" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  65: [
    L.marker([775, 695], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/mexican-grill.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "Tacos y snacks, ¡no hay nada mejor!"
                    : "Tacos and grilled snacks, it doesn't get any better than that!"
                }</p>
                <a href="${idioma}/port-experience/mexican-grill" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  66: [
    L.marker([748, 465], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/blue-parrot.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¡Mariscos y good vibes!"
                    : "Fresh seafood and good vibes!"
                }</p>
                <a href="${idioma}/port-experience/blue-parrot" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  67: [
    L.marker([393, 250], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/taco-lover.svg" alt="Logo" style="width: 80px; height: 80px; margin: 5px 0 10px 0;">
                <p>${
                  idioma === "es" ? "¡Échale picante! " : "Let’s get spicy!"
                }</p>
                <a href="${idioma}/port-experience/taco-lover" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  68: [
    L.marker([938, 815], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/margarita-bar.svg" alt="Logo" style="width: 80px; height: 80px;"">
                <p>${
                  idioma === "es"
                    ? "Mango, fresa, limón y más, ¡elige tu favorito!"
                    : "Mango, strawberry, lime, and more, you choose!"
                }</p>
                <a href="${idioma}/port-experience/margarita-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  69: [
    L.marker([760, 638], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/dom-dom-bar.svg" alt="Logo" style="width: 90px; height: 90px; ">
                <p>${
                  idioma === "es"
                    ? "¿Drinks en la piscina? ¡Aquí es el lugar!"
                    : "Drinks by the pool? We got you!"
                }</p>
                <a href="${idioma}/port-experience/dom-dom-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  70: [
    L.marker([665, 565], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/port-experience/huracane-bar.svg" alt="Logo" style="width: 70px; height: 70px; margin: 5px 0 10px 0;">
            <p>${
              idioma === "es"
                ? "Un drink en la piscina te espera. "
                : "Need a drink for the pool? We got you!"
            }</p>
            <a href="${idioma}/port-experience/huracan-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  71: [
    L.marker([550, 300], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/boat-bar.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¿Listos? Navega y disfruta un drink. "
                    : "Ready, sail, drink!"
                }</p>
                <a href="${idioma}/port-experience/boat-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  72: [
    L.marker([380, 347], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/tiki-tiki.svg" alt="Logo" style="width: 80px; height: 80px;">
                <p>${
                  idioma === "es"
                    ? "¡Drinks frescos y diversión!"
                    : "Fresh drinks & fun!"
                }</p>
                <a href="${idioma}/port-experience/tiki-tiki" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  73: [
    L.marker([945, 590], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
                <img src="/assets/icons/map/port-experience/batting-legends-logo.svg" alt="Logo" style="width: 100px; height: 100px; ">
                <p>${
                  idioma === "es"
                    ? "¡Un homerun de sabor!"
                    : "A homerun of flavor!"
                }</p>
                <a href="${idioma}/port-experience/rum-rum-bar" >
                    <button 
                      style="padding: 5px 10px; background-color: #1c355e; color: white; border: none; border-radius: 5px; cursor: pointer;"
                      onmouseover="this.style.backgroundColor='#f5a23a';" 
                      onmouseout="this.style.backgroundColor='#1c355e';">
                      ${idioma === "es" ? "Ver más" : "View more"}
                    </button>
                </a>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  74: [
    L.marker([420, 240], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/retail-logo.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">CHOCOLATE WORLD</p>
                <p>Store</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  75: [
    L.marker([165, 270], { icon: salidaCaminoIcon }).addTo(map),
    //Marker del texto salida sin que sea afectado por los eventos de los otros markers
    L.marker(idioma === "es" ? [165, 190] : [165, 210], {
      icon: salidaIcon,
    }).addTo(map),
  ],
  76: [
    L.marker([165, 270], { icon: regresoCaminoIcon }).addTo(map),
    L.marker(idioma === "es" ? [193, 220] : [193, 220], {
      icon: regresoIcon,
    }).addTo(map),
  ],
  77: [
    L.marker(idioma === "es" ? [165, 220] : [165, 235], {
      icon: exitIcon,
    }).addTo(map),
  ],
  78: [
    L.marker([520, 510], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="/assets/icons/map/food.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SPLASH GRILL & CHILL</p>
                <p>${
                  idioma === "es"
                    ? "¡Relájate después de nadar!"
                    : "Relax after a day of swimming!"
                }</p>
            </div>
        `,
      )
      .on("click", function (e) {
        this.openPopup();
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
};

// Evento para ajustar el tamaño de los íconos en función del zoom
map.on("zoom", function () {
  var currentZoom = map.getZoom();

  // Define el tamaño base y la escala para ajustar el tamaño de los íconos
  var baseSize = 20; // Tamaño base de los íconos
  var scale = Math.pow(1.5, currentZoom); // Escala para aumentar o reducir el tamaño según el zoom

  // Actualiza el tamaño de los íconos según el nivel de zoom
  document.querySelectorAll(".custom-icon img").forEach((icon) => {
    var newSize = baseSize * scale;
    icon.style.width = newSize + "px";
    icon.style.height = newSize + "px";
  });
});

// #endregion

// #region Manejo de la visibilidad de los marcadores al hacer clic en el filtro
// Variable global para almacenar el último ID clickado y el estado de visibilidad de los marcadores
var lastClickedId = null;
var markersVisible = true;

// Evento para manejar el click en las filas de la tabla
$(document).on("click", ".tabla-icons tr", function () {
  var markerId = $(this).data("marker-id");
  var selectedMarkers = markers[markerId]; // Obtener los marcadores de la fila
  var filterContainer = $(this).closest(".leaflet-control-filter"); // Contenedor de la tabla y checkbox
  var tableCheckbox = filterContainer.find(
    ".filter-header .switch input[type='checkbox']",
  );
  var rows = filterContainer.find("tr"); // Todas las filas de la tabla

  if (!selectedMarkers) return; // Evitar errores si no hay marcadores asociados

  // Ocultar todos los polylines al inicio de la interacción
  map.removeLayer(camino);
  map.removeLayer(camino2);
  map.removeLayer(camino3);
  map.removeLayer(camino4);
  map.removeLayer(bordeCamino);
  map.removeLayer(bordeCamino2);
  map.removeLayer(bordeCamino3);
  map.removeLayer(bordeCamino4);

  if (lastClickedId === markerId) {
    var tableMarkers = [];

    filterContainer.find(".tabla-icons tr").each(function () {
      var rowMarkerId = $(this).data("marker-id");
      if (markers[rowMarkerId] && rowMarkerId !== 75 && rowMarkerId !== 76) {
        tableMarkers = tableMarkers.concat(markers[rowMarkerId]);
      }
    });

    $.each(markers, function (id, markerGroup) {
      markerGroup.forEach(function (marker) {
        map.removeLayer(marker);
      });
    });

    tableMarkers.forEach(function (marker) {
      map.addLayer(marker);
    });

    // Activar solo el checkbox de la tabla actual
    $(".filter-header .switch input[type='checkbox']").prop("checked", false);
    tableCheckbox.prop("checked", true).trigger("change");

    $(this).removeClass("selected");
    lastClickedId = null;
    return;
  }

  $.each(markers, function (id, markerGroup) {
    markerGroup.forEach(function (marker) {
      map.removeLayer(marker);
    });
  });

  selectedMarkers.forEach(function (marker) {
    map.addLayer(marker);
  });

  if (markerId === 75) {
    map.addLayer(bordeCamino);
    map.addLayer(bordeCamino2);
    map.addLayer(camino);
    map.addLayer(camino2);
    map.addLayer(markers[75][0]); // Agregar salidaCaminoIcon
    map.addLayer(markers[75][1]); // Agregar salidaIcon
  } else if (markerId === 76) {
    map.addLayer(bordeCamino3);
    map.addLayer(bordeCamino4);
    map.addLayer(camino3);
    map.addLayer(camino4);
    map.addLayer(markers[76][0]); // Agregar regresoCaminoIcon
    map.addLayer(markers[76][1]); // Agregar regresoIcon
  }

  $(".filter-header .switch input[type='checkbox']").prop("checked", false);
  rows.removeClass("selected");
  $(this).addClass("selected");
  lastClickedId = markerId;
});

// Evento para manejar la activación/desactivación del checkbox
$(document).on(
  "change",
  ".filter-header .switch input[type='checkbox']",
  function () {
    var isChecked = $(this).prop("checked");
    var filterContainer = $(this).closest(".leaflet-control-filter");
    var tableMarkers = [];

    filterContainer.find(".tabla-icons tr").each(function () {
      var rowMarkerId = $(this).data("marker-id");
      if (markers[rowMarkerId] && rowMarkerId !== 75 && rowMarkerId !== 76) {
        tableMarkers = tableMarkers.concat(markers[rowMarkerId]);
      }
    });

    if (isChecked) {
      tableMarkers.forEach(function (marker) {
        map.addLayer(marker);
      });
    } else {
      tableMarkers.forEach(function (marker) {
        map.removeLayer(marker);
      });
    }

    // Asegurar que los polylines y markers 75 y 76 nunca se muestren con el checkbox
    map.removeLayer(camino);
    map.removeLayer(camino2);
    map.removeLayer(camino3);
    map.removeLayer(camino4);
    map.removeLayer(bordeCamino);
    map.removeLayer(bordeCamino2);
    map.removeLayer(bordeCamino3);
    map.removeLayer(bordeCamino4);
    markers[75]?.forEach((marker) => map.removeLayer(marker));
    markers[76]?.forEach((marker) => map.removeLayer(marker));
  },
);

// funcionalidad para modificar las columnas de las tablas de filtrado dependiendo de la cantidad de elementos
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las tablas con la clase 'tabla-icons'
  var tablas = document.querySelectorAll(".tabla-icons");

  if (!isMobile) {
    tablas.forEach(function (tabla) {
      // Cuenta el número de filas en el tbody de la tabla
      var filas = tabla.querySelectorAll("tbody tr").length;

      // Aplica el estilo CSS si hay más de 5 filas
      if (filas > 6 && filas <= 22) {
        tabla.querySelector("tbody").style.display = "grid";
        tabla.querySelector("tbody").style.gridTemplateColumns =
          "repeat(2, 1fr)";
      } else if (filas > 22) {
        tabla.querySelector("tbody").style.display = "grid";
        tabla.querySelector("tbody").style.gridTemplateColumns =
          "repeat(3, 1fr)";
      } else {
        // Asegúrate de que se use el estilo original si hay 6 o menos filas
        tabla.querySelector("tbody").style.display = "table-row-group";
        tabla.querySelector("tbody").style.gridTemplateColumns = "";
      }
    });
  }
});
//se agrega JS para mantener un Focus en el elemento clickeado de la tabla
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".leaflet-control-filter tr");

  rows.forEach((row) => {
    row.addEventListener("click", function () {
      // Remueve la clase "selected" de todas las filas
      rows.forEach((r) => r.classList.remove("selected"));
      // Agrega la clase "selected" a la fila actual
      this.classList.add("selected");
    });
  });
});
if (!isMobile) {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll(".leaflet-control-filter")
      .forEach(function (filter) {
        let switchInput = filter.querySelector(".switch input");
        let minimizeButton = filter.querySelector(".minimize-btn");

        if (switchInput && minimizeButton) {
          switchInput.addEventListener("change", function () {
            if (switchInput.checked) {
              minimizeButton.click();
            }
          });
        }
      });
  });
}
// #endregion
