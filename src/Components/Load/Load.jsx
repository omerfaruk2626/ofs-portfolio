import React from 'react';
import './Load.scss';

function Load() {
    return (
        <div className='load'>
            <p className="coming-soon">Hi, I am Full Stack Developer</p>
            <div className="loader-container">
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
            </div>
            <div className="coming-soon">Coming Soon</div>
            <div>
                {/* <img src={require('../../css/study.gif')} className="study" alt="study" /> */}
            </div>
            <footer expand="lg">
                <p className='text-white'>© 2024 Omer Faruk Sivri</p>
            </footer>
        </div>
    );
}

export default Load;
