import React, { Component } from 'react'

export default class ChuyenTrang extends Component {

    render() {
        const { match } = this.props
        return (
            <div>
                <h1>Chi tiet san pham:{match.params.title}</h1>

            </div>
        )
    }
}
