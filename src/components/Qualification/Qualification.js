import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tab">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : 'qualification__button button--flex'}
                        onClick={() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap qualification__icon'></i>Education

                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : 'qualification__button button--flex'}
                        onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt qualification__icon'></i>Experience

                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    CSE (Computer Science and Engineering)
                                </h3>
                                <span className='qualification__subtitle'>East-West University, Bangladesh</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>2017-2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>Programming Hero</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>2021-2022
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Front-end Development
                                </h3>

                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>2021-present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Back-end Development
                                </h3>

                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>2021-Present
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </section>
    );
};

export default Qualification;
