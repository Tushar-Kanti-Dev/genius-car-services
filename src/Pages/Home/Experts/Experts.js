import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 101, name: 'John Tohn', photo: expert1},
    {id: 102, name: 'Wille', photo: expert2},
    {id: 103, name: 'Mentions', photo: expert3},
    {id: 104, name: 'Robart', photo: expert4},
    {id: 105, name: 'Healling', photo: expert5},
    {id: 106, name: 'Waksing', photo: expert6},

]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>--Our Experts--</h1>
            <div className="row ">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert = {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;