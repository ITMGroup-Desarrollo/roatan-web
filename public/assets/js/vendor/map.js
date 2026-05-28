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
    position: "bottomright", // Cambia 'topright' a la posición deseada ('topleft', 'bottomleft', 'bottomright')
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
L.imageOverlay((window.BASE_URL || "/") + "assets/images/media/mapa-roatan.webp", bounds).addTo(map);
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
    $minimizeBtn.html('<img src="' + (window.BASE_URL || '/') + 'assets/icons/map/x.svg" alt="close">'); // Cambia el contenido del botón
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

var retailIcon = L.divIcon({
  html: `<div class="custom-icon">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="retail" width="20" height="20">
        </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});

var restroomsIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/restrooms.svg" alt="restrooms" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var barIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/bar.svg" alt="bar" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var foodIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/food.svg" alt="food" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var drugstoreIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/drugstore.svg" alt="drugstore" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var experienceIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/experience.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var showIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/show.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var fruitIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/coco.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var camaraIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/camara.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var starIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/star.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var taxiIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/taxi.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var shorexIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/shorex.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var poolIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/pool-marker.svg" alt="pool" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var beachIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/beach-marker.svg" alt="beach" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var rumquestIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/rum-quest-marker.svg" alt="rum-quest" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var riverIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/lazy-river-marker.svg" alt="lazy-river" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var splashIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/splash-marker.svg" alt="splash-surfing" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var BeachPlayIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/beach-play.svg" alt="beach-playground" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var YongolIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/yongol.svg" alt="yongol" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var AviarioIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/aviario.svg" alt="aviarius" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var spaIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/spa-marker.svg" alt="spa wellness" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var monkeyIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/monkey-marker.svg" alt="monkey-island" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});

var salidaCaminoIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img class="salidaCaminoIcon" src="${window.BASE_URL || '/'}assets/icons/map/arrowRed.svg" alt="PORT EXIT" width="30" height="30">
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
  html: `<div class="custom-icon" 
     
     
     >
               <img class="regresoCaminoIcon" src="${window.BASE_URL || '/'}assets/icons/map/arrowGreen.svg" alt="PORT EXIT" width="30" height="30">
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
    L.marker([400, 750], { icon: regresoCaminoIcon }).addTo(map),
    L.marker([450, 650], { icon: regresoIcon }).addTo(map),
  ],
  3: [
    L.marker([850, 510], { icon: restroomsIcon })
      .addTo(map)
      .on("click", function (e) {
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([770, 755], { icon: restroomsIcon })
      .addTo(map)
      .on("click", function (e) {
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
    L.marker([680, 1030], { icon: restroomsIcon })
      .addTo(map)
      .on("click", function (e) {
        map.setView(this.getLatLng(), map.getZoom(), {
          animate: true,
          pan: { duration: 1 },
        });
      }),
  ],
  4: [
    L.marker([410, 730], { icon: salidaCaminoIcon }).addTo(map),
    L.marker([450, 710], { icon: salidaIcon }).addTo(map),
  ],
  5: [
    L.marker([480, 950], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/show.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SHOWS</p>
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
    L.marker([840, 415], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/show.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SHOWS</p>
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
    L.marker([805, 495], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PHOTO SPOT</p>
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
    L.marker([695, 490], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PHOTO SPOT</p>
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
    L.marker([285, 1085], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PHOTO SPOT</p>
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
    L.marker([585, 1220], { icon: starIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/star.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">LAST MINUTE</p>
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
    L.marker([640, 1220], { icon: taxiIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/taxi.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SHUTTLE</p>
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
    L.marker([300, 1330], { icon: shorexIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/shorex.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PRE-BOOKED SHOREX</p>
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
    L.marker([600, 950], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/food.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MONKEY BAR</p>
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
    L.marker([250, 1160], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/coffee-factory.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 100px; height: 100px; margin-bottom: 1rem;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Deliciosa experiencia de café."
                    : "Delicious coffee experience."
                }
              </p>

              <a href="../../${idioma}/port-experience/coffee-factory">
                  <button class="popup-btn">
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
  23: [
    L.marker([800, 800], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/icekery.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 80px; height: 80px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Deliciosos helados."
                    : "Delicious ice cream."
                }
              </p>

              <a href="../../${idioma}/port-experience/icekery">
                  <button class="popup-btn">
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
  24: [
    L.marker([550, 1140], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/cantina-latina.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Bar en el agua con gran ambiente."
                    : "Floating bar with great vibes."
                }
              </p>

              <a href="../../${idioma}/port-experience/cantina-latina">
                  <button class="popup-btn">
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
  25: [
    L.marker([790, 410], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/blue-parrot.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Mariscos y good vibes!"
                    : "Fresh seafood and good vibes!"
                }
              </p>

              <a href="../../${idioma}/port-experience/blue-parrot">
                  <button class="popup-btn">
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
  26: [
    L.marker([700, 840], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/taco-lover.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px; margin-bottom: 1rem;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Los mejores tacos de la isla."
                    : "The best tacos on the island."
                }
              </p>

              <a href="../../${idioma}/port-experience/taco-lover">
                  <button class="popup-btn">
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
  27: [
    L.marker([370, 745], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/boat-bar.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 100px; height: 100px; margin-bottom: 1rem;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Bar en el agua con gran ambiente."
                    : "Floating bar with great vibes."
                }
              </p>

              <a href="../../${idioma}/port-experience/boat-bar">
                  <button class="popup-btn">
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
  28: [
    L.marker([490, 1000], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/tiki-tiki.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "El mejor lugar para relajarse con una bebida."
                    : "The best place to relax with a drink."
                }
              </p>

              <a href="../../${idioma}/port-experience/tiki-bar">
                  <button class="popup-btn">
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
  29: [
    L.marker([430, 1170], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/bar.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">THE SPORT COVE BAR</p>
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
    L.marker([440, 1195], { icon: foodIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/food.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">LA CATRACHITA</p>
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
    L.marker([460, 790], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/bar.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">LA FRUTERIA</p>
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
    L.marker([450, 920], { icon: poolIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/port-experience/pool-marker.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">POOL</p>
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
    L.marker([510, 1190], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">OFICIAL STORE</p>
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
    L.marker([480, 1185], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MARKET STREET</p>
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
    L.marker([680, 620], { icon: spaIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || '/'}assets/icons/map/port-experience/spa-wellness.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Disfruta de un momento de relajación y déjate consentir."
                    : "Enjoy a moment of relaxation and let yourself be pampered."
                }
              </p>

              <a href="../../${idioma}/port-experience/spa-wellness">
                  <button class="popup-btn">
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
    L.marker([300, 1210], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DUFRY</p>
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
    L.marker([350, 1225], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER SUN</p>
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
    L.marker([350, 1195], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER EMPORIO</p>
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
    L.marker([730, 635], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER EMPORIO</p>
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
    L.marker([507, 1143], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">HONDURAS WOODEN CRAFT</p>
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
    L.marker([525, 1125], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">VIVA SOL</p>
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
    L.marker([565, 1090], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SEA GODDESS</p>
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
    L.marker([585, 1070], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PIRAÑA JOE</p>
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
    L.marker([605, 1055], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DEL SOL</p>
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
    L.marker([695, 935], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">CASA TEQUILA</p>
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
    L.marker([705, 915], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER BY THE SEA</p>
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
    L.marker([710, 890], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">AV CACAO</p>
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
    L.marker([760, 840], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">OCEAN DRIVE</p>
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
    L.marker([730, 700], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">THE ROATAN STORE</p>
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
    L.marker([740, 610], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">VEARI</p>
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
    L.marker([780, 540], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">TURTLE BAY</p>
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
  76: [
    L.marker([328, 1008], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DIAMONDS INTERNATIONAL</p>
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
  77: [
    L.marker([750, 580], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ESTHETIX</p>
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
    L.marker([328, 925], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ESTHETIX</p>
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
  78: [
    L.marker([328, 895], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MUSEO DEL TABACO</p>
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
  79: [
    L.marker([328, 845], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ROATAN TREASURES</p>
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
  80: [
    L.marker([420, 1195], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ARCADE ITM</p>
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
  81: [
    L.marker([545, 1110], { icon: drugstoreIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/drugstore.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">FARMACIAS DEL MUNDO</p>
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
    L.marker([727, 660], { icon: drugstoreIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/drugstore.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">FARMACIAS DEL MUNDO</p>
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
  82: [
    L.marker([625, 1040], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">CARILOHA</p>
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
  83: [
    L.marker([650, 1020], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">BANCO FIHCOHSA (ATM)</p>
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
  84: [
    L.marker([670, 990], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || '/'}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">EL TUCAN GIFT SHOP</p>
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

// Evento para aplicar animación de palomita de maíz al agregar marcadores
map.on("layeradd", function (e) {
  var layer = e.layer;
  if (layer instanceof L.Marker) {
    // Esperar un tick para asegurar que el DOM esté listo
    setTimeout(function () {
      var element = layer.getElement();
      if (element) {
        var target =
          element.querySelector(".custom-icon") || element.firstElementChild;
        if (target) {
          target.classList.remove("popcorn-animation");
          // Forzar reflujo para reiniciar la animación
          void target.offsetWidth;
          target.classList.add("popcorn-animation");
          setTimeout(function () {
            target.classList.remove("popcorn-animation");
          }, 500);
        }
      }
    }, 0);
  }
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
      if (markers[rowMarkerId] && rowMarkerId !== 4 && rowMarkerId !== 2) {
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

  if (markerId === 4) {
    map.addLayer(bordeCamino);
    map.addLayer(bordeCamino2);
    map.addLayer(camino);
    map.addLayer(camino2);
    map.addLayer(markers[4][0]); // Agregar salidaCaminoIcon
    map.addLayer(markers[4][1]); // Agregar salidaIcon
  } else if (markerId === 2) {
    map.addLayer(bordeCamino3);
    map.addLayer(bordeCamino4);
    map.addLayer(camino3);
    map.addLayer(camino4);
    map.addLayer(markers[2][0]); // Agregar regresoCaminoIcon
    map.addLayer(markers[2][1]); // Agregar regresoIcon
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

    // Limpiar timeouts pendientes en este contenedor de filtros
    var pendingTimeouts = filterContainer.data("pendingTimeouts") || [];
    pendingTimeouts.forEach(clearTimeout);
    pendingTimeouts = [];
    filterContainer.data("pendingTimeouts", pendingTimeouts);

    filterContainer.find(".tabla-icons tr").each(function () {
      var rowMarkerId = $(this).data("marker-id");
      if (markers[rowMarkerId] && rowMarkerId !== 4 && rowMarkerId !== 2) {
        tableMarkers = tableMarkers.concat(markers[rowMarkerId]);
      }
    });

    if (isChecked) {
      tableMarkers.forEach(function (marker) {
        // Retrasar cada marcador aleatoriamente para simular el efecto palomitas de maíz
        var delay = Math.random() * 600;
        var tId = setTimeout(function () {
          map.addLayer(marker);
        }, delay);
        pendingTimeouts.push(tId);
      });
      filterContainer.data("pendingTimeouts", pendingTimeouts);
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
    markers[4]?.forEach((marker) => map.removeLayer(marker));
    markers[2]?.forEach((marker) => map.removeLayer(marker));
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

      // Aplica el estilo CSS si hay más de 3 filas
      if (filas > 3 && filas <= 22) {
        tabla.querySelector("tbody").style.display = "grid";
        tabla.querySelector("tbody").style.gridTemplateColumns =
          "repeat(2, 1fr)";
      } else if (filas > 22) {
        tabla.querySelector("tbody").style.display = "grid";
        tabla.querySelector("tbody").style.gridTemplateColumns =
          "repeat(3, 1fr)";
      } else {
        // Asegúrate de que se use el estilo original si hay 3 o menos filas
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
            if (switchInput.checked && !window.isInitialMapLoad) {
              minimizeButton.click();
            }
          });
        }
      });
  });
}

// Remove all markers and paths from map initially so they start off
$.each(markers, function (id, markerGroup) {
  if (markerGroup) {
    markerGroup.forEach(function (marker) {
      if (marker) map.removeLayer(marker);
    });
  }
});
if (typeof camino !== "undefined") map.removeLayer(camino);
if (typeof camino2 !== "undefined") map.removeLayer(camino2);
if (typeof camino3 !== "undefined") map.removeLayer(camino3);
if (typeof camino4 !== "undefined") map.removeLayer(camino4);
if (typeof bordeCamino !== "undefined") map.removeLayer(bordeCamino);
if (typeof bordeCamino2 !== "undefined") map.removeLayer(bordeCamino2);
if (typeof bordeCamino3 !== "undefined") map.removeLayer(bordeCamino3);
if (typeof bordeCamino4 !== "undefined") map.removeLayer(bordeCamino4);
// #endregion
