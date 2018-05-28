class PhotosController < ApplicationController
  def create
    params[:photo][:content].each do |image|
      Photo.create(content: image)
    end

    redirect_to root_path, notice: "Photos uploaded."
  end
end
