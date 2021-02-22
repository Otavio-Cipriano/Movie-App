import React, { useEffect } from 'react'

export default function DetectClickOutside(ref, handleClose) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClose({ content: {}, open: false })
            }
        }
        const stopWheel = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                event.preventDefault()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.getElementsByClassName('app').onwheel = () =>{ return true}
        }
    }, [ref])
}