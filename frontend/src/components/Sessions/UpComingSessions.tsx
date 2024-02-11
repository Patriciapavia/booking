import { useEffect, useRef } from "react";

import Modal, { type ModalHandle } from "../UI/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import Button from "../UI/Button.tsx";
import { upComingSessionSelector, getUpComingSession, deleteSession, deleteItemSelector } from '../../slices/session.ts'

import { useAppDispatch, useAppSelector } from '../../slices/index.ts'

type UpcomingSessionsProps = {
    onClose: () => void;
};



export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
    const modal = useRef<ModalHandle>(null);
    const { upComingSession } = useAppSelector(upComingSessionSelector)

    const { deleteItem } = useAppSelector(deleteItemSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);



    useEffect(() => {
        dispatch(getUpComingSession())
    }, [dispatch, deleteItem])



    function handleCancelSession(sessionId: string) {
        dispatch(deleteSession(sessionId))

    }

    const hasSessions = upComingSession.length > 0;
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
