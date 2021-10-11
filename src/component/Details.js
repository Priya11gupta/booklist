import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';

const Details = () => {
const id = useParams().id;

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
  <h3>Description</h3>
        <div className="container-fluid mt-5">
            <div className="row text-center">
            { fetched &&
              users.items.map((curElem) => {                   

                    return <>
                    <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                            <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                            <div className="image"> <img src={ curElem.volumeInfo.imageLinks.thumbnail } alt='thumbnail' className="rounded" width="155" /> </div>
                                        <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{curElem.volumeInfo.subtitle}</h4>  
                                                <h4 className="mb-0 mt-0 textLeft">{curElem.volumeInfo.publishedDate}</h4> 
                                                <h4 className="mb-0 mt-0 textLeft">{curElem.volumeInfo.description}</h4>                                         
                                            
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

export default Details