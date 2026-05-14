import React, { useEffect } from 'react';

export default function MapInteractive({ lang }) {
    useEffect(() => {
        console.log("Map component mounted");
    }, []);

    const isEs = lang === 'es';

    return (
        <section className="shock-section map-section">
            <div className="filter-container" data-aos="zoom-out-up" data-aos-easing="ease-out-cubic" data-aos-duration="500">
                {/* Service */}
                <div className="leaflet-control-filter service">
                    <div className="filter-header">
                        <span className="header-text">{isEs ? 'SERVICIOS' : 'SERVICES'}</span>
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
                                <tr data-marker-id="77" style={{ display: 'none' }}>
                                    <td><img src="/assets/icons/map/arrowGreen.svg" alt="SHOWS" /></td>
                                    <td>{isEs ? 'REGRESO CRUCERO' : 'BACK TO SHIP'}</td>
                                </tr>
                                <tr data-marker-id="76">
                                    <td><img src="/assets/icons/map/arrowGreen.svg" alt="SHOWS" /></td>
                                    <td>{isEs ? 'REGRESO CRUCERO' : 'BACK TO SHIP'}</td>
                                </tr>
                                <tr data-marker-id="9">
                                    <td><img src="/assets/icons/map/restrooms.svg" alt="RESTROOMS" /></td>
                                    <td>{isEs ? 'BAÑOS' : 'RESTROOMS'}</td>
                                </tr>
                                <tr data-marker-id="75">
                                    <td><img src="/assets/icons/map/arrowRed.svg" alt="SHOWS" /></td>
                                    <td>{isEs ? 'SALIDA PUERTO' : 'PORT EXIT'}</td>
                                </tr>
                                <tr data-marker-id="10">
                                    <td><img src="/assets/icons/map/show.svg" alt="SHOWS" /></td>
                                    <td>SHOWS</td>
                                </tr>
                                <tr data-marker-id="11">
                                    <td><img src="/assets/icons/map/port-experience/coco.svg" alt="CRAZY-COCONUT" /></td>
                                    <td>CRAZY COCONUT & PINEAPPLE BAR</td>
                                </tr>
                                <tr data-marker-id="12">
                                    <td><img src="/assets/icons/map/camara.svg" alt="PHOTO-SPOT" /></td>
                                    <td>PHOTO SPOT</td>
                                </tr>
                                <tr data-marker-id="13">
                                    <td><img src="/assets/icons/map/star.svg" alt="LAST-MINUTE" /></td>
                                    <td>LAST MINUTE</td>
                                </tr>
                                <tr data-marker-id="14">
                                    <td><img src="/assets/icons/map/taxi.svg" alt="SHUTTLE" /></td>
                                    <td>SHUTTLE</td>
                                </tr>
                                <tr data-marker-id="15">
                                    <td><img src="/assets/icons/map/shorex.svg" alt="SHOREX" /></td>
                                    <td>PRE-BOOKED SHOREX</td>
                                </tr>
                                <tr data-marker-id="16">
                                    <td><img src="/assets/icons/map/beach-play.svg" alt="BEACH PLAYGROUND" /></td>
                                    <td>BEACH PLAYGROUND</td>
                                </tr>
                                <tr data-marker-id="17">
                                    <td><img src="/assets/icons/map/yongol.svg" alt="YONGOL" /></td>
                                    <td>YONGOL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* fun */}
                <div className="leaflet-control-filter fun">
                    <div className="filter-header">
                        <span className="header-text">{isEs ? 'DIVERSIÓN' : 'FUN'}</span>
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
                                <tr data-marker-id="7">
                                    <td><img src="/assets/icons/map/port-experience/pool-marker.svg" alt="POOL" /></td>
                                    <td>{isEs ? 'PISCINA' : 'POOL'}</td>
                                </tr>
                                <tr data-marker-id="8">
                                    <td><img src="/assets/icons/map/port-experience/beach-marker.svg" alt="BEACH" /></td>
                                    <td>{isEs ? 'PLAYA' : 'BEACH'}</td>
                                </tr>
                                <tr data-marker-id="2">
                                    <td><img src="/assets/icons/map/port-experience/rum-quest-marker.svg" alt="MR-RUM-QUEST" /></td>
                                    <td>MR. RUM QUEST</td>
                                </tr>
                                <tr data-marker-id="3">
                                    <td><img src="/assets/icons/map/port-experience/lazy-river-marker.svg" alt="THE-RIVER" /></td>
                                    <td>LAZY RIVER</td>
                                </tr>
                                <tr data-marker-id="4">
                                    <td><img src="/assets/icons/map/port-experience/splash-marker.svg" alt="SPLASH-SUFRING" /></td>
                                    <td>SPLASH SURFING</td>
                                </tr>
                                <tr data-marker-id="5">
                                    <td><img src="/assets/icons/map/port-experience/spa-marker.svg" alt="SPA WELLNESS RETREATS" /></td>
                                    <td>SPA WELLNESS RETREAT</td>
                                </tr>
                                <tr data-marker-id="6">
                                    <td><img src="/assets/icons/map/port-experience/monkey-marker.svg" alt="MONKEY-ISLAND" /></td>
                                    <td>MONKEY ISLAND</td>
                                </tr>
                                <tr data-marker-id="18">
                                    <td><img src="/assets/icons/map/port-experience/aviario.svg" alt="AVIARIUS" /></td>
                                    <td>{isEs ? 'AVIARIO' : 'AVIARIUS'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* restaurants */}
                <div className="leaflet-control-filter restaurants">
                    <div className="filter-header">
                        <span className="header-text">{isEs ? 'RESTAURANTES' : 'RESTAURANTS'}</span>
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
                                <tr data-marker-id="73">
                                    <td><img src="/assets/icons/map/bar.svg" alt="BATTING LEGENDS" /></td>
                                    <td>BATTING LEGENDS</td>
                                </tr>
                                <tr data-marker-id="60">
                                    <td><img src="/assets/icons/map/food.svg" alt="BAR-KELOKE" /></td>
                                    <td>KELOKÉ BAR</td>
                                </tr>
                                <tr data-marker-id="61">
                                    <td><img src="/assets/icons/map/food.svg" alt="THE COFFEE FACTORY" /></td>
                                    <td>THE COFFEE FACTORY</td>
                                </tr>
                                <tr data-marker-id="62">
                                    <td><img src="/assets/icons/map/food.svg" alt="ICEKERY" /></td>
                                    <td>ICEKERY</td>
                                </tr>
                                <tr data-marker-id="63">
                                    <td><img src="/assets/icons/map/bar.svg" alt="MOJITO-BAR" /></td>
                                    <td>MOJITO BAR</td>
                                </tr>
                                <tr data-marker-id="64">
                                    <td><img src="/assets/icons/map/food.svg" alt="CANTINA-LATINA" /></td>
                                    <td>CANTINA LATINA</td>
                                </tr>
                                <tr data-marker-id="65">
                                    <td><img src="/assets/icons/map/food.svg" alt="MEXICAN-GRILL" /></td>
                                    <td>MEXICAN GRILL</td>
                                </tr>
                                <tr data-marker-id="66">
                                    <td><img src="/assets/icons/map/food.svg" alt="BLUE-PARROT" /></td>
                                    <td>BLUE PARROT</td>
                                </tr>
                                <tr data-marker-id="67">
                                    <td><img src="/assets/icons/map/food.svg" alt="TACO-LOVER" /></td>
                                    <td>TACO LOVER</td>
                                </tr>
                                <tr data-marker-id="68">
                                    <td><img src="/assets/icons/map/bar.svg" alt="MARGARITA-BAR" /></td>
                                    <td>MARGARITA BAR</td>
                                </tr>
                                <tr data-marker-id="69">
                                    <td><img src="/assets/icons/map/bar.svg" alt="DOM-DOM" /></td>
                                    <td>DOM DOM BAR</td>
                                </tr>
                                <tr data-marker-id="70">
                                    <td><img src="/assets/icons/map/bar.svg" alt="HURACAN-LOUNGE-BAR" /></td>
                                    <td>HURACÁN LOUNGE BAR</td>
                                </tr>
                                <tr data-marker-id="71">
                                    <td><img src="/assets/icons/map/bar.svg" alt="THE-BOAT-BAR" /></td>
                                    <td>THE BOAT BAR</td>
                                </tr>
                                <tr data-marker-id="72">
                                    <td><img src="/assets/icons/map/bar.svg" alt="TIKI-TIKI" /></td>
                                    <td>TIKI TIKI BAR</td>
                                </tr>
                                <tr data-marker-id="78">
                                    <td><img src="/assets/icons/map/food.svg" alt="SPLASH GRILL & CHILL" /></td>
                                    <td>SPLASH GRILL & CHILL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* shop */}
                <div className="leaflet-control-filter shop">
                    <div className="filter-header">
                        <span className="header-text">{isEs ? 'COMPRAS' : 'SHOPPING'}</span>
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
                                <tr data-marker-id="20">
                                    <td><img src="/assets/icons/map/retail.svg" alt="DIAMONDS" /></td>
                                    <td>DIAMONDS INTERNATIONAL</td>
                                </tr>
                                <tr data-marker-id="21">
                                    <td><img src="/assets/icons/map/retail.svg" alt="DUFRY" /></td>
                                    <td>DUFRY</td>
                                </tr>
                                <tr data-marker-id="22">
                                    <td><img src="/assets/icons/map/retail.svg" alt="BLUE-STONE" /></td>
                                    <td>BLUE STONE</td>
                                </tr>
                                <tr data-marker-id="38">
                                    <td><img src="/assets/icons/map/retail.svg" alt="MUSEO-DEL-TABACO" /></td>
                                    <td>MUSEO DEL TABACO</td>
                                </tr>
                                <tr data-marker-id="23">
                                    <td><img src="/assets/icons/map/retail.svg" alt="MORENA-MIA" /></td>
                                    <td>MORENA MIA</td>
                                </tr>
                                <tr data-marker-id="24">
                                    <td><img src="/assets/icons/map/retail.svg" alt="PAWS-BY-THE-SEA" /></td>
                                    <td>PAWS BY THE SEA</td>
                                </tr>
                                <tr data-marker-id="25">
                                    <td><img src="/assets/icons/map/retail.svg" alt="TSUNAMI-XL" /></td>
                                    <td>TSUNAMI XL</td>
                                </tr>
                                <tr data-marker-id="26">
                                    <td><img src="/assets/icons/map/retail.svg" alt="PIRAÑA-JOE" /></td>
                                    <td>PIRAÑA JOE</td>
                                </tr>
                                <tr data-marker-id="27">
                                    <td><img src="/assets/icons/map/retail.svg" alt="ISLAND-LIFE- SURF-SHOP" /></td>
                                    <td>ISLAND LIFE - SURF SHOP</td>
                                </tr>
                                <tr data-marker-id="28">
                                    <td><img src="/assets/icons/map/retail.svg" alt="DOMINICAN-THINGS" /></td>
                                    <td>DOMINICAN-THINGS</td>
                                </tr>
                                <tr data-marker-id="29">
                                    <td><img src="/assets/icons/map/retail.svg" alt="CHRISTMAS-BY-THE-SEA" /></td>
                                    <td>CHRISTMAS BY THE SEA</td>
                                </tr>
                                <tr data-marker-id="30">
                                    <td><img src="/assets/icons/map/retail.svg" alt="RUTA-DE-LAS-INDAS" /></td>
                                    <td>RUTA DE LAS INDAS</td>
                                </tr>
                                <tr data-marker-id="31">
                                    <td><img src="/assets/icons/map/retail.svg" alt="THE-TIE-DYE-HUT" /></td>
                                    <td>THE TIE DYE HUT</td>
                                </tr>
                                <tr data-marker-id="32">
                                    <td><img src="/assets/icons/map/retail.svg" alt="PIÑA-COLADA-BOUTIQUE" /></td>
                                    <td>PIÑA COLADA BOUTIQUE</td>
                                </tr>
                                <tr data-marker-id="33">
                                    <td><img src="/assets/icons/map/retail.svg" alt="SHARK-ATTACK" /></td>
                                    <td>SHARK ATTACK</td>
                                </tr>
                                <tr data-marker-id="34">
                                    <td><img src="/assets/icons/map/retail.svg" alt="BLOSSOM-SOAP" /></td>
                                    <td>BLOSSOM SOAP</td>
                                </tr>
                                <tr data-marker-id="35">
                                    <td><img src="/assets/icons/map/retail.svg" alt="SEA-SALT" /></td>
                                    <td>SEA SALT</td>
                                </tr>
                                <tr data-marker-id="36">
                                    <td><img src="/assets/icons/map/retail.svg" alt="RIVIERA" /></td>
                                    <td>RIVIERA</td>
                                </tr>
                                <tr data-marker-id="37">
                                    <td><img src="/assets/icons/map/retail.svg" alt="MEXICAN-EXPERIENCE-GIFTSHOP-TABACO" /></td>
                                    <td>MEXICAN EXPERIENCE</td>
                                </tr>
                                <tr data-marker-id="39">
                                    <td><img src="/assets/icons/map/retail.svg" alt="SILVER-BY-THE-SEA" /></td>
                                    <td>SILVER BY THE SEA</td>
                                </tr>
                                <tr data-marker-id="40">
                                    <td><img src="/assets/icons/map/drugstore.svg" alt="TAINO BAY DRUGSTORE" /></td>
                                    <td>TAINO BAY DRUGSTORE</td>
                                </tr>
                                <tr data-marker-id="41">
                                    <td><img src="/assets/icons/map/retail.svg" alt="TAINO-LOGO-SHOP" /></td>
                                    <td>TAINO LOGO SHOP</td>
                                </tr>
                                <tr data-marker-id="42">
                                    <td><img src="/assets/icons/map/retail.svg" alt="DOMINICAN-YUCAYAQUE" /></td>
                                    <td>DOMINICAN YUCAYAQUE</td>
                                </tr>
                                <tr data-marker-id="43">
                                    <td><img src="/assets/icons/map/retail.svg" alt="TURQUESA" /></td>
                                    <td>TURQUESA</td>
                                </tr>
                                <tr data-marker-id="44">
                                    <td><img src="/assets/icons/map/retail.svg" alt="NATURAL-BEAUTY" /></td>
                                    <td>NATURAL BEAUTY</td>
                                </tr>
                                <tr data-marker-id="45">
                                    <td><img src="/assets/icons/map/retail.svg" alt="HARD-ROCK-CAFÉ" /></td>
                                    <td>HARD ROCK CAFÉ</td>
                                </tr>
                                <tr data-marker-id="46">
                                    <td><img src="/assets/icons/map/retail.svg" alt="DEL-SOL" /></td>
                                    <td>DEL SOL</td>
                                </tr>
                                <tr data-marker-id="47">
                                    <td><img src="/assets/icons/map/drugstore.svg" alt="DRUGSTORE" /></td>
                                    <td>DRUGSTORE</td>
                                </tr>
                                <tr data-marker-id="48">
                                    <td><img src="/assets/icons/map/retail.svg" alt="VEARI-PIEL" /></td>
                                    <td>VEARI PIEL</td>
                                </tr>
                                <tr data-marker-id="49">
                                    <td><img src="/assets/icons/map/retail.svg" alt="ABYSSAL" /></td>
                                    <td>ABYSSAL</td>
                                </tr>
                                <tr data-marker-id="50">
                                    <td><img src="/assets/icons/map/retail.svg" alt="VELASCO-HABANOS" /></td>
                                    <td>VELASCO HABANOS</td>
                                </tr>
                                <tr data-marker-id="74">
                                    <td><img src="/assets/icons/map/retail.svg" alt="CHOCOLATE-WORLD" /></td>
                                    <td>CHOCOLATE WORLD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="map" style={{ width: '100%', height: '80vh', zIndex: 1 }}></div>
        </section>
    );
}
