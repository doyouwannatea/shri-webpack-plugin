import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import EventsWorker from '../utils/EventsWorker'
import * as actions from '../stores/actionCreators'

import Header from './Header'
import Footer from '../components/Footer'
import EventsContainer from '../components/EventsContainer'

const selected = state => ({
    events: state.events,
    term: state.searchTerm,
    loading: state.loading,
    error: state.error
})

const App = () => {
    const { events, term, error, loading } = useSelector(selected)
    const dispatch = useDispatch()
    const { setEvents, setError, setLoading } = bindActionCreators(actions, dispatch)

    useEffect(() => {
        setLoading(true)
        EventsWorker.getAllEvents()
            .then((events) => {
                setEvents(events)
                setLoading(false)
            })
            .catch(() =>
                setError(true)
            )
    }, [])

    const filteredEvents = events.filter(event =>
        event.fullName.toLowerCase().includes(term.toLowerCase())
    )

    const sortedEvents = filteredEvents.sort((a, b) =>
        b.startTime - a.startTime
    )

    return (
        <>
            <Header />
            <main className="content container">
                <EventsContainer
                    events={sortedEvents}
                    error={error}
                    loading={loading}
                />
            </main>
            <Footer />
        </>
    )
}

export default App