import React,{useEffect,useState} from 'react'

const useFetch = () => {
    const [users,setUsers]=useState([]) ;
    const fetchUsers=async()=>{
        const response=await fetch('https://randomuser.me/api/?results=8') ;
        const data=await response.json() ;
        setUsers(data.results) ;
    }
    useEffect(()=>{
        fetchUsers() ;
    },[])
  return (users)
}

export default useFetch