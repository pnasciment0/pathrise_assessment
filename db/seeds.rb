# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BASE_FILE_PATH = File.dirname(__FILE__)

require 'csv'
require File.join(BASE_FILE_PATH, "../app/modules/job_source.rb")

JobOpp.destroy_all

csvPath = File.join(BASE_FILE_PATH, "../lib/assets/job_source_resolution.csv")

if File.exist?(csvPath)
    seeded = 0
    CSV.foreach(csvPath, headers: true).with_index do |row, i|
        JobOpp.create!(
            {
                id: row["ID (primary key)"],
                job_title: row["Job Title"],
                company_name: row["Company Name"],
                url: row["Job URL"],
                job_source: row["Job Source"]
            }
        )
        if seeded % 1000 == 0
            p "Seeded #{i} records..."
        end
        seeded += 1
    end

    p "Successfully seeded Job table with #{seeded} records."
else
    p "No CSV found, nothing done."
end