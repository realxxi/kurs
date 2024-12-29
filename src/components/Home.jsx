import data from "../pages/data";
import { Link } from "react-router-dom";
const Home = () => {

    return (
        <div className="">
            <div className="flex item-center justify-between px-6" >
                <div className=" flex justify-center items-center flex-col">
                    <Link className="w-[300px]" to="/byd"><img className="w-[100%]   " src={data.logos.byd} alt="" /> </Link>
                    
                </div>
                <div className=" flex justify-center items-center flex-col">
                    <Link className="w-[300px]" to="/kia"> <img className="w-[100%]   " src={data.logos.kia} alt="" /></Link>
                    
                </div>
                <div className=" flex justify-center items-center flex-col">
                    <Link className="w-[300px]" to="/opel"><img className="w-[100%]   " src={data.logos.opel} alt="" /></Link>
                    
                </div>
                <div className=" flex justify-center items-center flex-col">
                    <Link className="w-[300px]" to="/hyundai"><img className="w-[100%]   " src={data.logos.hyundai} alt="" /></Link>
                </div>
            </div>
            <p className="text-center text-6xl font-bold px-7 py-14">Saytimizda ushbu avtomobillar haqida  ma'lumotlarga ega bo'lishingiz mumkin </p>
        </div>
    );
};

export default Home;
