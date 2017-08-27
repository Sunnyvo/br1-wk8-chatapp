function setupMessages(roomId) {
  App.messages = App.cable.subscriptions.create(
    { channel: 'MessagesChannel', id: roomId },
    {
      connected: function() {
        // Called when the subscription is ready for use on the server
        console.log('#messages connected at ', this.identifier);
      },

      disconnected: function() {
        // Called when the subscription has been terminated by the server
      },

      received: function(data) {
        // Called when there's incoming data on the websocket for this channel
        console.log('#messages received: ', data);
        var messageHtml = data.html;
        $('.chat-messages').append(messageHtml);
      }
    }
  );
}