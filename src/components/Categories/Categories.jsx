import CategoriesCard from "./CategoriesCard";

     
     const Categories = ({catagories}) => {
        console.log(catagories)
    return (
        <div className="py-10">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    catagories.map(catagori=><CategoriesCard key={catagori.id} catagori={catagori}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;