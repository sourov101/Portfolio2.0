import React from 'react';

const Backend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Back-end Developer</h3>
            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className='skills__name'>Express.js</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className='skills__name'>Node.js</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className='skills__name'>MongoDB</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills__data'>
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className='skills__name'>FireBase</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Backend;