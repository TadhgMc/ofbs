import React from 'react';

function LandingPage(){
    return(<>
        <div>
            <a href='/menu'><button type='button' className='btn btn-primary'>Menu</button></a>
            <a href='/schedule'><button className='btn btn-success'>Schedule an Appointment</button></a>
        </div>
    </>)
}

export default LandingPage;