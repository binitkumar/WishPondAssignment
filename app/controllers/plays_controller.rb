class PlaysController < ApplicationController
  def index
    @plays = Play.all
    @image_collection = Photo.get_photos_collection.collect{|pic| url_for(pic) }.to_json 
  end

  def create
    Play.create(
      number: params[:number],
      image_url: params[:image_url]
    )
    render plain: "Data captured.."
  end
end
