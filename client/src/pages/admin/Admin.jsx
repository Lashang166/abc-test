import React, { useState } from "react";
import Header from "../../components/Header";
import axios from 'axios'


const Admin = () => {
  const [title, setTitle] = useState("")
  const [file, setFile] = useState()

  const addHandler = (e) => {
      e.preventDefault()
      const formElement = document.querySelector("form")
      const data = new FormData(formElement)

      console.log(data);

      axios.post("/api/product/add", data)
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
                    name="price" 
                    id="price" 
                />
            </div>
            <div className="flex mt-1">
                <label>image :</label>
                <input 
                    type="file" 
                    name="photos" 
                    id="file" 
                    accept=".jpg"
                    multiple
                    onChange={e => {
                      const files = e.target.files
                      console.log(files)
                      setFile(files)
                    }}
                />
            </div>
            <div className="flex mt-1">
                <label>Size :</label>
                <div className="flex items-center">
                  <input type="checkbox" name="variation" value="S" />
                  <label htmlFor="variiant" className="mr-1">S</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="variation" value="M" />
                  <label htmlFor="variiant" className="mr-1">M</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="variation" value="L" />
                  <label htmlFor="variiant" className="mr-1">L</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="variation" value="XL" />
                  <label htmlFor="variiant" className="mr-1">XL</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="variation" value="XXL" />
                  <label htmlFor="variiant" className="mr-1">XXL</label>
                </div>
            </div>
            
            <div className="felx mt-1">
            <label>countInStock :</label>
                <input 
                    type="text" 
                    name="countInStock" 
                    id="countInStock" 
                />
            </div>

            <div className="felx mt-1">
            <label>description :</label>
                <input 
                    type="text" 
                    name="description" 
                    id="description" 
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
