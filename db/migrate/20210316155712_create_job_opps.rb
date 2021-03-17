class CreateJobOpps < ActiveRecord::Migration[6.1]
  def change
    create_table :job_opps, id:false do |t|
      t.primary_key :id
      t.string :job_title
      t.string :company_name
      t.text :url
      t.string :job_source

      t.timestamps
    end
  end
end
