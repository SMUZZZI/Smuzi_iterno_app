import React from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchAdmin, selectIsAuth } from '../../slices/auth';

function AdminLogin() {
    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange",
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAdmin(values))

        if (!data.payload) {
            alert("Не удвлось авторизоваться")
        }

        if ( "token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token)
    }
    }

    if (isAuth) {
        return <Navigate to="/admin" />
    }

    return (
        
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {
                    ...register("email", { required: "Укажите почту" })
                } />
                <input {
                    ...register("password", { required: "Укажите пароль" })
                } />
                <button type='submit'>Подтвердить</button>
            </form>
        </main>
    )
}


export default AdminLogin
