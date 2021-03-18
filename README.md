# Pathrise Assessment March 2021

Paulo Nascimento's submission for the Pathrise Software Engineer Take-Home Assessment

## a. Brief Overview

### Tech Stack

**Frontend**: React.JS

**Backend**: Ruby on Rails

**Database**: PostgreSQL

**Hosting solution**: Heroku

### Notes

The app successfully loads in all the job sources, and provides extra webpages for each one to list all of the associated job lists. The app runs fast and is clearly organized/structured. React components made development easy, as the same code handles the logic for all job boards. The Rails-built API offers an index to display all the job lists, as well as a method to search for jobs by job board name. The React on Rails architecture centralizes both the backend and frontend code to simplify logic and prevent from having to run two webservers on development. 

## b. Job Source Resolution

The logic to resolve the input CSV is located at: `/app/modules/job_source.rb`. This file is then required by `app/db/seeds.rb` to ensure the presence of the CSV outputted by `job_source.rb`.

## c. Third Party Libraries

Bootstrap is used on the frontend. It provides access to easy yet elegant styling for the table of job lists, as well as the cards of the job sources themselves. It also simplifies web accessibility, making it easy to ensure nothing breaks across different screen sizes. The relevant `<script>` and `<link>` files are located in `app/views/layouts/application.html.erb`. 

Webpack and Babel are used to simplify the process of bundling and minifying source JS & CSS files to ensure the code served to the user is lightweight and minified. These technologies are bundled in the `rails` CLI utility, so no extra configuration was necessary.

Popper and jQuery were added, but ultimately not used.

## d. App URL

The app can be viewed at: https://pathrise-assessment.herokuapp.com/#/

## e. Output CSV

Located at: `lib/assets/job_source_resolution.csv`.

## f. Table of Job Sources and Counts

```
    {
        "Google" => 160, 
        "Glassdoor" => 295, 
        "AngelList" => 120, 
        "LinkedIn" => 6563, 
        "Dribble" => 0, 
        "Indeed" => 890, 
        "Triplebyte" => 13, 
        "Hired" => 0, 
        "Wayup" => 0, 
        "YCombinator Jobs" => 0, 
        "Work At A Startup" => 4, 
        "Jopwell" => 0, 
        "Tech Ladies" => 2, 
        "Intern Supply" => 0, 
        "Underdog" => 0, 
        "Stella" => 0, 
        "ZipRecruiter" => 64, 
        "SimplyHired" => 27, 
        "Gamasutra" => 0, 
        "Huntr Jobs" => 0, 
        "Lever" => 2649, 
        "Greenhouse" => 3036, 
        "Monster" => 4, 
        "Github" => 0, 
        "Stackoverflow" => 2, 
        "Employbl" => 0, 
        "Who Is Hiring?" => 0, 
        "Jobvite" => 381, 
        "SmartRecruiters" => 69, 
        "Government Jobs" => 1,
        "Company Websites" => 2094
    }
```

This information can also be found printed out on the console. To generate the job count posted on company websites, a simple PostresQL query was written to count them: 

`SELECT * from job_opps WHERE Job_source LIKE '%Company Website%';`

The rest of the data was compiled through the `generateJobsByBoardTally()` method in `app/javascript/components/Home.jsx`.