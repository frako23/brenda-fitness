export function Card( {className, children}) {
    console.log(children, className)
    return(
        <article className={`card ${className}`}>
            {children}
        </article>
    )
}