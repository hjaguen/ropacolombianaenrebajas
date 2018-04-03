import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {findDOMNode} from 'react-dom';

export default class HeaderAdaptat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            cart: this.props.cartItems,
        };
    }

    handleCart(e){
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        })
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
                        <Stylo.liNav style={{display:`inline-block`}}>
                            <Stylo.aLink href="" data-toggle="modal" data-target="#pedido">
                                <i className="fa fa-shopping-basket fa-2x emailytel"></i>
                            </Stylo.aLink>
                        </Stylo.liNav>
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>        
                </div>
            </Stylo.MainNavBar>
            ,
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
            ,
            <div className="row">
                <div className="modal fade" id="pedido" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" style={{width:`90%`}} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Completa tu Pedido</h4>
                            </div>
                            <div className="modal-body">
                                <div className="cart col-sm-8 col-xs-12"> 
                                    <div className="cart-info">
                                        {/*<table>
                                            <tbody>
                                                <tr>
                                                    <td>No. of items</td>
                                                    <td>:</td>
                                                    <td><strong>{this.props.totalItems}</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td>:</td>
                                                    <td><strong></strong></td>
                                                </tr>
                                            </tbody>
                                        </table>*/}
                                        <div className={this.state.showCart ? "cart-preview active" : "cart-preview"} ref="cartPreview">
                                            {/*<CartScrollBar>
                                                
                                            </CartScrollBar>*/}
                                            <div className="action-block">
                                                {/*<button type="button" className={this.state.cart.length > 0 ? " " : "disabled"}>PROCEED TO CHECKOUT</button>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <form >
                                        <div><h5>Déjanos tus datos para contactarte</h5></div>
                                        <div className="form-group">
                                            <input name="particular" type="checkbox" id="particular" className="poshytip" title="Soy un particular" /> Soy un particular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input name="empresa" type="checkbox" id="empresa" className="poshytip" title="Soy una empresa"/> Soy una empresa
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre*:</label>
                                            <input name="nombre" type="text" className="form-control" title="Ingrese su nombre" id="nombre" ref={nm => this.text = nm }/>
                                        </div>
                                        <div className="form-group">    
                                            <label htmlFor="apellido">Apellidos*</label>
                                            <input name="apellido" type="text" className="form-control" title="Ingrese su apellido" id="apellido" ref={ln => this.text = ln }/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="direccion">Direccion*</label>
                                            <input name="direccion" type="text" className="form-control" title="Ingrese su dirección"  id="direccion" ref={dir => this.text = dir }/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="zip">Codigo Postal*</label>
                                            <input name="zip" type="text" className="form-control" title="Ingrese su dirección"  id="zip" ref={zip => this.text = zip }/>                        
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="localidad">Localidad*</label>
                                            <input name="localidad" type="text" className="form-control" id="localidad" ref={loc => this.text = loc }/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="provincia">Provincia*</label>
                                            <input name="provincia" type="text" className="form-control" id="provincia" ref={pv => this.text = pv }/>                        
                                        </div>
                                        <div className="form-group">    
                                            <label htmlFor="telefono-movil-1">Telefono Movil*</label>
                                            <input name="telefono-movil-1" type="form-control"  className="form-control" title="+34 o el indicativo que corresponda" id="telefono-movil-1" placeholder="+34" ref={mv1 => this.text = mv1 }/>
                                        </div>
                                        <div className="form-group">     
                                            <label htmlFor="telefono-movil-2">Movil Alternativo</label>                              
                                            <input name="telefono-movil-2" type="form-control" className="form-control" title="Su teléfono movil"  id="telefono-movil-2" ref={mv2 => this.text = mv2 }/>
                                        </div>
                                        <div className="form-group">    
                                            <label htmlFor="emailCliente">Dirección de Email*:</label>
                                            <input type="email" className="form-control" id="emailCliente" placeholder="Introduzca su Email" ref={email => this.from = email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mensajeCliente">Comentarios:</label>
                                            <textarea className="form-control" id="mensajeCliente" placeholder="Escriba su Mensaje" ref={ta => this.text = ta }/>
                                        </div>
                                        {/*Datos del pedido*/}
                                        {/*<input name="msg_txt" type="hidden" id="msg_txt" value=" | Ref. 003 -D13549, Marca: Americano, Código de Barras: 009D1354901001, Color: Rojo, Talla: S, Cantidad: 1 | "/>
                                        <input name="msg_html" type="hidden" id="msg_html" value="<ol><li>Ref. 003 -D13549, Marca: Americano, Código de Barras: 009D1354901001, Color: Rojo, Talla: S, Cantidad: 1</li></ol>"/>*/}
                                        <button
                                            className="btn btn-success"
                                            onClick={(ev)=>{
                                                ev.preventDefault();
                                                ev.stopPropagation();
                                                Meteor.call('enviaCorreu', this.from.value, this.text.value );
                                                alert("Mensaje enviado. ¡Gracias por contactar con nosotros!");
                                            }}
                                        >Enviar</button>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {/*<button type="button" className="btn btn-success">PROCEED TO CHECKOUT</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}