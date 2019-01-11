class VenuesController < ApplicationController
  FOURSQUARE_API_URL = 'https://api.foursquare.com/v2/venues/explore'.freeze

  def index
    query = Rack::Utils.build_nested_query(
      client_id: Rails.application.credentials.foursquare_client_id,
      client_secret: Rails.application.credentials.foursquare_client_secret,
      ll: "#{params[:lat]},#{params[:long]}",
      v: "20190110"
    )

    response = Net::HTTP.get(URI("#{FOURSQUARE_API_URL}?#{query}"))
    render json: response
  end
end
