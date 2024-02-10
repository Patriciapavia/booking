import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SESSIONS } from '../../dummy-sessions.ts';
import Button from '../components/UI/Button.tsx';
import BookSession from '../components/Sessions/BookSession.tsx';
import { sessionsSelector } from '../slices/sessions.ts';

export default function SessionPage() {
    const params = useParams<{ id: string }>();
    const [isBooking, setIsBooking] = useState(false);
    const { sessions } = useSelector(sessionsSelector)


    const sessionId = params.id;
    const loadedSession = sessions.find((session) => session._id === sessionId);

    if (!loadedSession) {
        return (
            <main id="session-page">
                <p>No session found!</p>
            </main>
        );
    }

    function handleStartBooking() {
        setIsBooking(true);
    }

    function handleStopBooking() {
        setIsBooking(false);
    }
    console.log(loadedSession.date, 'loadedSession.date')

    return (
        <main className='w-4/5 max-w-[60rem] my-12 mx-auto'>
            {isBooking && (
                <BookSession session={loadedSession} onDone={handleStopBooking} />
            )}
            <article>
                <header className='flex gap-6'>
                    <img className='w-80 h-52 object-cover rounded-lg mb-8'
                        src={loadedSession.image}
                        alt={loadedSession.title}
                    />
                    <div>
                        <h2 className='mb-2 text-4xl text-gray-400'>{loadedSession.title}</h2>
                        <time className='text-gray-400 text-base' dateTime={new Date(loadedSession.date).toISOString()}>
                            {new Date(loadedSession.date).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </time>
                        <p>
                            <Button onClick={handleStartBooking}>Book Session</Button>
                        </p>
                    </div>
                </header>
                <p className='max-w-[60rem] mx-auto p-4 rounded-lg shadow-mdtext-lg whitespace-pre-wrap animate-fade-slide-down'>{loadedSession.description}</p>
            </article>
        </main>
    );
}
