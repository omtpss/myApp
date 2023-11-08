function Marque() {

    const ImpressData = [
        { text: 'Instead of interrupting, work on attracting', },
        { text: `Just because you are the loudest, doesn't make you right` },
        { text: 'Content is king' },
        { text: 'Master the topic, the message, and the delivery' },
        { text: 'Either write something worth reading or do something worth writing about' }
    ]

    return (
        <section className="digitalMarque lightBg">
            <div className="container">
                <div className="marqueInner">
                    <div className="marqueTrack">
                        <div className="content">
                            <h1>
                                {ImpressData.map((data, index) => {
                                    return (
                                        <>
                                            <span>{ data.text}</span><i>. </i>
                                        </>
                                    )
                                })}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marque;