App.announcement = App.cable.subscriptions.create("AnnouncementChannel", {
  connected: function() {
    console.log("#announcement connected", this);
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    console.log("#announcement disconnected", this);
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    console.log("#announcement received data", data);
    // Called when there's incoming data on the websocket for this channel
    console.log("test")
  }
});
