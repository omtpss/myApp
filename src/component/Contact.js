
function Contact() {
    return (
        <div className="contactWrap sectionPadding">
            <div className="container">
                <div className="sectionTitleWrap textCenter titleSpace">
                    <h2>Contact Us</h2>
                </div>
                <div className="contactForm">
                    <div className="formGroup">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="formGroup">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="formGroup">
                        <input type="number" placeholder="Phone"/>
                    </div>
                    <div className="formGroup fullWidth">
                        <textarea type="text" placeholder="Message"/>
                    </div>
                    <div className="formGroup fullWidth">
                        <button type="button" className="primaryBtn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;