
function setupRoom(roomId)
{
  console.log("subscriptions chat with id",roomId);
  App.chat = App.cable.subscriptions.create(
    { channel: "ChatChannel", id: roomId },

    {
      connected: function() {
        console.log("connected chat room!");
      },
      disconnected: function() {
        console.log("disconnected chat room!");
      },
      received: function(data) {
        console.log(data);
        $(".js-chat-messages").append(data.html);
      }
    }

  )
}
