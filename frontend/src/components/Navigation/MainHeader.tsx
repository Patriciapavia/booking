import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import UpcomingSessions from '../Sessions/UpComingSessions.js';
import Button from '../UI/Button.jsx';

export default function MainHeader() {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);
    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true);


    }

    function hideUpcomingSessions() {
        setUpcomingSessionsVisible(false);
    }
    const listStyle = 'no-underline pb-1 border-b-2 border-transparent hover:text-teal-300'

    return (
        <>
            {upcomingSessionsVisible && (
                <UpcomingSessions onClose={hideUpcomingSessions} />
            )}
            <header className='w-4/5 max-w-[80rem] mx-auto my-8 flex justify-between items-center hover:border-teal-300 active:border-teale-300 focus:border-teal-300 focus:outline-none'>
                <h1 className='m-0 lg:text-lg text-sm text-teal-500'>7 Days</h1>
                <nav className='text-sm lg:text-lg'>
                    <ul className='flex gap-6 items-center text-teal-500'>
                        <li className={listStyle}>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Our Mission</NavLink>
                        </li >
                        <li className={listStyle}>
                            <NavLink to="/sessions" className={({ isActive }) => isActive ? 'active' : ''}>Explore our sessions</NavLink>
                        </li>
                        <li >
                            <Button onClick={showUpcomingSessions}>Upcoming Booking</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
