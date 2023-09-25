/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoriesCard = ({catagori}) => {
    const {id,image,title,btn_bg,category,background_color,text_color} = catagori || {}
    return (
        
     <Link to={`/catagories/${id}`}>
     <div className="card card-compact w-[312px] h-[283px] bg-base-100 shadow-xl" style={{background:background_color}}>
  <figure><img className="w-[312px]" src={image} alt="" /></figure>
  <div className="card-body">
    <p className="px-3 py-1 w-20" style={{color:text_color, background:btn_bg}}>{category}</p>
    <h2 style={{color: text_color}}  className="card-title">{title}</h2>
    </div>
  </div>
     </Link>

        
    );
};

export default CategoriesCard;