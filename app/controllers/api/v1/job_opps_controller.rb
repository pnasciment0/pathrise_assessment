class Api::V1::JobOppsController < ApplicationController
  def index
    opps = JobOpp.all
    render json: opps
  end

  def show
    if jobopp
      render json: jobopp
    else
      render json: jobopp.errors
    end
  end

  private

  def jobopp
    @jobopp ||= JobOpp.find(params[:id])
  end

end
