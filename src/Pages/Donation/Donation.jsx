import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donations, setDonations] = useState([])

    const[noDataFound, setNoDataFound] = useState(false)
    const [isShow, setIsShow] =useState(false)

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        if(donationItem){
            setDonations(donationItem)
        }
        else{
            setNoDataFound('no data found')
        }
    },[])

    console.log(donations)

    

    return (
        <div>
            {noDataFound ? <p className="h-[80vh] flex justify-center items-center text-7xl font-extrabold">{noDataFound}!!!</p> : 
            <div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    isShow ? donations.map(catagori=><DonationCard key={catagori.id} catagori={catagori}></DonationCard>) 
                    : donations.slice(0,4).map(catagori=><DonationCard key={catagori.id} catagori={catagori}></DonationCard>)
                }
                </div> 
                {
                    donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-4 py-3 rounded-lg bg-[#009444] block mx-auto mt-10">See All</button>
                }
           </div>}
        </div>
    );
};

export default Donation;