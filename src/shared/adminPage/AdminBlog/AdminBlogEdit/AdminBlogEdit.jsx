import React, { useEffect, useState } from 'react'
import "../../AdminProject/AdminProjectNew/adminprojectnew.css"
import { Navigate, useParams } from 'react-router-dom'
import { selectIsAuth } from '../../../slices/auth'
import { useSelector } from 'react-redux'

import axios from "../../../actions/axios"

function AdminBlogEdit() {


    const isAuth = useSelector(selectIsAuth)
    if (!window.localStorage.getItem("token") && !isAuth) {
        <Navigate to="/" />
    }

    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/blog/${id}`)
            .then(res => {
                const data = res.data
                setImageURL(data.img)
                setMainText(data.mainText)
                setTag(data.tag)
                setTitle(data.title)
                setText(data.text)
                setSecondText(data.secondText)
                setList(data.list)

                setIsLoading(false)
            })
            .catch(err => {
                console.warn(err);
                alert("Ошибка при получении проекта")
            })
    }, []);

    const [imageURL, setImageURL] = useState("")

    const [mainText, setMainText] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [secondText, setSecondText] = useState("")
    const [list, setList] = useState("")
    const [tag, setTag] = useState("")

    const onSubmit = async () => {
        try {
            const fields = {
                title,
                tag,
                img: imageURL,
                text,
                list,
                mainText,
                secondText,
            }
            const { data } = await axios.put(`/api/blog/${id}/edit`, fields)
        } catch (error) {
            console.warn(error);
            alert("Ошибка при создании проекта")
        }
    }

    const onImgChange = async (event) => {
        try {
            const formData = new FormData()
            const file = event.target.files[0]
            formData.append("image", file)
            const { data } = await axios.post("/upload", formData)
            setImageURL(data.url)
        } catch (error) {
            console.warn(error);
            alert("Ошибка при загрузке файла")
        }
    }

    return (
        <main className='admin-project'>
            <form className='admin-project-aside'>
                <input className='admin-project-aside-item' type="text" placeholder='Tag' value={tag} onChange={(e) => setTag(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='List' value={list} onChange={(e) => setList(e.target.value)} />
            </form>
            <div className='admin-project-main'>

                <form className='admin-project-title-form'>
                    <input className='admin-project-title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </form>
                <form>
                    <textarea className='adminprojectnew-editor' value={mainText} onChange={(e) => setMainText(e.target.value)} cols="30" rows="10" placeholder='Write some main text'></textarea>
                    <textarea className='adminprojectnew-editor' value={secondText} onChange={(e) => setSecondText(e.target.value)} cols="30" rows="10" placeholder='Write some second text'></textarea>
                    <textarea className='adminprojectnew-editor' value={text} onChange={(e) => setText(e.target.value)} cols="30" rows="10" placeholder='Write some text'></textarea>
                    <input type="file" onChange={onImgChange} accept="image/*" className='admin-project-image-input'/>
                    {
                        imageURL ?
                            <img src={`http://localhost:5000${imageURL}`} className="admin-project-preview" />
                            :
                            null
                    }
                </form>
            </div>
            <div>
                <button onClick={onSubmit} className="btn admin-project-btn">Submit</button>
            </div>
        </main>
    )
}

export default AdminBlogEdit
