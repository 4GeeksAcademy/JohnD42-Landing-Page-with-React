import React from 'react'

const date = new Date();
const year = date.getFullYear()

const Footer = () => {
    return (
        <div className="row bg-dark text-white p-5">
            <div className="col-12 d-flex">
                <p className="mx-auto">
                    Copyright © Your Website {year}
                </p>
            </div>
        </div>
    )
}

export default Footer