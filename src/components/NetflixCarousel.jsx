import { Component } from "react";
import { Carousel, Col, Container, Row, Spinner } from "react-bootstrap";

class NetflixCarousel extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  handleFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=89b39348&s=" +
          this.props.movie
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        alert("Something went wrong :(");
        this.setState({ ...this.state, isLoading: false });
      }
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.handleFetch();
  }
  render() {
    return (
      <Container fluid>
        {this.state.isLoading && <Spinner animation="border" />}
        <h5 className="text-light my-3">{this.props.movie}</h5>
        <Carousel indicators={false} className="my-2">
          <Carousel.Item>
            <Row>
              {this.state.movies
                .filter((movie, index) => index < 6)
                .map((movie) => (
                  <Col md={2} key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="carousel-image-style"
                    />
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.movies
                .filter((movie, index) => index < 12 && index >= 6)
                .map((movie) => (
                  <Col md={2} key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="carousel-image-style"
                    />
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
export default NetflixCarousel;
