import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>Some of my projects</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>

                        <i className='uil uil-mobile-android services__icon'></i>
                        <h3 className='services__title'>Phone <br /> Mania </h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}> View More <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' ></i>

                            <h3 className='services__modal-title'>Phone Mania</h3>
                            <p className='services__modal-description'>Phone Mania is a used phones resale website. </p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Users can sign up as buyers/users or sellers.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> If the user is signed up as buyers he/she can book items and buy them.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> If the user is a seller he/she can buy items from other seller, add product to sell and advertise or delete, see his own products in seller dashboard.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> Admin can delete any user(seller,buyer), verify seller, or make other users admin in admin panel.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> JWT token is used to verify users.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> Technologies: React Js, React Router, React Hooks, Tailwind CSS, Firebase, DaisyUI, NodeJs, ExpressJs, MongoDB, and React Stripe.</p>
                                </li>
                            </ul>
                            <div className='services__modal-link'>
                                <a href="https://phone-menia.web.app/" className="service__button-link">Live Site <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                                <a href="https://github.com/sourov101/Phone-Mania-used-products-resale-clients-side" className="service__button-link">Github <br />Client Side <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                                <a href="https://github.com/sourov101/Phone-Mania-used-products-resale-server-side" className="service__button-link">Github <br />Server Side <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>

                        <i className='uil uil-plane-departure services__icon'></i>
                        <h3 className='services__title'>Paradise <br />Travel  </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className='services__button'> View More <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                            <h3 className='services__modal-title'>Paradise travel </h3>
                            <p className='services__modal-description'>Paradise travel is a travel review site where users can review their experiences. </p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Users can sign up or log in with google to add services they want to provide or review the services provided on the website.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>  In the My review section user can see only his/her reviews and also can delete or edit it.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>  Add service is a private route, as well as my review user, has to log in to visit these pages.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>  In-home users can see our packages for the services.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>  Also user can see the gallery of the traveled places.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> Technologies: React Js, React Router, Firebase, Node Js, Express Js, Tailwind CSS, DaisyUI, and MongoDB.</p>
                                </li>
                            </ul>
                            <div className='services__modal-link'>
                                <a href="https://paradice-travel.web.app/" className="service__button-link">Live Site <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                                <a href="https://github.com/sourov101/Paradise-Travel-client-side" className="service__button-link">Github <br />Client Side <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                                <a href="https://github.com/sourov101/Paradise-Travel-server-side" className="service__button-link">Github <br />Server Side <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>

                        <i className='uil uil-server-network-alt services__icon'></i>
                        <h3 className='services__title'>IT <br />Source </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className='services__button'> View More <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                            <h3 className='services__modal-title'>IT source </h3>
                            <p className='services__modal-description'>IT source is IT related learning website. </p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>There are 6 courses a person can learn, also provided with a pdf file download system.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> Learners also can checkout courses if they wish.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> User can sign up on the register page.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>  User can log in with email, google account, and GitHub account.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'> Technologies: React Js, React Router, React Hooks, Tailwind CSS, DaisyUI Node Js, Firebase, and MongoDB.</p>
                                </li>
                            </ul>
                            <div className='services__modal-link'>
                                <a href="https://it-source-f7e77.web.app/" className="service__button-link">Live Site <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                                <a href="https://github.com/sourov101/IT-Source-client-side" className="service__button-link">Github <br />Client Side <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                                <a href="https://github.com/sourov101/IT-Source-server-side" className="service__button-link">Github <br />Server Side <i className="bx bx-right-arrow-alt service__button-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;