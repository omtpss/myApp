import React, { useState } from "react";

function Portfolio() {

    const [showMore, setShowMore] = useState(false);

    const PortfoliData = [
        { id: 1, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
        { id: 2, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
        { id: 3, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' },
        { id: 4, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
        { id: 5, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
        { id: 6, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' },
        // { id: 7, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
        // { id: 8, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
        // { id: 9, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' }
    ]

    return (
        <div className="sectionPadding" style={{ paddingBottom: 0 }}>
            <div className="container">
                <div className="sectionTitleWrap textCenter">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolioRow">
                    {PortfoliData?.slice(0, 3).map((data) => (
                        <div className="porfolioCol">
                            <div className="porfolioCard">
                                <div className="porfolioImg">
                                    {<img src={(data.img)} alt="" />}
                                </div>
                                <div className="porfolioContent">
                                    <p className="textMd">{data.title}</p>
                                    <h4 className="subTitle">{data.decs}</h4>
                                </div>
                            </div>
                        </div>
                    ))}

                    {showMore && PortfoliData?.slice(3).map((data) => (
                        <div className="porfolioCol">
                            <div className="porfolioCard">
                                <div className="porfolioImg">
                                    {<img src={(data.img)} alt="" />}
                                </div>
                                <div className="porfolioContent">
                                    <p className="textMd">{data.title}</p>
                                    <h4 className="subTitle">{data.decs}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="textCenter" style={{ marginTop: 24 }}>
                    <button type="button" className="primaryBtn" onClick={() => setShowMore(true)}>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;