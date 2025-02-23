const Link = (props) => {
    const {url, text, children} = props
    return <a href={url}>{text}<span>{children}</span></a>
}

export { Link }