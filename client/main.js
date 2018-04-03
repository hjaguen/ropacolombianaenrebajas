import './main.html';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
//import '/imports/client/ui/graphiql.css';
import '/imports/client/ui/bootstrap.min.css';
import '/imports/client/ui/bootstrap-theme.min.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { graphql, ApolloProvider } from 'react-apollo';
import '/imports/client/ui/bootstrap.min.js';

import App from '/imports/client/ui/App.jsx';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `http://blusascolombianas.es:11010/graphql`
    })
})

Meteor.startup(() => {

    /*window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("menu").style.backgroundColor = "black";
            [...document.querySelectorAll(".nombre-marca h1, .emailytel")].map((v,i,a)=>v.style.color = "#FF4081");

        } else {
            document.getElementById("menu").style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            [...document.querySelectorAll(".nombre-marca h1, .emailytel")].map((v,i,a)=>v.style.color = "white");
        }
    }*/

    window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
            //document.getElementById("footer").style.position="relative";
            document.getElementById("header").style.backgroundColor = "fuchsia";
            [...document.querySelectorAll(".nombre-marca h1, .emailytel")].map((v,i,a)=>v.style.color = "white");
            document.getElementById('filter').style.backgroundColor = "fuchsia";
        } else {
            document.getElementById("header").style.backgroundColor = "transparent";
            [...document.querySelectorAll(".nombre-marca h1, .emailytel")].map((v,i,a)=>v.style.color = "black");
            document.getElementById('filter').style.backgroundColor = "transparent";
         }
    }

    render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
        ,
        document.getElementById('app')
    );
});
