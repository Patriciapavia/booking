import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/UI/Button.tsx';
import { sessionsSelector } from '../slices/sessions.ts';
import { useAppDispatch } from '../slices/index.ts';
import { bookSessionAction } from '../slices/session.ts';
import { bookSessionSelector } from '../slices/session.ts';

export default function SessionPage() {
    const params = useParams<{ id: string }>();
    const { sessions } = useSelector(sessionsSelector);
    const { bookSession } = useSelector(bookSessionSelector);

    const { loading } = bookSession;

    const dispatch = useAppDispatch();

    const sessionId = params.id;
    const loadedSession = sessions.find((session) => session._id === sessionId);

    if (!loadedSession) {
        return (
            <main id='session-page'>
                <p>No session found!</p>
                <div >
                    <Link to='/sessions'>
                        Go back
                    </Link>
                </div>

            </main>
        );
    }

    function handleStartBooking() {
        if (!loadedSession) {
            return;
        }
        dispatch(bookSessionAction(loadedSession));
        showToast('Session booked successfully');
    }

    function showToast(message: string, duration = 3000) {
        const toast = document.getElementById('toast') as HTMLElement;
        toast.textContent = message;
        toast.classList.remove('hidden');
        // Hide the toast after a specified duration
        setTimeout(() => {
            toast.classList.add('hidden');
        }, duration);
    }

    return (
        <main className='w-4/5 max-w-[60rem] my-12 mx-auto'>
            <div
                id='toast'
                className='fixed top-5 left-1/2 transform -translate-x-1/2 bg-teal-800 text-white p-4 rounded-md hidden'
            ></div>

            <article>
                <header className='flex md:flex-nowrap lg:flex-nowrap flex-wrap gap-6'>
                    <img
                        className='w-80 h-52 object-cover rounded-lg mb-8'
                        src={loadedSession.image}
                        alt={loadedSession.title}
                    />
                    <div>
                        <h2 className='mb-2 text-4xl text-gray-400'>
                            {loadedSession.title}
                        </h2>
                        <time
                            className='text-gray-400 text-base'
                            dateTime={new Date(loadedSession.date).toISOString()}
                        >
                            {new Date(loadedSession.date).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </time>
                        <p className='text-center md:text-right'>
                            <Button disabled={loading} onClick={handleStartBooking}>
                                Book Session
                            </Button>
                        </p>
                    </div>
                </header>
                <p className='max-w-[60rem] mx-auto p-4 rounded-lg shadow-mdtext-lg whitespace-pre-wrap animate-fade-slide-down'>
                    {loadedSession.description}
                </p>
            </article>
        </main>
    );
}
