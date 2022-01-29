// api key = AIzaSyAnRC1ZC2Pk8UJ5UEGYGQxuC0i-qxUzl0E
// cx = 0dfb04d39744dc5c1

/**
 * Sample JavaScript code for search.cse.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */

function loadClient() {
    gapi.client.init({
        apiKey: AIzaSyAnRC1ZC2Pk8UJ5UEGYGQxuC0i
      })
    // gapi.client.setApiKey("AIzaSyAnRC1ZC2Pk8UJ5UEGYGQxuC0i-qxUzl0E");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
        .then(function () { console.log("GAPI client loaded for API"); },
            function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded before calling this method.
function execute() {
    return gapi.client.search.cse.list({
        "cx": "0dfb04d39744dc5c1",
        "q": "dog"
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}
gapi.load("client");
loadClient();
console.log(execute());

// async function init() {
//   // 2. Initialize the JavaScript client library.
//   await gapi.client.init({
//     discoveryDocs: ['https://discovery.googleapis.com/$discovery/rest']
//   });
//   start();
// }

// const API_QUERY = 'android';
// async function start() {
//   try {
//     // 3. Make the API request.
//     const apiRequest = await gapi.client.discovery.apis.list();
//     const result = JSON.parse(apiRequest.body);
    
//     // 4. Log the results of the API request
//     const androidAPIs = result.items.filter(api => api.id.startsWith(API_QUERY));
//     const androidAPITitles = androidAPIs.map(api => api.title);
//     const uniqueAndroidAPITitles = [...new Set(androidAPITitles).values()];
//     document.getElementById('result').innerHTML = 
//       `${uniqueAndroidAPITitles.length} APIs:<br>${uniqueAndroidAPITitles.join('<br/> ')}`;
//   } catch (e) {
//     console.error(e);
//   }
// }

// // 1. Load the JavaScript client library.
// gapi.load('client', init);