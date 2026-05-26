import React, { useEffect } from "react";

export default function MapInteractive({ lang }) {
  useEffect(() => {
    console.log("Map component mounted");
  }, []);

  const isEs = lang === "es";

  return (
    <section className="shock-section map-section">
      <div
        className="filter-container"
        data-aos="zoom-out-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        {/* Service */}
        <div className="leaflet-control-filter service">
          <div className="filter-header">
            <span className="header-text">
              {isEs ? "SERVICIOS" : "SERVICES"}
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <button className="minimize-btn show" aria-label="Cerrar filtro">
              <img src="/assets/icons/map/x.svg" alt="close" />
            </button>
          </div>
          <div className="filter-content">
            <table className="tabla-icons">
              <tbody>
                <tr data-marker-id="1" style={{ display: "none" }}>
                  <td>
                    <img src="/assets/icons/map/arrowGreen.svg" alt="SHOWS" />
                  </td>
                  <td>{isEs ? "REGRESO CRUCERO" : "BACK TO SHIP"}</td>
                </tr>
                <tr data-marker-id="2">
                  <td>
                    <img src="/assets/icons/map/arrowGreen.svg" alt="SHOWS" />
                  </td>
                  <td>{isEs ? "REGRESO CRUCERO" : "BACK TO SHIP"}</td>
                </tr>
                <tr data-marker-id="3">
                  <td>
                    <img
                      src="/assets/icons/map/restrooms.svg"
                      alt="RESTROOMS"
                    />
                  </td>
                  <td>{isEs ? "BAÑOS" : "RESTROOMS"}</td>
                </tr>
                <tr data-marker-id="4">
                  <td>
                    <img src="/assets/icons/map/arrowRed.svg" alt="SHOWS" />
                  </td>
                  <td>{isEs ? "SALIDA PUERTO" : "PORT EXIT"}</td>
                </tr>
                <tr data-marker-id="5">
                  <td>
                    <img src="/assets/icons/map/show.svg" alt="SHOWS" />
                  </td>
                  <td>SHOWS</td>
                </tr>
                <tr data-marker-id="6">
                  <td>
                    <img src="/assets/icons/map/camara.svg" alt="PHOTO-SPOT" />
                  </td>
                  <td>PHOTO SPOT</td>
                </tr>
                <tr data-marker-id="7">
                  <td>
                    <img src="/assets/icons/map/star.svg" alt="LAST-MINUTE" />
                  </td>
                  <td>LAST MINUTE</td>
                </tr>
                <tr data-marker-id="8">
                  <td>
                    <img src="/assets/icons/map/taxi.svg" alt="SHUTTLE" />
                  </td>
                  <td>SHUTTLE</td>
                </tr>
                <tr data-marker-id="9">
                  <td>
                    <img src="/assets/icons/map/shorex.svg" alt="SHOREX" />
                  </td>
                  <td>PRE-BOOKED SHOREX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* restaurants */}
        <div className="leaflet-control-filter restaurants">
          <div className="filter-header">
            <span className="header-text">
              {isEs ? "ALIMENTOS Y BEBIDAS" : "FOOD & BEVERAGE"}
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <button className="minimize-btn show" aria-label="Cerrar filtro">
              <img src="/assets/icons/map/x.svg" alt="close" />
            </button>
          </div>
          <div className="filter-content">
            <table className="tabla-icons">
              <tbody>
                <tr data-marker-id="21">
                  <td>
                    <img src="/assets/icons/map/food.svg" alt="MONKEY BAR" />
                  </td>
                  <td>MONKEY BAR</td>
                </tr>
                <tr data-marker-id="22">
                  <td>
                    <img
                      src="/assets/icons/map/bar.svg"
                      alt="THE COFFEE FACTORY"
                    />
                  </td>
                  <td>THE COFFEE FACTORY</td>
                </tr>
                <tr data-marker-id="23">
                  <td>
                    <img src="/assets/icons/map/food.svg" alt="ICEKERY" />
                  </td>
                  <td>ICEKERY</td>
                </tr>
                <tr data-marker-id="24">
                  <td>
                    <img
                      src="/assets/icons/map/food.svg"
                      alt="CANTINA LATINA"
                    />
                  </td>
                  <td>CANTINA LATINA</td>
                </tr>
                <tr data-marker-id="25">
                  <td>
                    <img src="/assets/icons/map/food.svg" alt="BLUE PARROT" />
                  </td>
                  <td>BLUE PARROT</td>
                </tr>
                <tr data-marker-id="26">
                  <td>
                    <img src="/assets/icons/map/food.svg" alt="TACO LOVER" />
                  </td>
                  <td>TACO LOVER</td>
                </tr>
                <tr data-marker-id="27">
                  <td>
                    <img src="/assets/icons/map/bar.svg" alt="THE BOAT BAR" />
                  </td>
                  <td>THE BOAT BAR</td>
                </tr>
                <tr data-marker-id="28">
                  <td>
                    <img src="/assets/icons/map/bar.svg" alt="TIKI TIKI BAR" />
                  </td>
                  <td>TIKI TIKI BAR</td>
                </tr>
                <tr data-marker-id="29">
                  <td>
                    <img
                      src="/assets/icons/map/bar.svg"
                      alt="THE SPORT COVE BAR"
                    />
                  </td>
                  <td>THE SPORT COVE BAR</td>
                </tr>
                <tr data-marker-id="30">
                  <td>
                    <img src="/assets/icons/map/food.svg" alt="LA CATRACHITA" />
                  </td>
                  <td>LA CATRACHITA</td>
                </tr>
                <tr data-marker-id="31">
                  <td>
                    <img src="/assets/icons/map/bar.svg" alt="LA FRUTERIA" />
                  </td>
                  <td>LA FRUTERIA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* fun */}
        <div className="leaflet-control-filter fun">
          <div className="filter-header">
            <span className="header-text">PORT EXPERIENCE</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <button className="minimize-btn show" aria-label="Cerrar filtro">
              <img src="/assets/icons/map/x.svg" alt="close" />
            </button>
          </div>
          <div className="filter-content">
            <table className="tabla-icons">
              <tbody>
                <tr data-marker-id="41">
                  <td>
                    <img
                      src="/assets/icons/map/port-experience/pool-marker.svg"
                      alt="POOL"
                    />
                  </td>
                  <td>{isEs ? "PISCINA" : "POOL"}</td>
                </tr>
                <tr data-marker-id="42">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="OFICIAL STORE"
                    />
                  </td>
                  <td>OFICIAL STORE</td>
                </tr>
                <tr data-marker-id="43">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="MARKET STREET"
                    />
                  </td>
                  <td>MARKET STREET</td>
                </tr>
                <tr data-marker-id="44">
                  <td>
                    <img
                      src="/assets/icons/map/port-experience/spa-marker.svg"
                      alt="SPA WELLNESS RETREAT"
                    />
                  </td>
                  <td>SPA WELLNESS RETREAT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* shop */}
        <div className="leaflet-control-filter shop">
          <div className="filter-header">
            <span className="header-text">SHOPPING EXPERIENCE</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <button className="minimize-btn show" aria-label="Cerrar filtro">
              <img src="/assets/icons/map/x.svg" alt="close" />
            </button>
          </div>
          <div className="filter-content">
            <table className="tabla-icons">
              <tbody>
                <tr data-marker-id="61">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="DUFRY" />
                  </td>
                  <td>DUFRY</td>
                </tr>
                <tr data-marker-id="62">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="SILVER SUN" />
                  </td>
                  <td>SILVER SUN</td>
                </tr>
                <tr data-marker-id="63">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="SILVER EMPORIO"
                    />
                  </td>
                  <td>SILVER EMPORIO</td>
                </tr>
                <tr data-marker-id="64">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="HONDURAS WOODEN CRAFT"
                    />
                  </td>
                  <td>HONDURAS WOODEN CRAFT</td>
                </tr>
                <tr data-marker-id="65">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="VIVA SOL" />
                  </td>
                  <td>VIVA SOL</td>
                </tr>
                <tr data-marker-id="66">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="SEA GODDESS" />
                  </td>
                  <td>SEA GODDESS</td>
                </tr>
                <tr data-marker-id="67">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="PIRAÑA JOE" />
                  </td>
                  <td>PIRAÑA JOE</td>
                </tr>
                <tr data-marker-id="68">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="DEL SOL" />
                  </td>
                  <td>DEL SOL</td>
                </tr>
                <tr data-marker-id="69">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="CASA TEQUILA"
                    />
                  </td>
                  <td>CASA TEQUILA</td>
                </tr>
                <tr data-marker-id="70">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="SILVER BY THE SEA"
                    />
                  </td>
                  <td>SILVER BY THE SEA</td>
                </tr>
                <tr data-marker-id="71">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="AV CACAO" />
                  </td>
                  <td>AV CACAO</td>
                </tr>
                <tr data-marker-id="72">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="OCEAN DRIVE" />
                  </td>
                  <td>OCEAN DRIVE</td>
                </tr>
                <tr data-marker-id="73">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="THE ROATAN STORE"
                    />
                  </td>
                  <td>THE ROATAN STORE</td>
                </tr>
                <tr data-marker-id="74">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="VEARI" />
                  </td>
                  <td>VEARI</td>
                </tr>
                <tr data-marker-id="75">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="TURTLE BAY" />
                  </td>
                  <td>TURTLE BAY</td>
                </tr>
                <tr data-marker-id="76">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="DIAMONDS INTERNATIONAL"
                    />
                  </td>
                  <td>DIAMONDS INTERNATIONAL</td>
                </tr>
                <tr data-marker-id="77">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="ESTHETIX" />
                  </td>
                  <td>ESTHETIX</td>
                </tr>
                <tr data-marker-id="78">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="MUSEO DEL TABACO"
                    />
                  </td>
                  <td>MUSEO DEL TABACO</td>
                </tr>
                <tr data-marker-id="79">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="ROATAN TREASURES"
                    />
                  </td>
                  <td>ROATAN TREASURES</td>
                </tr>
                <tr data-marker-id="80">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="ARCADE ITM" />
                  </td>
                  <td>ARCADE ITM</td>
                </tr>
                <tr data-marker-id="81">
                  <td>
                    <img
                      src="/assets/icons/map/drugstore.svg"
                      alt="FARMACIAS DEL MUNDO"
                    />
                  </td>
                  <td>FARMACIAS DEL MUNDO</td>
                </tr>
                <tr data-marker-id="82">
                  <td>
                    <img src="/assets/icons/map/retail.svg" alt="CARILOHA" />
                  </td>
                  <td>CARILOHA</td>
                </tr>
                <tr data-marker-id="83">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="BANCO FIHCOHSA (ATM)"
                    />
                  </td>
                  <td>BANCO FIHCOHSA (ATM)</td>
                </tr>
                <tr data-marker-id="84">
                  <td>
                    <img
                      src="/assets/icons/map/retail.svg"
                      alt="EL TUCAN GIFT SHOP"
                    />
                  </td>
                  <td>EL TUCAN GIFT SHOP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="map" style={{ width: "100%", height: "80vh", zIndex: 1 }}></div>
    </section>
  );
}
