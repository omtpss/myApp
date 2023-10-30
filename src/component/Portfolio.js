



function Portfolio() {

    const data = [
        { id: 1, title: 'Web Design', decs: 'Business Website Design' },
        { id: 2, title: 'Web Development', decs: 'Food Website Design' },
        { id: 3, title: 'Digital Marketing', decs: 'App Marketing' }
    ]

    return (
        <div className="sectionPadding" style={{ paddingBottom: 0 }}>
            <div className="container">
                <div className="sectionTitleWrap textCenter">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolioRow">
                    {data.map((user) => (
                        <div className="porfolioCol">
                            <div className="porfolioCard">
                                <div className="porfolioImg">
                                    <img src="./images/portfolio01.jpg" alt="about-img"></img>
                                </div>
                                <div className="porfolioContent">
                                    <p className="textMd">{user.title}</p>
                                    <h4 className="subTitle">{user.decs}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="textCenter" style={{ marginTop: 24 }}>
                    <button type="button" className="primaryBtn">View More</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;