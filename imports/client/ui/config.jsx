import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';


export let

    categoryId = `17`
    ,
    tituloPagina = `Prendas Colombianas en Rebajas`
    ,
    subtituloPagina = `Ropa Colombiana en Europa`
    ,
    telContacto = `(+34) 962 441 478`
    ,
    emailContacto = `ventas@latinmoda.info`
    ,
    whatsappMsg = `34674150202`
    ,

// Imagen de fondo y sus opciones
    // fonsPrincipal = `background_blue_v0011.jpg`,
    // backgroundSize =  `cover`,
    // backgroundRepeat = `no-repeat`,
    // backgroundAttachment = `fixed`
    // ,

// Tamaño de columna y estilo para las fotos de producto
    amplaria_fitxetes_subcategoria = `220px`
    ,
    estil_fitxetes = {
        width: amplaria_fitxetes_subcategoria,
        height: `auto`,
        display: `inline-block`,
        border: `1px rgba(0,0,0,.5) solid`,
        borderRadius: `.3em`,
        margin: `.4em`,
        background: `rgba(255, 255, 255, 0.25)`
    }

    ,

// Estilo para modulo de filtro
     filtres_posicio = `columna` // `columna` | `bloque`
     ,
    // ,
    //             layoutTemplateArea =
    //                 filtres_posicio === `columna`
    //                 ? `"filtr content content"`
    //                 : filtres_posicio === `bloque`
    //                 ? `"bloque bloque bloque"
    //                 "content content content"`
    //                 : "",
    //             possibleMaxWidth =
    //                 filtres_posicio === `columna`
    //                 ? `400px`
    //                 : "none"
    //,
        // estil_filtres = {
        //     background: `rgba(255, 255, 255, 0.25)`,
        //     width: `90%`,
        //     maxWidth: `${possibleMaxWidth}`,
        //     margin: `1em 3em`,
        //     padding: `2em`,
        //     borderRadius: `1em`
        // ,
        // position: `fixed`
    //}
    //,

    // Estilo del Layout principal

/*    layoutStyle = {

    }
    ,*/

// 1er Contenido libre em "Home"
    titulo_contenido = `Vendemos y distribuimos Calidad y Diseño 100% Colombiana.`

    ,

    texto_contenido =

          <div><p></p></div>

    ,

    bloque_info =
    <div className="row">
        <section id="content-1-2" className="content-block content-1-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Más Información</h3>
                        <p className="lead">Contacta con nuestro personal especializado.</p>
                        <p>Click en la opción que mas te guste y contacta de inmediato con nuestros asesores para ayudarte en lo que necesitas.
                        Tendremos el gusto de atenderte.</p>
                        <div className="row">
                            <div className="col-sm-5 col-xs-12">
                                <a href="http://m.me/latinmoda" target="_blank" className="btn btn-block btn-primary"><span className="fa fa-cloud-upload"></span> FB Messenger</a>
                            </div>
                            <div className="col-sm-5 col-xs-12">
                                <a href="http://bit.ly/SAC_Latinmoda" target="_blank" className="btn btn-block btn-success"><span className="fa fa-check"></span> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-sm-5 col-sm-offset-1">
                        <img className="img-rounded img-responsive" src="./slide3.jpg"/>
                    </div>*/}
                </div>
            </div>
        </section>
    </div>

    // ,

// 2do Contendido libre en "Home"
    // segon_lliure =
    //     <Grid
    //         style={{
    //             background: `fuchsia`,
    //             margin: `50px`
    //         }}
    //         fluid
    //     >
    //         <Row
    //             className="show-grid"
    //             style={{
    //                 position: `relative`
    //             }}
    //         >
    //             <Col
    //                 xs={6}
    //                 md={3}
    //                 style={{
    //                     background: `gold`
    //                 }}
    //             ><code>&lt;{'Col xs={6} md={3}'} /&gt;</code></Col>
    //             <Col
    //                 xs={6}
    //                 md={6}
    //                 style={{
    //                     background: `grey`
    //                 }}
    //             >
    //             </Col>
    //             <Col
    //                 xsHidden
    //                 md={3}
    //                 style={{
    //                     background: `gold`,
    //                     height: `100%`
    //                 }}
    //             ><code>&lt;{'Col xsHidden md={3}'} /&gt;</code></Col>
    //         </Row>
    //     </Grid>
    //
    // ,


// Contenido libre de Video en "Home"

//estilo posible para la clase de abajo embed-responsive
//style={{
//margin: `auto`,
//position: `relative`,
//paddingBottom: `56.25%`,
//height: `0`,
//overflow: `hidden`,
//}}

//estilo posible para la clase embed-responsive-item
//style={{
//position: `absolute`,
//top: `0`,
//left: `0`,
//width: `100%`,
//height: `100%`
//}}

//estilo que viene por defecto con el video de Youtube o vimeo
//width="800"
//height="450"
//frameBorder="0"
//allowFullScreen

    // video_latinmoda =
    //   <div className="container">
    //     <div style={{border: `1em solid white`, borderRadius: `10px`, boxShadow: `8px 8px 20px #000`}} className="row" >
    //       <div className="embed-responsive embed-responsive-16by9">
    //         <iframe className="embed-responsive-item"
    //             src="https://player.vimeo.com/video/240463716">
    //         </iframe>
    //       </div>
    //     </div>
    //   </div>
;
