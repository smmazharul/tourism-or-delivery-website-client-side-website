import { useEffect, useState } from "react";


const UseAPI = () => {
    const [useApi, setUseApi]=useState([])
    useEffect(()=>{
        // fetch('https://raw.githubusercontent.com/smmazharul/hm-health-care/main/fackdata.json')
        fetch('https://ghostly-cheateau-43841.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setUseApi(data);
            // console.log(data);
        })
    },[])
    return {useApi,setUseApi};
};

export default UseAPI;