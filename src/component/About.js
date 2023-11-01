
function About() {
    return (
        <section className="aboutWrap sectionPadding" id='about'>
            <div className="container">
                <div className="aboutRow">
                    <div className="aboutCol">
                        <div className="aboutImg">
                            <img src="./images/about.png" alt="about-img"></img>
                        </div>
                    </div>
                    <div className="aboutCol">
                        <div className="aboutDetail">
                            <div className="sectionTitleWrap">
                                <h2>About</h2>
                            </div>
                            <h4 className="subTitle">I have 5+ years of experiences in Frontend Development for give you better services.</h4>
                            <p className="textMd">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite</p>
                            <div className="aboutFact">
                                <p>
                                    <span>120+</span>
                                    Projects Completed
                                </p>
                                <p>
                                    <span>10+</span>
                                    Awards Win
                                </p>
                                <p>
                                    <span>12k</span>
                                    Happy clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;