import {useEffect} from "react"

export const useTitle = (title,dependecies)=>{
    if(!Array.isArray(dependecies)){
        console.error("No se esta pasando un Array como dependencia")
        dependecies=[]

    }

    useEffect(()=>{
        document.title = title
    }, dependecies)//eslint-disable-line

}