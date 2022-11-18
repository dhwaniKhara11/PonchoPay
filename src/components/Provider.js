import {
  BsStar,
  BsClock
} from "react-icons/bs";
import {
  AiFillCompass
} from "react-icons/ai";

const Provider = ({ api }) => {

  return (
  
  <div className="justify-center items-center">
        <div className="flex items-center p-6 space-x-14 w-1/4 ">
           {/* Card 1 */}
           <div className="shadow-lg rounded-3xl dark:bg-white">
            <img className="rounded-t-3xl" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
            <div className="p-0 ml-3">
              <div className="flex mt-3 justify-between">
                <span className="py-2 px-3 bg-orange-200 text-orange-800 rounded-lg font-semibold uppercase text-xs">Flash Offer</span>
                <div className="flex gap-3 m-2">
                  <BsStar className=""></BsStar>
                  <BsStar className=""></BsStar>
                  <BsStar className=""></BsStar>
                </div>
              </div>
              <h2 className="mt-2 font-bold text-xl">{api["profile"].name}</h2>
            </div>
            <div className="flex mt-2 pt-2 px-4 border-t text-sm text-gray-700 justify-between">
              <span className="flex items-center mb-4">
                <AiFillCompass></AiFillCompass>
                <h3 className="mx-4">Wembley</h3>
              </span>
              <span className="flex items-center mb-4">
                <BsClock></BsClock>
                <h3 className="mx-4">30-40 mins</h3>
              </span>
            </div>
            <div className="flex px-4 text-sm text-gray-700 justify-between">
              <span className="flex items-center mb-4">
                <AiFillCompass></AiFillCompass>
                <h3 className="mx-4">2-5 years</h3>
              </span>
              <span className="flex items-center mb-4">
                <BsClock></BsClock>
                <h3 className="mx-4">11 Nov 2022</h3>
              </span>
            </div>
            <div className="flex justify-between">
              <div className="mt-2 ml-2 text-2xl">
                <span className="font-semibold mr-2 mx-4">€</span>
                <span className="font-bold ">45,00</span>&nbsp;
              </div>
              <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-14 border-b-4 border-blue-700 hover:border-blue-500 rounded-br-3xl text-xl">
                  Pay
                </button>
              </div>
            </div>
          </div>
          </div>
      </div>
  )
}

export default Provider