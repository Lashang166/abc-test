import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import productActions from '../../store/actions/productActions'


const ProductManager = () => {
    const abortController = new AbortController()
    const signal  = abortController.signal
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [file, setFile] = useState("")
    const [category, setCategory] = useState()
    const [add, setAdd] = useState(null)
    let [color, setColor] = useState("")

    useEffect(() => {
      fetch("/api/brand/", { signal: signal })
      .then(results => results.json())
      .then(data => {
          setBrand(data);
      }).catch(err => {
              console.log(err)
          })
      //category
      fetch("/api/category/", { signal: signal })
      .then(results => results.json())
      .then(data => {
          setCategory(data);
         
      }).catch(err => {
              console.log(err)
          })
      return () => {
        abortController.abort()
      }
    }, [])

    useEffect(() => {
      if(add !== null){
        dispatch(productActions.add(add))
      }
      //brand
      
    },[add])
  
    const addHandler = (e) => {
        e.preventDefault()
        //const formElement = document.querySelector("form")
        //console.log(formElement);
        const colorsList = color.split(',')
        console.log(colorsList);
        const data = new FormData(e.target)
        data.append("colors", colorsList)
        setAdd(data)
        
        
    }
    return (
        <div>
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
            <div className="flex mt-1" >
            <label htmlFor="category">category : </label>

              <select name="category" id="">
                { category && category.map((c) => ( <option key={c._id} value={c._id}>{c.category}</option>)) }
              </select>
            </div>

            <div className="flex mt-1" >
            <label htmlFor="category">brand : </label>

              <select name="brand" id="">
                { brand && brand.map((c) => ( <option key={c._id} value={c._id}>{c.name}</option>)) }
              </select>
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

            <div className="felx mt-1">
            <label>color :</label>
               
                <input 
                    type="text" 
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    
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
    )
}

export default ProductManager
