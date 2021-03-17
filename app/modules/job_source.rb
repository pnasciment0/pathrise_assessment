require 'csv'
require 'json'

BASE_FILE_PATH = File.dirname(__FILE__)

jsonData = File.read(File.join(BASE_FILE_PATH, "../../lib/assets/jobBoards.json"))
parsed = JSON.parse(jsonData)
jobBoards = parsed["job_boards"]

$jobBoardNames = Hash.new

jobBoards.each do |job|
    $jobBoardNames[job["root_domain"]] = job["name"]
end

puts $jobBoardNames

def isFromJobBoards?(url)
    domain = ''
    if url.split(".").length() > 2 #url is of type xxx.xxxxxxx.xxx
        domain = url.partition(".").last
    else
        domain = url
    end
    if $jobBoardNames.key?(domain)
        return $jobBoardNames.fetch(domain)
    else
        return false        
    end
end

def determineJobSource(company, url) 
    urlDropHttps = url.split("://")[1] # get rid of http/https
    if !urlDropHttps # deals with Leasepace edgecase where url is literally just http:// lol
        return "Unknown"
    end
    hostName = urlDropHttps.split('/')[0] # get rid of paths
    res = ''
    cleanedCompany = company.downcase.delete(' ') # Home Care Pulse to homecarepulse to detect company website
    if isFromJobBoards?(hostName)
        res = isFromJobBoards?(hostName)
    elsif url.include? cleanedCompany
        res = "Company Website for #{company}"
    else
        res = "Unknown"
    end
    return res
end

$outputCsv = File.open(File.join(BASE_FILE_PATH, "../../lib/assets/job_source_resolution.csv"), "w")
$outputCsv << "ID (primary key),Job Title,Company Name,Job URL,Job Source\n"

jobOpps = CSV.read(File.join(BASE_FILE_PATH, "../../lib/assets/job_opportunities.csv"), headers:true)
sortedJobOpps = jobOpps.sort_by{|line| line["ID (primary key)"].to_i}

sortedJobOpps.each do |row|
    id = row['ID (primary key)']
    job = row['Job Title'].strip
    company = row['Company Name'].strip.gsub("\n", " ").gsub("\r", "").gsub("\"", "'")
    url = row['Job URL']
    if job.include? ","
        job = "\"#{job}\""
    end
    if company.include? ","
        company = "\"#{company}\""
    end
    unless url.nil?
        src = determineJobSource(company, url)
        if url.include? ","
            url = "\"#{url}\""
        end
        # puts src
        $outputCsv << "#{id},#{job},#{company},#{url},#{src}\n"
    else
        $outputCsv << "#{id},#{job},#{company},#{url},Unknown\n" #missing URL necessarily means unknown job source
    end
end

module JobSource 
end

puts "Successfully outputted job_source_resolution.csv to #{File.join(BASE_FILE_PATH, "../../lib/assets/job_source_resolution.csv"}"