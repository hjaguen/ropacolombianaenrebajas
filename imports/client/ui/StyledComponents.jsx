import React, {Component} from 'react';
import styled from 'styled-components';
import * as conf from './config.jsx';

let bloCol = (conf.filtres_posicio) === `columna` ? `"mos mos col "` : `"bq bq nb" "mos mos ."`;

export const
    LO = styled.div`
        padding: 0px;
        display: grid;
        grid-template-columns: 1.2fr 1.2fr 0.6fr;
        grid-template-areas:
            "h h h"
            "p p nb"
            "c c nb"
            ${bloCol}
            "min fot tex"
            "ft ft ft"
        ;
        background-image: url(/${conf.fonsPrincipal});
        background-size: ${conf.backgroundSize};
        background-repeat: ${conf.backgroundRepeat};
        background-attachment: ${conf.backgroundAttachment};
    `,

    
    ProductsLayout = styled.div`
      display: grid;
      grid-template-columns: 25% auto;
      grid-template-rows: auto;
      grid-template-areas:
        "filtro content"
    `,

    MainNavBar = styled.nav`
        grid-area: nb;
        max-width: 300px;
        position: sticky;
        height: min-height;
        //background-color: rgba(255, 255, 255, 0.25);
        transition: all 1s ease;
        font-family: 'Pacifico', cursive;
        top:8em;
    `,

    PosicionFiltro = styled.div`
        margin-top: -13em;
        grid-area: ${(conf.filtres_posicio) === "columna" ? "col" : "bq"};
    `,


    Filtro = styled.div.attrs({
      className: 'filtro col-sm-8'
    })`
        borderRadius: 1em;
        position: fixed;
        //position: -webkit-sticky;
        display:inline-block;
        float:left;
        z-index:1000;

        * {
            transition: all 1s ease;
        }

        @media (max-width: 500px) {
            //> :not(.mobile), .Select {
            .amaga {
                height: 0;
                margin: 0 !important;
                padding: 0;
                opacity: 0;
                visibility: hidden;
            }

            .mostra {
                margin: 2em 2em;
                //padding: 2em;
                height: auto;
                opacity: 1;
                visibility: visible;
            }

            .filtreC.mostra {
                margin: 0;
                margin-top: 3em;
            }
        }

        @media (min-width: 500px) {
            .mobile {
                height: 0;
                margin: 0;
                padding: 0;
                opacity: 0;
                visibility: hidden;
            }
        }
    `,

    PosicionProductos = styled.div`
      grid-area: mos;
      margin-top:-10%;
    `,

    NavTitle = styled.h1`
        margin-top: 0;
        font-size: 2.5em;
        color: black;
        text-shadow: 8px 5px 10px black;
        font-family: 'Pacifico', cursive;
        font-weight: 400;

        @media (min-width:351px) and (max-width:500px) {
          font-size: 1.4em;
        }

        @media (max-width:350px) {
          font-size: 1.1em;
        }
    `,

    portada = styled.div`
      grid-area: p;
    `,

    MainContent = styled.div.attrs({
      //className: 'container'
      className: 'maincontent'
    })`
        grid-area: c;

        margin-top: 20px;
        margin-bottom: 20px;

        > h1 {
          font-family: 'Pacifico', cursive;
          font-size: 2.5em;
          font-weight: 400;
        }

        > h2 {
          font-family: 'Pacifico', cursive;
          font-size: 2em;
          font-weight: 400;
        }

        > h3 {
          font-family: 'Pacifico', cursive;;
          font-size: 1.7em;
          font-weight: 400;
        }

        p {
          font-family: 'Lato', sans-serif;
          font-size: 1.2em;
          font-weight: 400;
        }
    `,

    aLink = styled('a')`
      //padding: 15px;
      // padding-top: 7px !important;
      // padding-bottom: 7px !important;
      color: black;
      font-size: 1.25em;
	    text-shadow: 0 1px 0 rgba(255,255,255,.25);
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      //transform: scaleX(.9);
        &:hover, &:focus {
          color: white;

        }
    `,

    aBrand = styled.a.attrs({
      className: 'navbar-brand nombre-marca'
    })`
      margin-bottom: 20px;

      h1 {
          transition: color 3s;
      }
    `,

    liNav = styled.li`
        > ${aLink}{
        &:hover, &:focus {
          background-color: transparent;
      }
    }
    `,

    footer = styled.footer.attrs({
      className: 'mdl-mega-footer'
    })`
      // background-color: black;
    `
    ,

    header = styled.header`
      grid-area: h;
      position: fixed;
      z-index: 999;
      width: 100%;
      padding-bottom:50px;
      `
;
