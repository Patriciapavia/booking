import BookingList from '../components/Sessions/SessionsList.tsx';
import { sessionsSelector, fetchProducts } from '../slices/sessions.ts'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useAppDispatch } from '../slices/index.ts';

export default function SessionsPage() {
    const { sessions } = useSelector(sessionsSelector)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    return (
        <main className='w-4/5 max-w-[80rem] my-12 mx-auto'>
            <header>
                <h2 className='mt-8 mb-2 text-lg text-teal-500'>Available items for booking</h2>
                <p>
                    These swimming sessions cover a range of objectives, from technique improvement to endurance building and recovery, providing a well-rounded training program for swimmers of all levels. Adjust the intensity and duration of each session based on individual fitness levels and goals.                </p>
            </header>
            <BookingList sessions={sessions} />
        </main>
    );
}
