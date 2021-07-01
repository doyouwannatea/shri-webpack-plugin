import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Card from '../containers/Card'
import Fallback from './Fallback'

const EventsContainer = ({ events, error, loading }) => {
    if (error) return <Fallback type="ERROR" />
    if (loading) return <Fallback type="LOADING" />
    if (events.length < 1) return <Fallback type="SEARCH_FAIL" />

    return (
        <div className="events">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry columnsCount={3} gutter="15px">
                    {
                        events.map(event => (
                            <Card key={event.courseId} {...event} />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default EventsContainer