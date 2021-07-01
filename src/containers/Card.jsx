import React, { useEffect, useRef, useState } from 'react'
import htmlParser from 'html-react-parser'
import eventPlaceholder from '../../assets/images/placeholder.gif'

import AnimateHeight from 'react-animate-height'

const Card = ({ description, fullName, organizers, image, daysLeftToStart, startTime }) => {
  const imgEl = useRef(null)
  const innerEl = useRef(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [innerStyles, setInnerStyles] = useState({ transform: '', zIndex: 1 })

  useEffect(() => {
    disableCard()
    window.addEventListener('resize', disableCard)
    return () => {
      window.removeEventListener('resize', disableCard)
    }
  }, [])

  function disableCard() {
    setInnerStyles({ transform: '', zIndex: 1 })
    setIsEnabled(false)
  }

  function enableCard() {
    const imageHeight = imgEl.current.offsetHeight
    setInnerStyles({ transform: `translateY(-${imageHeight + 1}px)`, zIndex: 10 })
    setIsEnabled(true)
  }

  return (
    <AnimateHeight
      duration={600}
      height={isEnabled ? innerEl.current.offsetHeight : 303}
    >
      <div
        tabIndex={0}
        onMouseEnter={enableCard}
        onMouseLeave={disableCard}
        onFocus={enableCard}
        onBlur={disableCard}
        onClick={enableCard}
        className="card">
        <div ref={imgEl} style={{ backgroundImage: `url(${image ? image : eventPlaceholder})` }} className="card__img"></div>
        <div ref={innerEl} className="card__inner" style={innerStyles}>
          <CardHeader startTime={startTime} daysLeftToStart={daysLeftToStart} title={fullName} />
          <CardContent organizers={organizers} description={description} />
          <CardFooter isEnabled={isEnabled} />
        </div>
      </div>
    </AnimateHeight>
  )
}

const CardHeader = ({ daysLeftToStart, title, startTime }) => {

  function numeralCase(number, cases) {
    number = Math.abs(number)
    return cases[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]]
  }

  const date = new Date(startTime)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  month = month > 9 ? month : `0${month}`
  day = day > 9 ? day : `0${day}`

  return (
    <header className="card__header">
      <div className="row">
        <time dateTime={`${year}-${month}-${day}`} className="card__date">{`${day}.${month}.${year}`}</time>
        <div className="card__counter">
          {typeof daysLeftToStart === 'number'
            ? `До начала мероприятия: ${daysLeftToStart} ${numeralCase(daysLeftToStart, ['день', 'дня', 'дней'])}`
            : daysLeftToStart
          }
        </div>
      </div>
      <h2 className="card__heading" title={title}>
        {title}
      </h2>
    </header>
  )
}

const CardContent = ({ organizers, description }) => {
  return (
    <div className="card__content">

      {organizers.length > 0 && (
        <>
          <h3 className="card__title card__title--team">Организаторы</h3>
          <ul>{htmlParser(organizers)}</ul>
        </>
      )}

      {description.length > 0 && (
        <>
          <h3 className="card__title">Описание</h3>
          <p>{htmlParser(description)}</p>
        </>
      )}

    </div>
  )
}

const CardFooter = () => {
  return (
    <footer className="card__actions">
      {/* <a tabIndex={isEnabled ? 0 : -1} href="#" className="card__link">на курс</a> */}
    </footer>
  )
}

export default Card
