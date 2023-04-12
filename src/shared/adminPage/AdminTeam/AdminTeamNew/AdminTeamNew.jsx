import React, { useState } from 'react'
import "../../AdminProject/AdminProjectNew/adminprojectnew.css"
import { Navigate } from 'react-router-dom'
import { selectIsAuth } from '../../../slices/auth'
import { useSelector } from 'react-redux'

import axios from "../../../actions/axios"

function AdminTeamNew() {


    const isAuth = useSelector(selectIsAuth)
    if (!window.localStorage.getItem("token") && !isAuth) {
        <Navigate to="/" />
    }

    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [tag, setTag] = useState("")
    const [profession, setProfession] = useState("")
    const [description, setDescription] = useState("")
    const [social, setSocial] = useState({
        facebook: "",
        tweeter: "",
        in: ""
    })
    const [links, setLinks] = useState({
        mail: "",
        phone: "",
        site: ""
    })
    const [biography, setBiography] = useState("")
    const [qnaDis, setQnaDis] = useState("")
    const [qnaData, setQnaData] = useState([])
    const [addQnaData, setAddQnaData] = useState({
        title: "",
        text: ""
    })

    const onSubmit = async () => {
        try {
            const fields = {
                profession,
                tag,
                description,
                links,
                name,
                social,
                img: imageURL,
                biography,
                qnaDis,
                qnaData
            }
            const { data } = await axios.post("/api/team", fields)
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
                <input type="text" className='admin-project-aside-item' onChange={(e) => setName(e.target.value)} cols="30" rows="10" placeholder='Name' />
                <input className='admin-project-aside-item' type="text" placeholder='profession' onChange={(e) => setProfession(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Tag' onChange={(e) => setTag(e.target.value)} />
                <h3 className='title-h3-small admin-project-titles'>Links</h3>
                <input className='admin-project-aside-item' type="text" placeholder='Phone' value={links.phone} onChange={(e) => setLinks({ ...links, phone: e.target.value })} />
                <input className='admin-project-aside-item' type="text" placeholder='Email' value={links.mail} onChange={(e) => setLinks({ ...links, mail: e.target.value })} />
                <input className='admin-project-aside-item' type="text" placeholder='Site' value={links.site} onChange={(e) => setLinks({ ...links, site: e.target.value })} />
                <h3 className='title-h3-small admin-project-titles'>Social</h3>
                <input className='admin-project-aside-item' type="text" placeholder='Facebook' value={social.facebook} onChange={(e) => setSocial({ ...social, facebook: e.target.value })} />
                <input className='admin-project-aside-item' type="text" placeholder='Tweeter' value={social.tweeter} onChange={(e) => setSocial({ ...social, tweeter: e.target.value })} />
                <input className='admin-project-aside-item' type="text" placeholder='In' value={social.in} onChange={(e) => setSocial({ ...social, in: e.target.value })} />
            </form>
            <div className='admin-project-main'>

                <form>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setBiography(e.target.value)} cols="30" rows="15" placeholder='Write some biography'></textarea>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" placeholder='Write some description'></textarea>
                    <textarea className='adminprojectnew-editor' onChange={(e) => setQnaDis(e.target.value)} cols="30" rows="5" placeholder='Write some QNA description'></textarea>
                    <input type="file" onChange={onImgChange} accept="image/*" className='admin-project-image-input' />
                    {
                        imageURL ?
                            <img src={`http://localhost:5000${imageURL}`} className="admin-project-preview" />
                            :
                            null
                    }
                </form>
                <form>
                    {

                        qnaData.map(i => (
                            <li className='admin-qna-data'>
                                <input className='admin-project-sprints-done' type="text" placeholder={i.title} onChange={(e) => {
                                    i = {
                                        ...i,
                                        title: e.target.value
                                    }
                                    for (let j = 0; j < qnaData.length; j++) {
                                        if (i._id === qnaData[j]._id) {
                                            qnaData[j] = i
                                        }
                                    }
                                    console.log(qnaData);
                                }} />
                                <textarea className='admin-project-sprints-done' cols="30" rows="5" type="text" placeholder={i.text} onChange={(e) => {
                                    i = {
                                        ...i,
                                        text: e.target.value
                                    }
                                    for (let j = 0; j < qnaData.length; j++) {
                                        if (i._id === qnaData[j]._id) {
                                            qnaData[j] = i
                                        }
                                        console.log(qnaData);
                                    }
                                }} />
                            </li>
                        ))
                    }
                    <div className='admin-project-sprints-block'>
                        <h3 className='title-h3-small admin-project-titles'>New sprint</h3>
                        <input className='admin-project-sprints' type="text" placeholder='Title' 
                        value={addQnaData.title} onChange={(e) => setAddQnaData({ ...addQnaData, title: e.target.value })} />
                        <textarea className='adminprojectnew-editor' cols="30" rows="5" type="text" 
                        placeholder='Text' value={addQnaData.text} onChange={(e) => setAddQnaData({ ...addQnaData, text: e.target.value })} />
                    </div>
                </form>
                <button onClick={() => { if(addQnaData.title !== '')if(addQnaData.text !== '') setQnaData([...qnaData, addQnaData]); }} className="btn admin-project-btn">Add QNA data</button>
            </div>
            <div>
                <button onClick={onSubmit} className="btn admin-project-btn">Submit</button>
            </div>
        </main>
    )
}

export default AdminTeamNew
