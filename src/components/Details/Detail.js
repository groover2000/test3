import {React, useEffect} from "react";
import {Card} from "../Card/Card"

function Detail(props) {
    const data = props.location.state;

    useEffect(() =>{
        if(data === undefined) {
            props.history.push('/')
        }
    }, [])

    if(data === undefined) {
        return 0;
    }else {
        console.log(data)
        return <div className= "container">
            <Card  
            id = {data.id} 
            imgUrl = {data.imgUrl}
            title = {data.title}
            year = {data.year}
            genres = {data.genres}
            summary = {data.summary}>
         
            </Card>
        </div>
    }
    
}

export {Detail}