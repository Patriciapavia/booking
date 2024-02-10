import { useEffect, useRef } from "react";

import Modal, { type ModalHandle } from "../UI/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import Button from "../UI/Button.tsx";
import { upComingSessionSelector, getUpComingSession, deleteItem } from '../../slices/session.ts'

import { useAppDispatch, useAppSelector } from '../../slices/index.ts'
import { Session } from "../../utils/utils.ts";

type UpcomingSessionsProps = {
    onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

type UpcomingSession = {

    title: string;
    sumarry: string;
}

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
    const modal = useRef<ModalHandle>(null);
    const { upComingSession } = useAppSelector(upComingSessionSelector)
    const dispatch = useAppDispatch()

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    useEffect(() => {
        dispatch(getUpComingSession())
    }, [dispatch])



    function handleCancelSession(sessionId: string) {
        // sessionsCtx.cancelSession(sessionId);
        console.log(sessionId, 'sessionId')
        dispatch(deleteItem(sessionId))
    }

    const hasSessions = upComingSession.length > 0;
    console.log(upComingSession, 'bookedItem')
    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>Upcoming Sessions</h2>
            {upComingSession && (
                <ul>
                    {upComingSession?.map((session) => (
                        <li key={session._id}>
                            <UpcomingSession
                                session={session}
                                onCancel={() => handleCancelSession(session._id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {!hasSessions && <p>No upcoming sessions.</p>}
            <p className="text-right">
                <Button onClick={onClose}>Close</Button>
            </p>
        </Modal>
    );
}
