import React from 'react'
import Loader from 'react-loader-spinner'

/**
 * @param {'ERROR' | 'LOADING' | 'SEARCH_FAIL'} type 
 */
const Fallback = ({ type }) => {

    let content = null

    if (type === 'ERROR')
        content = 'Ошибка'

    if (type === 'LOADING')
        content = <Loader type="Oval" color="#1976D2" />

    if (type === 'SEARCH_FAIL')
        content = 'События не найдены'

    return (
        <div className="fallback-container">
            {content}
        </div>
    )
}

export default Fallback