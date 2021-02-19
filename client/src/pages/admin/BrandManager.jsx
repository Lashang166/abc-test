import React, { useState, useEffect } from 'react'
import axios from 'axios'


const BrandManager = () => {
    const abortController = new AbortController()
    const signal  = abortController.signal
    const [list, setList] = useState([])
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        fetch("/api/brand/", { signal: signal })
            .then(results => results.json())
            .then(data => {
                setList(data);
                console.log(data)
                setLoading(false)
            }).catch(err => {
                    console.log(err)
                })
        // axios.get("/api/category/",{ signal})
        // .then(res => {
        //     console.log(res.data)
        //     setList(res.data)
        //     setLoading(false)
        // }).catch(err => {
        //     console.log(err)
        // })

        return () => {
            abortController.abort()
        }
    },[loading])

    const submitHandle = e => {
        e.preventDefault()
        axios.post("/api/brand/create", {name: category})
            .then(res => {
                console.log(res.data)
                setLoading(true)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="flex w-full mt-10 ">
            <div className=" w-2/4 bg-gray-300">
                <h1 className="text-center text-xl">brand list</h1>
                <ul className="mt-2">
                  
                     {  list.map((c,i) => (
                            <li key={c._id} className="text-xl pl-2"> - {c.name}</li>
                        ))
                       }
                </ul>
            </div>
            <div className="w-2/4 bg-white">
                <h1 className="text-center"> add brand</h1>
                <form action="#" onSubmit={submitHandle}>
                    <div className="flex w-full bg-red-400 justify-between">
                        <label htmlFor="">brnad Name: </label>
                        <input 
                            type="text" 
                            className="border-2"
                            value={category} 
                            onChange={e => setCategory(e.target.value)}
                        />

                    </div>
                    <button className="bg-blue-400 px-2 mt-1 ml-1" type="submit">add</button>
                </form>
            </div>
        </div>
    )
}

export default BrandManager
