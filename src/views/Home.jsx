import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import "../styles/home.css";

class Home extends React.Component {
    state = {
        posts: null,
        isLoading: true
    };

    componentDidMount = async () => {
        this.setState({ posts: await this.props.crud.products.getAll() });
        this.setState({ isLoading: false });
        console.log(this.state.posts);
    };

    render() {
        return (
            <>
                <Container className="mt-4 homeContainer">
                    <Row>
                        {this.state.isLoading && <Spinner animation="border" variant="primary" />}
                        {!this.state.isLoading &&
                            this.state.posts.map((item) => (
                                <div className="col-4 mb-4 lg-4">
                                    <div className="card border-secondary">
                                        <div className="imageDiv">
                                            <img src={item.image} className="img-fluid " alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-title">
                                                <strong>{item.name}</strong>
                                            </h6>
                                            <p className="card-text">{item.description}</p>
                                            <hr />
                                            <div className="row d-flex justify-content-between">
                                                <div className="item-price">
                                                    <strong> ${item.price} </strong>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div id="icon-2">
                                                        <a href="/">
                                                            <i className="fa fa-lg fa-shopping-cart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;
