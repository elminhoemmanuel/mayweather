import React from 'react'

const RoundBtn = ({ btnText , addStyle, clicked}) => {
    return (
        <button
        onClick={clicked}
        className={`focus:outline-none  flex items-center justify-center 
        rounded-full ${addStyle}`}>
            {btnText}
        </button>
    )
}

export default RoundBtn
