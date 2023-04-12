import React, { useState } from 'react'
import "./adminprojectnew.css"
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from '../../../slices/auth'
import { useSelector } from 'react-redux'

import axios from "../../../actions/axios"

function AdminProjectNew() {


    const isAuth = useSelector(selectIsAuth)
    if (!window.localStorage.getItem("token") && !isAuth) {
        <Navigate to="/" />
    }

    const [isLoading, setLoading] = useState(false)

    const [imageURL, setImageURL] = useState("")

    const [mainText, setMainText] = useState("")
    const [title, setTitle] = useState("")
    const [projectid, setProjectid] = useState("bathroom")
    const [mainTitle, setMainTitle] = useState("")
    const [client, setClient] = useState("")
    const [category, setCategory] = useState("")
    const [tag, setTag] = useState("")
    const [tags, setTags] = useState("")
    const [link, setLink] = useState("")

    const onSubmit = async () => {
        try {
            setLoading(true)
            const fields = {
                mainText,
                title,
                projectid,
                mainTitle,
                client,
                category,
                tag,
                tags,
                link,
                img: imageURL,
            }
            const { data } = await axios.post("/api/project", fields)
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
                <select className='admin-project-aside-item' onChange={(e) => setProjectid(e.target.value)}>
                    <option value="bathroom">Bathroom</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="kitchan">Kitchan</option>
                    <option value="livingroom">Living area</option>
                </select>
                <input className='admin-project-aside-item' type="text" placeholder='Client name' onChange={(e) => setClient(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Tag' onChange={(e) => setTag(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Tags' onChange={(e) => setTags(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Link' onChange={(e) => setLink(e.target.value)} />
            </form>
            <div className='admin-project-main'>

                <form className='admin-project-title-form'>
                    <input className='admin-project-title' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                    <input className='admin-project-title' type="text" placeholder='Full Title' onChange={(e) => setMainTitle(e.target.value)} />
                </form>
                <form>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setMainText(e.target.value)} cols="30" rows="10" placeholder='Write some text'></textarea>
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

export default AdminProjectNew
