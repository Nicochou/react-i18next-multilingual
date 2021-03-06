import React, { Component } from "react";

export default class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      message: ""
    };
   
  }

  componentDidMount() {

    
  }

  render() {

    return (
      <div className="">
        <section id="page-title" data-bg-parallax="images/parallax/5.jpg">
            <div className="container">
                <div className="page-title">
                    <h1>Faq</h1>
                    <span>The most happiest time of the day!.</span>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>General Questions <small>(4)</small></h3>
                        <p>Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam auam quaerat voluptatem.</p>
                        <div className="accordion toggle fancy radius clean">
                            <div className="ac-item ac-active">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Where Can I Find my Purchase Code?</h5>
                                <div className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="ac-item">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Getting Support For Your Item</h5>
                                <div className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="ac-item">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Can I Get A Refund?</h5>
                                <div className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="ac-item">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Which Author Payment Option Do I Choose?</h5>
                                <div sclassName="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>License Terms <small>(4)</small></h3>
                        <p>Tempora incidunt ut labore et dolore magnam auam quaerat voluptatem. Adipisci velit, sed quia non numquam eius modi.</p>
                        <div className="accordion toggle fancy radius clean">
                            <div className="ac-item ac-active">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Becoming an affiliate</h5>
                                <div  className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="ac-item">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Becoming an author</h5>
                                <div  className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="ac-item">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>Our use of your information</h5>
                                <div className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                            <div className="ac-item">
                                <h5 className="ac-title"><i className="fa fa-question-circle"></i>How buying items works</h5>
                                <div  className="ac-content">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
