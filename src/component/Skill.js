
import React from 'react';

function Skill() {
    // useEffect(() => {
    //     window.onload = () => {
    //       const element = document.getElementById('myElementId');
    //       element.classList.add('myNewClass');
    //     };
    //   }, []);



    const skillData = [
        { skill: 'Html', skillCount: 98 },
        { skill: 'Css', skillCount: 90 },
        { skill: 'Bootstrap', skillCount: 80 },
        { skill: 'Sass', skillCount: 60 },
        { skill: 'Javascript', skillCount: 40 },
        { skill: 'React Js', skillCount: 50 },
    ];


    return (
        <section className="SkillWrap sectionPadding lightBg" id='services'>
            <div className="container">
                <div className="sectionTitleWrap textCenter titleSpace">
                    <h2>My Skills</h2>
                    <p className="textMd">I Like To Craft Beautiful And Scalable Web Products</p>
                </div>
                <div className="skillRow">
                    {skillData.map((items, index) => {
                        return (
                            <div key={index} className="skillBarWrap">
                                <p>{items.skill}</p>
                                <div id='myElementId' className='skillBar' style={{ width: `${items.skillCount}%` }}>
                                    <span className="skill-count1">{items.skillCount}%</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skill;