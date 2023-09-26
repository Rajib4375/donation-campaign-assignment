/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import swal from "sweetalert";


const DonationDetailsCard = ({catagori}) => {

    const {id,image,title,price,description,text_color} = catagori || {}

    
    const handleAddtoDonation = () =>{

        const addDonationArray =[];

        const donationItem = JSON.parse(localStorage.getItem('donation'))

        if(!donationItem){
            addDonationArray.push(catagori)
            localStorage.setItem('donation', JSON.stringify(addDonationArray))
            swal("Good job!", "Donation added successFully", "success");

        }
        else{
            const isExits = donationItem.find(catagori=>catagori.id === id)
            
            if(!isExits){
                addDonationArray.push(...donationItem, catagori)
            localStorage.setItem('donation', JSON.stringify(addDonationArray))
            swal("Good job!", "Donation added successFully", "success");
           }
           else{
            swal("Error!", "Already Donation Done", "error");
           }


            


            
        }
    } 

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
            <figure className="">
                <img className="w-[1320px] h-[700px] rounded-xl] " src={image} alt="" />
                </figure>
                <div  className=" mt-[-100px] ml-9 ">
                    <button style={{background:text_color}} 
                    onClick={handleAddtoDonation}
                    className="px-6 py-4  mt-[-100px] ml-9 rounded-lg  text-white text-xl font-semibold mb-20">Donate ${price}</button>
                </div>
                <h1 className="text-4xl font-bold text-black">{title}</h1>
                <p className="text-black w-[1300px]">{description}</p>
                </div>
                
            
            </div>
        
       
        
    );
};

export default DonationDetailsCard;