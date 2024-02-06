import SessionItem from './BookingItem.tsx';

type SessionsListProps = {
    sessions: {
        id: string;
        title: string;
        summary: string;
        image: string;
    }[];
};

export default function SessionsList({ sessions }: SessionsListProps) {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 p-4 rounded-md'>
            {sessions.map((session) => (
                <li key={session.id}>
                    <SessionItem {...session} />
                </li>
            ))}
        </ul>
    );
}
