import React from "react";
import Header from "../Header";

import hero from "../../assets/images/hero.svg";
import Button from "../common/Button";
import Input from "../common/Input";

import price from "../../assets/images/price.svg";
import healthcare from "../../assets/images/healthcare.svg";
import satisfied from "../../assets/images/satisfied.svg";
import premium from "../../assets/images/premium.svg";
import quotes from "../../assets/images/quotes.svg";
import Card from "../Card";
import Footer from "../Footer";





function Home() {
    return (
        <div>
            <Header />
            <div className="grid lg:grid-flow-col grid-flow-row lg:gap-[97px] lg:w-[1206px] justify-center m-auto lg:mt-[120px] p-[35px] pb-[300px]">
                <div className="lg:order-1 order-last lg:text-start">
                    <p className="py-2 lg:text-5xl text-3xl font-robotoBold lg:w-[563px] w-full">
                        Subscribe today and get
                        <span className="lg:block"> notified first when we</span>
                        <span className="lg:block"> launch Orange app!</span>
                    </p>
                    <p className="lg:w-[563px] pt-[25px] text-base font-robotoMedium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>

                    <div className="pt-[40px] flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-5">
                        <Input
                            placeholder="Your email address"
                            width="lg:w-[368px] w-full h-[60px]"
                        />
                        <Button label="Subscribe now" width="w-[168px] h-[60px]" />
                    </div>
                </div>

                <img className="lg:order-2" src={hero} alt={hero} />
            </div>

            <div className="bg-white lg:p-[35px] p-3">
                <div className="bg-white relative bottom-[200px] mb-[-200px] lg:w-[1206px] grid lg:grid-flow-col grid-flow-row gap-5 m-auto shadow-lg rounded-lg lg:p-[35px]  p-5 text-black">

                    <div className="lg:w-[302px] flex flex-col">
                        <img className="w-[207px] h-[119px] m-auto" src={price} alt={price} />
                        <p className="text-darkBlue text-xl text-start mt-[20px] font-robotoMedium">Title 1</p>
                        <div className="border-b-4 border-bgOrange w-[50px] mb-[37px]" />
                        <p className="text-darkBlueLight leading-loose text-base lg:w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="lg:w-[302px] flex flex-col">
                        <img className="w-[207px] h-[119px] m-auto" src={healthcare} alt={healthcare} />
                        <p className="text-darkBlue text-xl text-start mt-[20px] font-robotoMedium ">Title 2</p>
                        <div className="border-b-4 border-bgOrange w-[50px] mb-[37px]" />
                        <p className="text-darkBlueLight leading-loose text-base lg:w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="lg:w-[302px] flex flex-col">
                        <img className="w-[207px] h-[119px] m-auto" src={satisfied} alt={satisfied} />
                        <p className="text-darkBlue text-xl text-start mt-[20px] font-robotoMedium">Title 3</p>
                        <div className="border-b-4 border-bgOrange w-[50px] mb-[37px]" />
                        <p className="text-darkBlueLight leading-loose text-base lg:w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                </div>
            </div>

            <div className="p-[35px] bg-white">
                <div className="lg:w-[1206px] m-auto grid lg:grid-flow-col grid-flow-row items-center lg:text-end text-center gap-5">
                    <img className="lg:w-[496px] lg:h-[659px] object-fit" src={premium} alt={premium} />
                    <div>
                        <p className=" text-bgOrange font-robotoBold lg:text-5xl text-3xl">It tastes like Premium.</p>
                        <p className=" text-darkBlue font-robotoBold lg:text-4xl text-2xl mt-[17px] mb-[40px]">Better than an apple.</p>
                        <p className=" text-darkBlueLight font-robotoMedium text-base lg:leading-relaxed leading-loose mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button label="Subscribe now" width="w-[168px] h-[60px] " />
                    </div>
                </div>
            </div>

            <div className="bg-white overflow-hidden p-[35px]">
                <div className="lg:w-[1206px] m-auto grid lg:grid-flow-col grid-flow-row">


                    <div className="relative lg:top-0 top-[100px]">
                        <img className="lg:w-[378px] w-[148px] h-[168px] lg:h-[415px]" src={quotes} alt={quotes} />
                        <p className="text-bgOrange font-robotoBold lg:text-4xl relative lg:bottom-[375px] bottom-[150px] left-[10px] lg:left-[45px]">What Our
                            <span className="block">Customer Say</span>
                        </p>
                    </div>

                    <div className="bg-bgOrange rounded-l-xl lg:h-[950px] w-[300px] h-[650px] lg:w-[810px] relative left-[180px] ">

                        <div className="grid grid-flow-col lg:gap-[60px] gap-5 relative lg:top-[200px] top-[100px] lg:right-[250px] right-[200px] w-[1206px] overflow-scroll p-5">
                            <Card color="text-white bg-lightBlue" />
                            <Card color="text-darkBlue bg-white" />
                            <Card color="text-white bg-lightBlue" />
                            <Card color="text-darkBlue bg-white" />
                            <Card color="text-white bg-lightBlue" />
                            <Card color="text-darkBlue bg-white" />
                            <Card color="text-white bg-lightBlue" />

                        </div>

                    </div>
                </div>
            </div>

        <Footer/>

        </div>
    );
}

export default Home;
