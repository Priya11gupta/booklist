import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [fetched, setfetched] = useState();

    const getUsers = async () => {
        setfetched(false);   
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a');
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setfetched(true);    
    }

    useEffect(() => {
        getUsers();
    }, []);

    return <div>
            <h2>List of BOOKS</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                { 
                    fetched &&

                    users.items.map((curElem) => {                       
                        return <>
                        <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                                <div className="image"> <img src={ curElem.volumeInfo.imageLinks.smallThumbnail } alt='thumbnail' className="rounded" width="155" /> </div>
                                            <div className="ml-3 w-100">
                                            <Link to='/details' exact> <h4 className="mb-0 mt-0 textLeft">{curElem.volumeInfo.title} </h4></Link>
                                        
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </>
                       })
                }
                    
                </div>
            </div>
        </div>
}

export default UseEffectAPI