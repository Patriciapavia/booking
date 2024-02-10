import { FormEvent, useEffect, useRef } from 'react';

import Modal, { ModalHandle } from '../UI/Modal.tsx';
import Input from '../UI/Input.tsx';
import Button from '../UI/Button.tsx';
// import { Session, useSessionsContext } from '../../store/sessions-context.tsx';
import { bookSession } from '../../slices/session.ts'
import { useAppDispatch } from '../../slices/index.ts'
import { Session } from '../../utils/utils.ts'

// export type Session = {
//     id: string;
//     title: string;
//     summary: string;
//     description: string;
//     date: Date;
//     image: string;
//     duration: number;
// };
type BookSessionProps = {
    session: Session;
    onDone: () => void; // onDone will "tell" the parent component that the BookSession component should be removed from the DOM
};

export default function BookSession({ session, onDone }: BookSessionProps) {
    const modal = useRef<ModalHandle>(null);
    const dispatch = useAppDispatch()

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        dispatch(bookSession(session))
        onDone();
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input label="Your email" id="email" name="email" type="email" />
                <p className="flex justify-between">
                    <Button type="button" textOnly onClick={onDone}>
                        Cancel
                    </Button>
                    <Button>Book Session</Button>
                </p>
            </form>
        </Modal>
    );
}
