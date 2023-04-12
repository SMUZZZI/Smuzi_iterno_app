import React, { useState } from 'react'
import "../../AdminProject/AdminProjectNew/adminprojectnew.css"
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from '../../../slices/auth'
import { useSelector } from 'react-redux'
 
import axios from "../../../actions/axios"

function AdminBlogNew() {


    const isAuth = useSelector(selectIsAuth)
    if (!window.localStorage.getItem("token") && !isAuth) {
        <Navigate to="/" />
    }


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
                text,
                list,
                mainText,
                secondText,
                img: imageURL,
            }
            const { data } = await axios.post("/api/blog", fields)
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
                <input className='admin-project-aside-item' type="text" placeholder='Tag' onChange={(e) => setTag(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='List' onChange={(e) => setList(e.target.value)} />
            </form>
            <div className='admin-project-main'>

                <form className='admin-project-title-form'>
                    <input className='admin-project-title' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                </form>
                <form>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setMainText(e.target.value)} cols="30" rows="10" placeholder='Write some main text'></textarea>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setSecondText(e.target.value)} cols="30" rows="10" placeholder='Write some second text'></textarea>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setText(e.target.value)} cols="30" rows="10" placeholder='Write some text'></textarea>
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

export default AdminBlogNew
