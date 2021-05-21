import React from "react"

class Add extends React.Component {
    state = {
        name: "3310", //REQUIRED
        brand: "nokia", //REQUIRED
        description: "somthing longer", //REQUIRED
        price: 100, //REQUIRED
        category: "smartphones", //REQUIRED
        imageUrl: "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80"
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

export default Add
