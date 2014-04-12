class AddLatAndLongToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :latitude, :float
    add_column :photos, :longtitude, :float
  end
end
