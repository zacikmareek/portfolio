import React from "react"

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>My experience</h1>
            </div>
            <div className="container experience-wraper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021-20xx</h3>
                        <p>Info about my work, soon..</p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-present</h3>
                        <p>Studying at Slovak University of Agriculture in Nitra<br/>Faculty of engineering</p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2021</h3>
                        <p>Brovedani Slovakia<br/>Process engineer and operator of CNC machines</p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2013-2017</h3>
                        <p>Secondary technical School - Nivy 2 Šaľa <br/>electrical engineering</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Experience;
