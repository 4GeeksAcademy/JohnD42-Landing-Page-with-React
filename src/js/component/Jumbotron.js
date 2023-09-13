import React from "react";

const Jumbotron = () => {
    return (
            <div className="row g-0">
                <div className="col-12">
                    <div className="jumbotron bg-light p-4 mt-4">
                        <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
                        <h5 className="noBold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</h5>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button"><strong>Call to action!</strong></a>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Jumbotron
