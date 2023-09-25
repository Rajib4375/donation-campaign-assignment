

const DonationCard = ({catagori}) => {
    const {id,image,title,price,background_color,text_color,btn_bg,category} = catagori || {}
    return (
        <div>
            <div className="card card-side w-[648px] h-[200px]  shadow-xl" style={{backgroundColor:background_color}}>
  <figure><img className="w-[240px] h-[200px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
  <p className="px-3 py-2 w-20" style={{color:text_color, background:btn_bg}}>{category}</p>
    <h2 className="card-title">{title}</h2>
    <p style={{color:text_color}}>${price}</p>
    <div className="card-actions ">
      <button style={{backgroundColor:text_color}} className="px-4 py-2 rounded-lg text-white">View Details</button>
    </div>
  </div>
   </div>
        </div>
    );
};

export default DonationCard;