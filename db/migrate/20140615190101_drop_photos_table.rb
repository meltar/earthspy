class DropPhotosTable < ActiveRecord::Migration
  def up
		drop_table :photos
  end

	def down
		create_table :photos do |t|
			t.datetime :photographed_at
			t.float :latitude
			t.float :longtitude
		end
	end
end
