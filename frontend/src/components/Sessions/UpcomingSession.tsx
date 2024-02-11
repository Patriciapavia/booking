import { Session } from '../../utils/utils.ts';
import Button from '../UI/Button.tsx';

type UpcomingSessionProps = {
    session: Session;

    onCancel: () => void;
};

export default function UpcomingSession({
    session,
    onCancel,
}: UpcomingSessionProps) {
    return (
        <article className="my-4 p-4 bg-teal-800 rounded-md flex justify-between">
            <div>
                <h3 className='m-0 text-teal-300'>{session.title}</h3>
                <p className='my-2'>{session.summary}</p>
                <time className='text-gray-400 text-base' dateTime={new Date(session.date).toISOString()}>
                    {new Date(session.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </time>
            </div>
            <p>
                <Button textOnly onClick={onCancel}>
                    Cancel
                </Button>
            </p>
        </article>
    );
}
