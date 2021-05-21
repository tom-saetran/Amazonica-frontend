import React from "react";
import { Container, Row, Spinner, Button, Modal } from "react-bootstrap";
import "../styles/home.css";
import { Link } from "react-router-dom"
import * as Icon from "react-bootstrap-icons"


class Home extends React.Component {
    state = {
        posts: null,
        isLoading: true,
        modalShow: false
    };

    componentDidMount = async () => {
        this.setState({ posts: await this.props.crud.products.getAll() });
        this.setState({ isLoading: false });
        console.log(this.state.posts);
    };

    modalClose = (e) => {
        e.stopPropagation()
        this.setState({modalShow: false})
    }
    render() {
        return (
            <>
                <Container className="mt-4 homeContainer">
                    <Row>
                        {this.state.isLoading && <Spinner style={{ position: "absolute", left: "50%", translatey: "transform(50%)" }} animation="border" variant="primary" />}
                        {!this.state.isLoading &&
                            this.state.posts.map((item) => (
                                <div onClick={(e) => this.setState({modalShow: true})} key={item._id} className="col-4 mb-4 lg-4">
                                    
                                    <div className="card border-secondary">
                                        <div className="imageDiv">

                                            <img className="productImage" src={item.image ? item.image : item.imageUrl ? item.imageUrl : "https://via.placeholder.com/420x200?text=HELLO%20WORLD"} className="img-fluid " alt="..." />
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
                                                <Link  to={"ProductPage/" + item._id}>
                                                <Button variant="primary">
                                                Edit/Delete Product
                                                
                                                </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.modalShow && <ReviewsModal id={item._id} crud={this.props.crud} show={this.state.modalShow} close={this.modalClose}></ReviewsModal>}
                                </div>
                            ))}
                    </Row>
            </Container>
            </>
        );
    }
}

class ReviewsModal extends React.Component {

    state = {
        reviews: null
    }

    componentDidMount = async (e) => {
       
        let response = await this.props.crud.reviews.getAll(this.props.id)
        this.setState({reviews: response})
        console.log(response)

    }
    render() {

        return (
            <>
                
                <Modal
                    show={this.props.show}
                    onHide={this.props.close}
                    backdrop="static"
                    keyboard={false}
                    >
                    
                    <Modal.Header >
                        <Modal.Title>Reviews</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       {this.state.reviews && this.state.reviews.length > 0 && this.state.reviews.map(review => 
                       
                           (
                               <div key={review._id}>
                                   <p>{review.comment}</p>
                                   <span>{review.rate}</span>
                                   
                               </div>
                           )
                       
                       )}
                        
                        {!this.state.reviews && <Spinner style={{ position: "absolute", left: "50%", translatey: "transform(50%)" }} animation="border" variant="primary" />} 
                    
                     </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={(e) => this.props.close(e)}>
                            Close
                     </Button>
                       
                       
                    </Modal.Footer>

       
                </Modal>
            </>

        )
    }
}






export default Home;
