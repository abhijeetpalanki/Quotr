import React from 'react'

const Quote = ({quote}) => {
    return (
        <div className="quote">
            <div className="title">Advice</div>

            <blockquote>
                {quote}
            </blockquote>
        </div>
    )
}

export default Quote
