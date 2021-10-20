import React from 'react'

const PrimaryBtn = ({ btnText , clicked, addStyle}) => {
    return (
        <button onClick={clicked} className={`focus:outline-none text-sm shadow ${addStyle}`}>
            {btnText}
        </button>
    )
}

export default PrimaryBtn
