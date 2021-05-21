import React from "react"

class Home extends React.Component {
    state = {
        posts: null
    }

    componentDidMount = async () => {
        this.setState({ posts: await this.props.crud.get() })
    }

    render() {
        return (
            <>
                <div>Hello</div>
                <div>World</div>
            </>
        )
    }
}

export default Home
