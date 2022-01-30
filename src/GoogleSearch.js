// api key = AIzaSyAnRC1ZC2Pk8UJ5UEGYGQxuC0i-qxUzl0E
// cx = 0dfb04d39744dc5c1

/**
 * Sample JavaScript code for search.cse.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */

// let credentials = JSON.parse(fetch('./credentials/google-credentials.json'));



import React, { useState, useEffect } from 'react';

export function GoogleSearch(queryString, callbackFromSearch) {

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
     const initClient = () => {
        console.log("Initializing client...");

        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            console.log("Setting handlers...");

            // Listen for sign-in state changes.
            // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            // authorizeButton.onclick = handleAuthClick;
            // signoutButton.onclick = handleSignoutClick;
            console.log("Sign in should be here");
            performGoogleSearch();
        }, function (error) {
            appendPre(JSON.stringify(error, null, 2));
        });
    }

    const loadGAPI = (callback) => {
        const existingScript = document.getElementById('gapi-script');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://apis.google.com/js/api.js';
            script.id = 'gapi-script';
            document.body.appendChild(script);
            script.onload = () => {
                if (callback) callback();
            };
        }
        if (existingScript && callback) callback();
    };

    /**
   *  On load, called to load the auth2 library and API client library.
   */
    const handleClientLoad = () => {
        console.log("handleClientLoad called");
        console.log(gapi);
        gapi.load('client:auth2', initClient);
    }

    loadGAPI(() => {
        console.log("GAPI loaded");
        handleClientLoad();
    });


    const [authorized, setAuthorized] = React.useState(false);

    // Client ID and API key from the Developer Console
    // const CLIENT_ID = '352950743618-as40op9vf6rih4v3qbts99o4aaer82q2.apps.googleusercontent.com';
    const CLIENT_ID = '352950743618-ubtd7o0i8kfms6gjuj34mbj77u79241p.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyAZZmaHv8HoXI-e6JLfIUuOwaVtOc1JjrM';
    // var CLIENT_ID = credentials["google-search-client-id"];
    // var API_KEY = credentials["google-search-api-key"];

    // Array of API discovery doc URLs for APIs used by the quickstart
    const DISCOVERY_DOCS = ["https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/cse";

    const authorizeButton = document.getElementById('authorize_button');
    const signoutButton = document.getElementById('signout_button');

    /**
     * Print the display name if available for 10 connections.
     */
    const performGoogleSearch = async () => {
        let links = [];

        window.gapi.client.search.cse.list({
            "cx": "0dfb04d39744dc5c1",
            "q": queryString
        })
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                console.log(response["result"]["items"][0]["link"]);
                console.log(response["result"]["items"][0]["snippet"]);

                for (let i = 0; i < 10; i++) {
                    links.push(response["result"]["items"][i]["link"])
                }
                console.log(links);
                callbackFromSearch(links);
            },
                function (err) { console.error("Execute error", err); });

        return links;
    }



    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            setAuthorized(true);
            handleAuthClick();
            // authorizeButton.style.display = 'none';
            // signoutButton.style.display = 'block';
        } else {
            setAuthorized(false);
            // authorizeButton.style.display = 'block';
            // signoutButton.style.display = 'none';
        }
    }

    /**
     *  Sign in the user upon button click.
     */
    const handleAuthClick = (event) => {
        console.log("Auth click should be here");
        // gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    const handleSignoutClick = (event) => {
        // gapi.auth2.getAuthInstance().signOut();
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    const appendPre = (message) => {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }

    return (
        performGoogleSearch
    );
}