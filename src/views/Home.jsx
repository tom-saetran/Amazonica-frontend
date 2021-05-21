import React from "react";
import { Container, Row, item } from "react-bootstrap";
import "../styles/home.css";

class Home extends React.Component {
    state = {
        posts: null
    }

    componentDidMount = async () => {
        //this.setState({ posts: await this.props.crud.get() })
    }


    render() {
        return (
            <>
                <Container className="mt-4 homeContainer">
                    <Row>
                        <div className="col-4 mb-4 lg-4">
                            <div className="card border-secondary">
                                <div className="imageDiv">
                                    <img src="https://source.unsplash.com/random" className="img-fluid " alt="..." />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">
                                        <strong>{/* ${item.name} */}Testing</strong>
                                    </h6>
                                    <p className="card-text">{/* ${item.description} */}Testing</p>
                                    <hr />
                                    <div className="row d-flex justify-content-between">
                                        <div className="item-price">
                                            <strong>{/* $${item.price} */}Testing</strong>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div id="icon-2">
                                                <a href="">
                                                    <i className="fa fa-lg fa-shopping-cart"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;
