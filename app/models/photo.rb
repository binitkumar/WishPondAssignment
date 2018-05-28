class Photo < ApplicationRecord
  has_one_attached :content

  def self.get_photos_collection
    Photo.all.order("RANDOM()").limit(10).collect(&:content)
  end
end
