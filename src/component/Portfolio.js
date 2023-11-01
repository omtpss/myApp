import React, { useState } from 'react';

const PortfolioItems = ({ items }) => {
    const [loadMore, setLoadMore] = useState(3);

    const showNextGroup = () => {
        setLoadMore(loadMore + 3);
    };

    const hasMoreItems = loadMore < items.length;

    return (
        <section className="sectionPadding" style={{ paddingBottom: 0 }}  id='portfolio'>
            <div className='container'>
                <div className="sectionTitleWrap textCenter">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolioRow">
                    {items.slice(0, loadMore).map((data) => (
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
                {hasMoreItems && (
                    <div className="textCenter" style={{ marginTop: 24 }}>
                        <button type="button" className="primaryBtn" onClick={showNextGroup}>Load More</button>
                    </div>
                )}
            </div>  
        </section>
    );
};

const Portfolio = () => {
    const items = [
        { id: 1, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
        { id: 2, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
        { id: 3, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' },
        { id: 4, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio04.jpg' },
        { id: 5, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio05.jpg' },
        { id: 6, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio06.jpg' },
        { id: 7, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio07.jpg' },
        { id: 8, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio08.jpg' },
        { id: 9, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio09.jpg' }
    ];

    return (
        <div>
            <PortfolioItems items={items} />
        </div>
    );
};

export default Portfolio;
