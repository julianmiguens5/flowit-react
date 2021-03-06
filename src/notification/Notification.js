import { useState, createContext, useContext } from "react"

const Notification = ({ message, severity, otherClass }) => {

    const notificationStyle = {
        position: 'absolute',
        bottom: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        color: 'white',
        padding: '10px 20px 10px 20px',
        borderRadius: '10px'
    }

    const config = true ? {
        style: notificationStyle,
        className: `${severity === 'error' ? 'Error' : 'Success'} ${otherClass || ''}`
    } : {}

    if(message === '') return

    return (
        <div {...config}>
            { message }
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [ msgConfig, setMsgConfig] = useState({
        severity: 'success',
        message: ''
    })
    const [otherClass, setOtherClass] = useState('')

    const setNotification = (sev, msg, timeout = 3) => {
        setMsgConfig({ severity: sev, message: msg})
        setTimeout(() => {
            setOtherClass('Animation')
        }, (timeout - 1) * 1000)

        setTimeout(() => {
            setMsgConfig({ ...msgConfig, message: ''})
        }, timeout * 1000)
    }

    return(
        <NotificationContext.Provider value={ setNotification }>
            <Notification message={msgConfig.message} severity={msgConfig.severity} otherClass={otherClass}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}