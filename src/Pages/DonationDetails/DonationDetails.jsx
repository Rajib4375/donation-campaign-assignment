import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {
    
    const [catagori, setCatagori] = useState({})

    const {id} = useParams()
    
    
    const catagories= useLoaderData()
    

    useEffect(()=>{
        const findCatagori = catagories ?.find(catagori =>catagori.id === id)
        
        setCatagori(findCatagori)

    },[id, catagories])
    console.log(catagori)

    return (
        <div>
            <DonationDetailsCard  catagori={catagori}></DonationDetailsCard>
  
        </div>
    );
};

export default DonationDetails;