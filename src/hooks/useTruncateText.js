import { useEffect, useRef, useState } from 'react'
import FontFaceObserver from 'fontfaceobserver'
import { truncateText } from '../utils/textUtils'

const useTruncateText = (content, maxHeight) => {
    const [truncated, setContent] = useState('')
    const el = useRef(null)

    const truncate = () => {
        maxHeight = maxHeight ? maxHeight : el.current.offsetHeight
        const newContent = truncateText(el.current, content, maxHeight)
        setContent(newContent)
    }

    useEffect(() => {
        new FontFaceObserver('Roboto').load().then(truncate)
    }, [])

    return [el, truncated]
}

export default useTruncateText