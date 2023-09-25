import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {

     const catagories = useLoaderData();
     

    return (
        <div>
            <Banner></Banner>
            <Categories catagories={catagories}></Categories>
        </div>
    );
};

export default Home;