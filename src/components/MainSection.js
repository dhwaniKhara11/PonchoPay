import { useState } from "react"
import { useEffect } from "react"
import Multiselect from "multiselect-react-dropdown"
import useAxios from "../hooks/useAxios"
import ProviderList from "./ProviderList"

const MainSection = () => {
    const { fetchData, response, loading } = useAxios('providers');

    useEffect(() => {
      fetchData();
    }, []);

    const [filterCriteria, setFilterCriteria] = useState({});
    
    const [navbar, setNavbar] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    return (
        <div>
        <section className="min-h-fit bg-blue-700">
            <div className="grid gap-2 grid-rows-3">
                {/* Nav Bar */}
                <nav className="w-full bg-blue-700">
                    <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <a href="">
                                    <h2 className="text-2xl font-bold text-white">PonchoPay</h2>
                                </a>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-white hover:text-indigo-200">
                                        <a href="">Home</a>
                                    </li>
                                    <li className="text-white hover:text-indigo-200">
                                        <a href="">About</a>
                                    </li>
                                    <li className="text-white hover:text-indigo-200">
                                        <a href="">Contact Us</a>
                                    </li>

                                </ul>

                                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                    <a
                                        href=""
                                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                    >
                                        Account
                                   </a>

                                </div>
                            </div>
                        </div>
                        <div className="hidden space-x-2 md:inline-block">
                            <a
                                href=""
                                className="px-4 py-2 text-white rounded-md hover:bg-gray-800"
                            >
                                Account
                           </a>
                        </div>
                    </div>
                </nav>
                <div className="md:block text-center">
                    <h2 className="text-4xl md:text-3xl  sm:text-2xl text-white">Let's Make It Happen</h2>
                    <h3 className="text-2xl md:text-xl sm:text-lg py-5 text-gray-400">Process childcare vouchers & tax free childcare in one click!</h3>
                </div>
                {/* Search Bar */}
                <div className="bg-blue-700 flex justify-center items-center">

                    <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition ">
                        <div className="flex bg-gray-100 p-4 md:w-70 sm:w-25 space-x-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            </svg>
                            <input 
                                className="bg-gray-100 outline-none" 
                                type="text" 
                                placeholder="Article name or keyword..."
                                value ={searchText}
                                onChange={function onSearchTextChange(value) {
                                    setSearchText(value.target.value);
                                }} />
                        </div>
                        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                            <Multiselect
                                displayValue="name"
                                placeholder="Category"
                                onKeyPressFn={function noRefCheck() { }}
                                onRemove={function noRefCheck(selectedList) { 
                                    setCategoryList(selectedList);
                                    console.log(categoryList);
                                }}
                                onSearch={function noRefCheck() { }}
                                onSelect={function noRefCheck(selectedList) {
                                    setCategoryList(selectedList);
                                    console.log(categoryList);
                                 }}
                                options={[
                                    {
                                        name: 'Tax free child care',
                                        key: 'taxFreeChildcareEnabled'
                                        
                                    },
                                    {
                                        name: 'Childcare Vouchers',
                                        key: 'childcareVouchersEnabled'
                                    },
                                    {
                                        name: 'Credit/Debit Card',
                                        key: 'creditDebitCardEnabled'
                                    }
                                ]}
                                showCheckbox
                                showArrow
                            />
                        </div>
                        <div className="bg-teal-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                            <span onClick =  {function triggerSearch() { 
                                var criteria = {};
                                criteria.search = searchText;
                                criteria.categories = categoryList;
                                setFilterCriteria(criteria);
                            }} >Search</span>
                        </div>

                    </div>
                </div>
                {/* Vector */}
                <div className="mt-20">
               
                    
                    <div className=" bg-white w-1/2 h-36 text-black rounded-tr-full hover:shadow-lg">
                        <div className="grid grid-cols-3 gap-3 place-items-center h-full">
                            <div className="grid grid-rows-2">
                                <span className="text-black text-3xl sm:text-2xl">10M+</span>
                                <span className="text-gray-500 text-xl sm:text-lg">Transactions</span>
                                </div>
                            <div className="grid grid-rows-2"> 
                                <span className="text-black text-3xl sm:text-2xl ">25K+</span>
                                <span className="text-gray-500 text-xl sm:text-lg">Active Users</span>
                            </div>
                            <div className="grid grid-rows-2">
                                <span className="text-black text-3xl sm:text-2xl">300+</span>
                                <span className="text-gray-500 text-xl sm:text-lg">Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="m-20 bg-white">
            <div className="text-center">
                <h1 className="text-4xl">Recommended Providers</h1>
            </div>
            <div className="container mx-auto max-w-4xl">
            <ProviderList response={response} loading={loading} filterCriteria = {filterCriteria}/>
            </div>
        </section>
    </div>
    )
}

export default MainSection
