import { Component } from "react"
import { Container, Row, Col, Button, Modal, Form, } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"


class ProductPage extends Component {

    state = {

        product: null,
        showModal: false
    }

    componentDidMount = async () => {

        this.setState({ product: await this.props.crud.products.get(this.props.match.params.id) })
    }

    handleModalClose = () => {
        this.setState({showModal: false})
    }

    render() {
        const { product } = this.state
        return <Container>
            <Row>
                <Col>
                    {product && (
                        <>
                            <h3>{product.name}</h3>
                            <img src={product.image ? product.image : product.imageUrl ? product.imageUrl : "https://via.placeholder.com/420x200?text=HELLO%20WORLD"} />
                            <p>{product.description}</p>
                            <span>{product.price}</span>
                            <Button onClick={() => this.setState({ showModal: true })}>Edit/Delete Product</Button>
                            {this.state.showModal && <EditModal history={this.props.history} crud={this.props.crud} product={this.state.product} show={this.state.showModal} close={this.handleModalClose}></EditModal>}
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    }
}

class EditModal extends Component {

    state = {
       ...this.props.product
    }

    submitEdit = async (e) => {
        e.preventDefault()

        try {
            const response = await this.props.crud.products.put(this.state._id, this.state)
            console.log(response)
            
        } catch (error) {
            console.error(Error)
        }

    }

    submitDelete = async (e) => {

        try {
            const response = await this.props.crud.products.delete(this.state._id)
            

            
            this.props.history.push("/")
        } catch (error) {
            console.table(error)
        }

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
                    <Form onSubmit={(e) => this.submitEdit(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control required value={this.state.name} onChange={e => this.setState({ name: e.target.value })} size="lg" placeholder="Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control required value={this.state.brand} onChange={e => this.setState({ brand: e.target.value })} size="lg" placeholder="Brand" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control required value={this.state.description} onChange={e => this.setState({ description: e.target.value })} size="lg" placeholder="Description" />
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" min="0" max="99999" required value={this.state.price} onChange={e => this.setState({ price: e.target.value })} size="lg" placeholder="Price" />
                            </Col>
                            <Col>
                                <Form.Label>Category</Form.Label>
                                <Form.Control required value={this.state.category} onChange={e => this.setState({ category: e.target.value })} size="lg" placeholder="Category" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control value={this.state.imageUrl} onChange={e => this.setState({ imageUrl: e.target.value })} size="lg" placeholder="Image URL" />
                            </Col>
                            <Col className="mt-3">
                                <Form.Label className="">... or upload</Form.Label>
                                <Form.Control onChange={e => this.setState({ image: e.target.files[0] })} type="file" />
                            </Col>
                        </Row>
                    </Form.Group>
                    
                     </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                     </Button>
                        <Button type="submit" variant="primary">Send Changes</Button>
                        <Button onClick={(e) => this.submitDelete(e)} variant="danger"><Icon.TrashFill/></Button>
                    </Modal.Footer>

                </Form>
                </Modal>
            </>

        )
    }
}


export default ProductPage