export default class EventsWorker {
    static BASE_URL = 'https://open.istu.edu/api/'

    static async getAllEvents() {
        const res = await fetch(this.BASE_URL + 'get_all_events.php')
        const events = await res.json()

        if (!res.ok)
            throw new Error()

        return this.validateEvents(events)
    }

    static validateEvents(events) {
        return events.map(event => {
            const endTime = Number(event.enddate * 1000),
                startTime = Number(event.startdate) * 1000,
                daysLeftToStart = this.dayLeftToStart(startTime, endTime),
                organizers = event.organizers.split(',').map(person => `<li>${person.trim()}</li>`).join('')

            return {
                endTime,
                startTime,
                daysLeftToStart,
                organizers,
                category: event.category,
                courseId: event.course_id,
                description: event.description,
                fullName: event.fullname,
                image: event.image
            }
        })
    }

    static dayLeftToStart(startTime, endTime) {
        if (!startTime)
            return ''

        if ((endTime - startTime) < 0)
            return 'мероприятие окончено'

        const timeLeft = startTime - Date.now()
        if (timeLeft < 0)
            return 'мероприятие идёт'

        return parseInt(timeLeft / (1000 * 60 * 60 * 24))
    }
}
