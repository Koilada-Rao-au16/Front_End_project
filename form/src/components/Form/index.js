import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [fullName, setFullName] = useState()
    const [lastNameNew, setLastNameNew] = useState()

    const changeHandler = (event) => {
        setName(event.target.value)

    }
    const changeHandlerTwo = (event) => {
        setLastName(event.target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault()

        setFullName(name)
        setLastNameNew(lastName)
    }

    const changeEmail = (event) => {
        console.log(event.target.value)

    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <div>
                <h1>Hello {fullName} {lastNameNew}</h1>
                <input type="text" placeholder="Enter your Name" onChange={changeHandler} value={name} ></input>
                <input type="text" placeholder="Enter your Name" onChange={changeHandlerTwo} value={lastName} ></input>
                <input type="Email" placeholder="Enter your Email" onChange={changeEmail}> value="" </input>
                <button type="submit">Click Me 🦠</button>
            </div>
        </form>
        </>
    )
}

export default Form
