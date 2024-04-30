import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Countries from "./Countries";
import Review from "./Review";
import Touristspot from "./Touristspot";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Touristspot></Touristspot>
            <Countries></Countries>
            <Review></Review>
        </div>
    );
};

export default Home;