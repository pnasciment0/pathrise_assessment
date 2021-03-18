class Api::V1::JobOppsController < ApplicationController
  def index
    opps = JobOpp.all
    render json: opps
  end

  def jobsbyboard
    jobs = JobOpp.where("job_source = ?", params[:job_source])
    render json: jobs
  end

end
