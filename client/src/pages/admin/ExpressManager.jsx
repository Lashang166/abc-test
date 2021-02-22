import React, { useState, useEffect} from 'react'
import axios from 'axios'


const ExpressManager = () => {
    const [list , setList] = useState([])
    const [express, setExpress] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        
        axios.get("/api/express/get", { cancelToken: source.token })
            .then(res => {
                setList(res.data);
                setLoading(false)
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                  return "axios request cancelled"
                }
                return err
              });

        return () => {
            source.cancel();
        }

    }, [loading])

    const submitHandle = (e) => {
        e.preventDefault()
        console.log(express);
        axios.post("/api/express/add", {name: express})
            .then(res => {
                console.log(res.data);
                setExpress("")
                setLoading(true)
            }).catch(err => {
                console.log(err)
            })
    }

    const onDelete = (id) => {
        axios.delete('/api/express/delete/' + id)
            .then(res => {
                console.log(res.data);
                setLoading(true)
            })
    }

    return (
        <div>
            <div className="flex w-full mt-10 ">
            <div className=" w-2/4 bg-gray-300">
                <h1 className="text-center text-xl">brand list</h1>
                <ul className="mt-2">
                  
                     {  list.map((c,i) => (
                            <li onClick={() => onDelete(c._id)} key={c._id} className="text-xl pl-2"> - {c.name}</li>
                        ))
                       }
                </ul>
            </div>
            <div className="w-2/4 bg-white">
                <h1 className="text-center"> add brand</h1>
                <form action="#" onSubmit={submitHandle}>
                    <div className="flex w-full bg-red-400 justify-between">
                        <label htmlFor="">express Name: </label>
                        <input 
                            type="text" 
                            className="border-2"
                            value={express} 
                            onChange={e => setExpress(e.target.value)}
                        />

                    </div>
                    <button className="bg-blue-400 px-2 mt-1 ml-1" type="submit">add</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default ExpressManager
