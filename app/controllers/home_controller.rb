class HomeController < ApplicationController
  def index
    @chatrooms = Chatroom.all
    @chatroom =Chatroom.new
  end
end
