import React from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

class Add extends React.Component {
    state = {
        name: "",
        brand: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
        image: null
    }

    submit = async e => {
        if (!this.state.image && this.state.imageUrl === "") e.preventDefault()
        console.log("Submit")
        let response = await this.props.crud.products.post(this.state)
        console.log(response)

        if(this.state.image) {

        
        const data = new FormData()
        data.append("productImage", this.state.image)

        const responseImage = await this.props.crud.products.postImage(response._id, data)
        console.log(responseImage)
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={e => this.submit(e)}>
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
                            <Col className="pt-4">
                                <Form.Label className="pt-4">... or upload</Form.Label>
                                <Form.Control onChange={e => this.setState({ image: e.target.files[0] })} type="file" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="d-flex mt-3 justify-content-end">
                        <Button type="button" size="lg" variant="dark">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default Add
