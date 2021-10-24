import React, { Component } from "react";

class MovieCard extends Component {
    movie = {};
    constructor(props) {
        super(props);

        this.movie = props.movie;
        }

    render() {
        return (
          
                <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                  <div class="card h-100">
                    <img
                      src={this.movie.image_url}
                      class="card-img-top"
                      alt="skilvul"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Gintama: The Final</h5>
                      <h6 class="card-subtitle mb-2">
                        <span class={`badge ${this.movie.type === "TV" ? "bg-danger" : "bg-success"} bg-success`}>{this.movie.type}</span>
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
                      </p>
                    </div>
                    <div class="card-body">
                      <a
                        href={this.movie.url}
                        class="btn btn-primary w-100 text-uppercase"
                      >
                        readmore
                      </a>
                    </div>
                  </div>
                </div>
        
          
        );
    }
}
    
export default MovieCard;
    

