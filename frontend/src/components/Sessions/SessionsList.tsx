import SessionItem from './SessionItem.tsx';
import { Session } from '../../utils/utils.ts';
type SessionsListProps = {
    sessions: Session[]
};

export default function BookingList({ sessions }: SessionsListProps) {
    console.log(sessions, 'sessions')
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 p-4 rounded-md'>
            {sessions.map((session) => (
                <li key={session._id}>
                    <SessionItem {...session} />
                </li>
            ))}
        </ul>
    );
}
