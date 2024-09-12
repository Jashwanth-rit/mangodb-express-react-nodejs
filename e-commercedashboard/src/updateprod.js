



import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import React,{useState,useEffect} from 'react'
 import { useNavigate, useParams } from 'react-router-dom';
// import { name } from 'ejs';




const Update = ()=>{

    const [id,setid] = useState("");
    const [err,seterr] = useState(false);
    const [price,setprice] = useState("");
    const [name,setname] = useState("");
    const [brand,setbrand] = useState("");
    const [category,setcat] = useState("");

let navigate = useNavigate();

    const params = useParams();
    // useEffect(()=>{
    //     collectdata();
    // },[]);

    const collectdata = async ()=>{
        // if(!id || !price || !name || !brand || !category){
        //     alert("enter all the required inputs")
        //     seterr(true);
        //     return false;
        // }


//"_id" is broser given id we can access it by knowing name "user"
//in "user" object it will be stored
//"parse" is used because in "user" data will be stored in form of string
// so to convert it to object type and store it is used 


//let userid = JSON.parse(localStorage.getItem('user'))._id
        let result =  await fetch(`http://localhost:6600/update/${params._id}`);
    
         
        
       // console.warn(result)
        result  = await result.json()
        //console.warn(result)
        
        
        if(result.name){
            console.warn(result.id)
            setid(result.id);
            setprice(result.price);
            setname(result.name);
            setbrand(result.brand);
            setcat(result.category);
            

        }
        else{
            alert("invalid input search other")

        }



    }
    const updatedata = async ()=>{
        let result =  await fetch(`http://localhost:6600/update/${params._id}`,{
  
          method:'put',
          body: JSON.stringify({id,price,name,brand,category}),
          headers:{
  
            'Content-Type':"application/json"
          }
        })
  
       
          result = await result.json();
          console.warn( result);
          if(result){
            
            navigate("/")
  
          }
         
      }

    return (
        <div className='App textdo'>
            <h1>Update page</h1>

            <Form>

          
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>id</Form.Label>
        <Form.Control className={err?"red":"green"} type="text" defaultValue= {id}  placeholder={err?"*required":"enter id"}  onChange = {(e)=>{setid(e.target.value)}}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>price</Form.Label>
        <Form.Control className={err?"red":"green"} type="email" defaultValue = {price} placeholder={err?"*required":"enter price"}   onChange = {(e)=>setprice(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>name</Form.Label>
        <Form.Control className={err?"red":"green"} type="email" defaultValue = {name} placeholder={err?"*required":"enter name"}   onChange = {(e)=>setname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>brand</Form.Label>
        <Form.Control className={err?"red":"green"} type="email" defaultValue = {brand} placeholder={err?"*required":"enter brand"}   onChange = {(e)=>setbrand(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>category</Form.Label>
        <Form.Control className={err?"red":"green"} type="email" defaultValue = {category} placeholder={err?"*required":"enter category"}   onChange = {(e)=>setcat(e.target.value)}/>
      </Form.Group>
     
    </Form>
    <Button className='butt' variant="dark" onClick = {updatedata}>update !!</Button>
    
        </div>
    )
}

export default Update;