import React, { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../stores/actionCreators'

const Search = ({ inputEl }) => {
    const searchTerm = useSelector(state => state.searchTerm)
    const dispatch = useDispatch()
    const { setSearchTerm } = bindActionCreators(actions, dispatch)

    const onChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search">
            <span className="search__icon"></span>
            <input
                ref={inputEl}
                onChange={onChange}
                value={searchTerm}
                className="search__input"
                type="text"
                aria-label="Поиск ИРНИТУ курсов по названию"
                placeholder="введите название курса"
            />
        </div>
    )
}

export const FullSizeSearch = ({ isVisible, close }) => {
    const inputEl = useRef(null)

    const onEscape = (e) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            close()
        }
    }

    const preventTab = (e) => {
        if (isVisible && e.key === 'Tab') {
            e.preventDefault()
        }
    }

    const onBackgroundClick = (e) => {
        if (!e.target.classList.contains('search-wrapper')) return
        close()
    }

    useEffect(() => {
        if (inputEl.current) {
            inputEl.current.focus()
        }

        window.addEventListener('keydown', preventTab)
        window.addEventListener('keydown', onEscape)
        return () => {
            window.removeEventListener('keydown', preventTab)
            window.removeEventListener('keydown', onEscape)
        }
    }, [isVisible])

    document.documentElement.classList.toggle('overflow-hidden', isVisible)

    if (!isVisible) return null

    return (
        <div onClick={onBackgroundClick} className="search-wrapper container">
            <Search inputEl={inputEl} />
        </div>
    )
}

export default Search