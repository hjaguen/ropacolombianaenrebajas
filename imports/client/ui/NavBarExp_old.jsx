import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';
//import './style.css';

export default class NavbarAdaptat extends Component {
    constructor(props) {
        super(props);

        this.canviaSubcat = this.canviaSubcat.bind(this);
    }

    canviaSubcat() {
        //this.props.subcategoryIdAlState();
        this.props.filtrantMarca(null);
        this.props.filtrantColor(null);
        this.props.filtrantTalla(null);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === this.props) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
            //console.log(this.props.data.error)
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            <Stylo.MainNavBar id="menu" className="navbar" role="navigation">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        {
                            this.props.data.subcategories.map(
                                (v,i,a) => {
                                    return (
                                      <Stylo.liNav>
                                        <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
                                            <Stylo.aLink
                                                eventKey={i}
                                                onClick={this.canviaSubcat}
                                                data-subcategory-id={v.categoriaId}
                                            >                   {v.nom_categoria}
                                            </Stylo.aLink>
                                        </LinkContainer>
                                      </Stylo.liNav>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>

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
            </Stylo.MainNavBar>
        );
    }
}
