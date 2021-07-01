export function truncateText(el, text, maxHeight) {
    let truncated = text
    
    const div = document.createElement('div')
    div.style.width = el.offsetWidth + 'px'
    div.className = el.className
    div.classList.add('hidden')
    div.textContent = truncated
    document.body.append(div)

    while (div.offsetHeight > maxHeight && truncated.length !== 0) {
        truncated = truncated.slice(0, truncated.length - 1)
        div.textContent = truncated
    }

    if (truncated.length !== text.length)
        truncated = truncated.slice(0, truncated.length - 4) + '...'

    div.remove()
    return truncated
}
