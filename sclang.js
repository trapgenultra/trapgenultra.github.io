/* sclang.js - A minimal OSC sender for SuperCollider
   This file sends OSC messages via HTTP POST to your SuperCollider server.
   Make sure your SC server is configured to receive OSC messages via HTTP.
*/

const sclang = {
  // Change this URL if your SC server is running on a different host/port or endpoint.
  serverUrl: 'http://localhost:57120/osc',

  // Sends an OSC message with a given address and arguments.
  send: function(address, ...args) {
    const oscMessage = {
      address: address,
      args: args
    };

    fetch(this.serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(oscMessage)
    })
    .then(response => {
      console.log("OSC message sent:", oscMessage, "Response:", response);
    })
    .catch(error => {
      console.error("Error sending OSC message:", error);
    });
  }
};
