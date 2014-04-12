class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :latitude
      t.string :longitude
      t.timestamp :photographed_at

      t.timestamps
    end
  end
end
