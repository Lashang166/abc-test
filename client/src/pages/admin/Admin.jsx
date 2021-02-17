import React, { useState } from "react";
import Header from "../../components/Header";
import axios from 'axios'


const Admin = () => {
  const [title, setTitle] = useState("")
  const [file, setFile] = useState()

  const addHandler = (e) => {
      e.preventDefault()
      const data = new FormData()
      console.log(file);
      data.append("photos", file)
      data.append("a", title)
      const a = ["x", "s"]
      data.append("size", a)

      axios.post("/upload", data)
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err))
  }

  return (
    <div>
      <Header />
      <div className="mt-10 bg-gray-300 h-100vh p-7">
        <div className="text-center">add product</div>

        <form onSubmit={addHandler} className="flex flex-col">
            <div className="flex mt-1">
                <label>title :</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    onChange={e => {setTitle(e.target.value)}}
                />
            </div>
            <div className="flex mt-1">
                <label>price :</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                />
            </div>
            <div className="flex mt-1">
                <label>image :</label>
                <input 
                    type="file" 
                    name="photos" 
                    id="file" 
                    accept=".jpg"
                   // multiple
                    onChange={e => {
                      const files = e.target.files[0]
                      setFile(files)
                    }}
                />
            </div>
            <div className="flex mt-1">
                <input 
                    type="submit" 
                    value="add"
                />
            </div>

        </form>
      </div>
    </div>
  );
};

export default Admin;
