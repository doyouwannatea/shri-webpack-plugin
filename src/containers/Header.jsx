import React, { useState } from 'react'
import Search, { FullSizeSearch } from './Search'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)

    const openSearch = () => {
        setIsVisible(true)
    }
    const closeSearch = () => {
        setIsVisible(false)
    }

    return (
        <header className="header">
            <div className="container row">
                <a className="header__logo" href="http://www.istu.edu/" target="_blank" rel="noreferrer"></a>
                <Search />
                <FullSizeSearch close={closeSearch} isVisible={isVisible} />
                <button onClick={openSearch} className="search-btn"></button>
            </div>
        </header>
    )
}

export default Header
