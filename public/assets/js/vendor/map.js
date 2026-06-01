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
L.imageOverlay(
  (window.BASE_URL || "/") + "assets/images/media/mapa-roatan.webp",
  bounds,
).addTo(map);
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
    $minimizeBtn.html(
      '<img src="' +
        (window.BASE_URL || "/") +
        'assets/icons/map/x.svg" alt="close">',
    ); // Cambia el contenido del botón
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="retail" width="20" height="20">
        </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});

var restroomsIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/restrooms.svg" alt="restrooms" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var barIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/bar.svg" alt="bar" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var foodbarIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/foodbar.svg" alt="bar" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var foodIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/food.svg" alt="food" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var drugstoreIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/drugstore.svg" alt="drugstore" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var experienceIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/experience.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var showIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/show.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var fruitIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/coco.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var camaraIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var starIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/star.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var taxiIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/taxi.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var shorexIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/shorex.svg" alt="experience" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var poolIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/pool-marker.svg" alt="pool" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var beachIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/beach-marker.svg" alt="beach" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var rumquestIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/rum-quest-marker.svg" alt="rum-quest" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var riverIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/lazy-river-marker.svg" alt="lazy-river" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var splashIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/splash-marker.svg" alt="splash-surfing" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var BeachPlayIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/beach-play.svg" alt="beach-playground" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var YongolIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/yongol.svg" alt="yongol" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var AviarioIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/aviario.svg" alt="aviarius" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var spaIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/spa-marker.svg" alt="spa wellness" width="20" height="20">
           </div>`,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});
var monkeyIcon = L.divIcon({
  html: `
  <div class="custom-icon" 
     
     
     >
               <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/monkey-marker.svg" alt="monkey-island" width="20" height="20">
           </div>
           `,
  className: "shadowMarker",
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [12, -20],
});

var salidaCaminoIcon = L.divIcon({
  html: `<div class="custom-icon" 
     
     
     >
               <img class="salidaCaminoIcon" src="${window.BASE_URL || "/"}assets/icons/map/arrowRed.svg" alt="PORT EXIT" width="30" height="30">
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
               <img class="regresoCaminoIcon" src="${window.BASE_URL || "/"}assets/icons/map/arrowGreen.svg" alt="PORT EXIT" width="30" height="30">
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

var caminoCoordenadas = [
  [430, 710],
  [400, 770],
  [390, 810],
  [410, 830],
  [500, 845],
  [530, 845],
  [550, 860],
  [580, 885],
  [610, 895],
  [630, 940],
  [630, 980],
  [630, 1010],
  [640, 1040],
  [660, 1060],
  [680, 1080],
  [685, 1090],
  [680, 1100],
  [650, 1130],
  [610, 1180],
  [600, 1200],
  [595, 1230],
  [600, 1260],
];
var caminoCoordenadas2 = [
  [140, 1135], // Extremo del muelle inferior
  [190, 1135],
  [240, 1135],
  [270, 1135], // Entrada del muelle inferior
  [310, 1135],
  [350, 1135],
  [400, 1120],
  [480, 1090],
  [560, 1050],
  [590, 1010],
  [610, 1010],
  [630, 1030],
];
var caminoCoordenadas3 = [
  [430, 710],
  [380, 800],
  [380, 880],
  [380, 920],
  [380, 960],
  [385, 1000],
  [385, 1040],
  [370, 1080],
  [350, 1110],
  [310, 1120],
  [270, 1130], // Bifurcación al muelle inferior
  // Camino hacia el muelle inferior
  [240, 1135],
  [190, 1135],
  [140, 1135],
];
var caminoCoordenadas4 = [
  [240, 1135], // Bifurcación al muelle inferior
  // Camino hacia la derecha (Coffee Factory y tiendas derechas)
  [240, 1150],
  [240, 1160],
  [240, 1180],
  [220, 1200],
  [220, 1250],
  [230, 1300],
  [240, 1340],
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
    L.marker([420, 660], { icon: regresoCaminoIcon }).addTo(map),
    L.marker([450, 580], { icon: regresoIcon }).addTo(map),
    L.marker([140, 1115], { icon: regresoCaminoIcon }).addTo(map),
    L.marker([170, 1035], { icon: regresoIcon }).addTo(map),
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
    L.marker([600, 1260], { icon: salidaCaminoIcon }).addTo(map),
    L.marker([560, 1240], { icon: salidaIcon }).addTo(map),
  ],
  5: [
    L.marker([480, 950], { icon: showIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/show.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/show.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
    L.marker([770, 805], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
    L.marker([530, 1090], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
    L.marker([225, 1160], { icon: camaraIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/camara.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/star.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/taxi.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/shorex.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
    L.marker([600, 950], { icon: foodbarIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/monkey-bar.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 140px; height: 140px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Un bar muy especial!"
                    : "This bar is bananas!"
                }
              </p>

              <a href="../../${idioma}/port-experience/monkey-bar">
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
  22: [
    L.marker([250, 1160], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/coffee-factory.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 100px; height: 100px; margin-bottom: 1rem;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡La mejor forma para empezar tu día en el puerto!"
                    : "Best way to start your day at the port!"
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
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/icekery.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 80px; height: 80px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Un rico helado es todo lo que necesitas!"
                    : "A scoop a day keeps the doctor away!"
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
    L.marker([585, 1120], { icon: foodbarIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/cantina-latina.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Disfruta del sabor latino hecho en casa!"
                    : "Enjoy the homemade latin taste!"
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
    L.marker([790, 410], { icon: foodbarIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/blue-parrot.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Mariscos del Caribe para el alma"
                    : "Caribbean Seafood for the soul"
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
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/taco-lover.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px; margin-bottom: 1rem;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Los mejores tacos de Roatán!"
                    : "The best tacos in Roatan!"
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
    L.marker([370, 745], { icon: foodbarIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/boat-bar.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 100px; height: 100px; margin-bottom: 1rem;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Necesitas unos drinks para llevar al mar! Encuéntralos aquí"
                    : "You’ll need some good drinks for the sea, find them here!"
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
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/tiki-tiki.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Ponte en el mood con unos drinks y diversión!"
                    : "Get in the mood with drinks and fun!"
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
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/sport-cove.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 100px; height: 100px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¡Un MUST para disfrutar tus deportes favoritos!"
                    : "A MUST for cold drinks and your favorite sports!"
                }
              </p>
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
    L.marker([440, 1195], { icon: foodbarIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/catrachita.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 120px; height: 120px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "Auténticas delicias hondureñas"
                    : "Authentic Honduran delicacies"
                }
              </p>

              <a href="../../${idioma}/port-experience/la-catrachita">
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
  31: [
    L.marker([460, 790], { icon: barIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop">
              <img 
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/fruteria.svg" 
                alt="Logo" 
                class="popup-logo"
                style="width: 140px; height: 140px;"
              >

              <p>
                ${
                  idioma === "es"
                    ? "¿Calor? Refréscate con nuestros drinks de frutas"
                    : "Fresh fruit drinks to beat the heat!"
                }
              </p>

              <a href="../../${idioma}/port-experience/la-fruteria">
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
  41: [
    L.marker([450, 920], { icon: poolIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/port-experience/pool-marker.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">OFFICIAL STORE</p>
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
    L.marker([470, 1230], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
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
                src="${window.BASE_URL || "/"}assets/icons/map/port-experience/spa-wellness.svg" 
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DUFRY</p>
                <p>
                ${idioma === "es" ? "Retail" : "Retail"}
              </p>
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
    L.marker([350, 1205], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER SUN</p>
                <p>
                ${idioma === "es" ? "Joyería" : "Jewelry store"}
              </p>
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
    L.marker([390, 1205], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER EMPORIO</p>
                <p>
                ${idioma === "es" ? "Platería" : "Silver store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER EMPORIO</p>
                <p>
                ${idioma === "es" ? "Platería" : "Silver store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">HONDURAS WOODEN CRAFT</p>
                <p>
                ${idioma === "es" ? "Tienda de artesanías" : "Handicrafts store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SEA GODDESS</p>
                <p>
                ${idioma === "es" ? "Joyería" : "Jewelry store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">PIRAÑA JOE</p>
                <p>
                ${idioma === "es" ? "Tienda de ropa" : "Clothing store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DEL SOL</p>
                <p>
                ${idioma === "es" ? "Tienda de ropa" : "Clothing store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">CASA TEQUILA</p>
                <p>
                ${idioma === "es" ? "Tequilería" : "Tequila store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">SILVER BY THE SEA</p>
                <p>
                ${idioma === "es" ? "Platería" : "Silver store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">AV CACAO</p>
                <p>
                ${idioma === "es" ? "Chocolatería" : "Chocolate store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">OCEAN DRIVE</p>
                <p>
                ${idioma === "es" ? "Gift shop & souvenirs" : "Gift shop & souvenirs"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">THE ROATAN STORE</p>
                <p>
                ${idioma === "es" ? "Gift shop & souvenirs" : "Gift shop & souvenirs"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">VEARI</p>
                <p>
                ${idioma === "es" ? "Souvenirs de piel" : "Leather souvenirs"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">TURTLE BAY</p>
                <p>
                ${idioma === "es" ? "Gift shop & souvenirs" : "Gift shop & souvenirs"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">DIAMONDS INTERNATIONAL</p>
                <p>
                ${idioma === "es" ? "Joyería" : "Jewelry store"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ESTHETIX</p>
                <p>
                ${idioma === "es" ? "Belleza y cosmetología" : "Beauty & cosmetology"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ESTHETIX</p>
                <p>
                ${idioma === "es" ? "Belleza y cosmetología" : "Beauty & cosmetology"}
              </p>
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
    L.marker([525, 1125], { icon: retailIcon })
      .addTo(map)
      .bindPopup(
        `
            <div class="pop" style="text-align: center;">
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ESTHETIX</p>
                <p>
                ${idioma === "es" ? "Belleza y cosmetología" : "Beauty & cosmetology"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">MUSEO DEL TABACO</p>
                <p>
                ${idioma === "es" ? "Tabaquería" : "Tobacco shop"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">ROATAN TREASURES</p>
                <p>
                ${idioma === "es" ? "Souvenirs locales" : "Local souvenirs"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/drugstore.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">FARMACIAS DEL MUNDO</p>
                <p>
                ${idioma === "es" ? "Farmacia" : "Drugstore"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/drugstore.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">FARMACIAS DEL MUNDO</p>
                <p>
                ${idioma === "es" ? "Farmacia" : "Drugstore"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">CARILOHA</p>
                <p>
                ${idioma === "es" ? "Boutique" : "Boutique"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">BANCO FIHCOHSA (ATM)</p>
                <p>
                ${idioma === "es" ? "ATM" : "ATM"}
              </p>
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
            <img src="${window.BASE_URL || "/"}assets/icons/map/retail.svg" alt="Logo" style="width: 50px; height: 50px; margin: 5px 0 10px 0;">
                <p class="popupTitle">EL TUCAN GIFT SHOP</p>
                <p>
                ${idioma === "es" ? "Gift shop & souvenirs" : "Gift shop & souvenirs"}
              </p>
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
