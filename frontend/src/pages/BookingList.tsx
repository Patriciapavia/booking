import BookingList from '../components/Bookings/BookingList.tsx';
import { SESSIONS } from '../../dummy-sessions.ts'; // normally, we would probably load that from a server

export default function SessionsPage() {
    return (
        <main className='w-4/5 max-w-[80rem] my-12 mx-auto'>
            <header>
                <h2 className='mt-8 mb-2 text-lg text-teal-500'>Available items for booking</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dolor amet praesentium doloribus ex accusantium voluptatum perspiciatis laborum, alias nobis quo, cupiditate sapiente? Beatae ea officia nemo sed vel! Tempore.
                </p>
            </header>
            <BookingList sessions={SESSIONS} />
        </main>
    );
}
