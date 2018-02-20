import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class HeadearBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

    return (
            <Stylo.MainNavBar id="menu" className="navbar" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header col-xs-12">
                        <Stylo.aBrand href="/" className="navbar-right">
                          <Stylo.NavTitle>{conf.tituloPagina}</Stylo.NavTitle>
                        </Stylo.aBrand>
                    </div>

                      <ul className="nav navbar-nav navbar-right">
                        <Stylo.liNav>
                            {/*<Stylo.aLink className="emailytel">{conf.emailContacto}</Stylo.aLink>*/}
                            <Stylo.aLink href=""
                              data-toggle="modal"
                              data-target="#email">
                              <i className="fa fa-envelope fa-2x"></i>
                            </Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                            {/*<Stylo.aLink className="emailytel">{conf.telContacto}</Stylo.aLink>*/}
                            <Stylo.aLink href="tel:(+34) 962441478">
                              <i className="fa fa-phone fa-2x"></i>
                            </Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href="https://facebook.com/latinmoda" target="_blank"> <i className="fa fa-facebook fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href="https://twitter.com/latinmoda" target="_blank"> <i className="fa fa-twitter fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href="https://instagram.com/latinmoda_oficial" target="_blank"> <i className="fa fa-instagram fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                        <Stylo.liNav>
                          <Stylo.aLink href={`https://api.whatsapp.com/send?phone=${conf.whatsappMsg}&text=Hola%2C%20necesito%20información`} target="_blank"> <i className="fa fa-whatsapp fa-2x"></i></Stylo.aLink>
                        </Stylo.liNav>
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    {/*Modal de el envio de correo electrónico*/}
                    <div className="modal fade" id="email" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Contáctanos</h4>
                          </div>
                          <div className="modal-body">
                            <form >
                              <div className="form-group">
                                <label htmlFor="emailCliente">Dirección de Email:</label>
                                <input type="email" className="form-control" id="emailCliente" placeholder="Introduzca su Email" ref={input => this.from = input} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="mensajeCliente">Mensaje:</label>
                                <textarea className="form-control" id="mensajeCliente" placeholder="Escriba su Mensaje" ref={ta => this.text = ta }/>
                              </div>
                              <button
                                className="btn btn-default"
                                onClick={(ev)=>{
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    Meteor.call('enviaCorreu', this.from.value, this.text.value );
                                    alert("Mensaje enviado. ¡Gracias por contactar con nosotros!");
                                }}
                              >Enviar</button>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </Stylo.MainNavBar>
        );
    }
}