import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
const ShoppingJunction = () => {
        return (

                <>
                        <Nav />
                        <div className="md:container md:mx-auto object-center m-7">
                                <div className=" flex flex-row justify-center">


                                        {/* <NavLink to="/user"> 
<div className="max-w-sm mx-1.5 w-60  bg-white rounded-lg border hover:bg-slate-400 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-full mt-5 mx-auto mt-5"  src="data:image/png;base64,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" alt=""/>
    
    <div className="p-5">
      
            <h5 className="mb-2 text-center  text-2xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">Users</h5>
       
        
        
    </div>
</div>
</NavLink> */}


                                        <NavLink to="/products">
                                                <div className="max-w-sm mx-1.5 w-60 bg-white rounded-lg border hover:bg-slate-400 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                                                        <img className="rounded-full mt-5 mx-auto bg-white" src="data:image/png;base64,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" alt="" />

                                                        <div className="p-5">

                                                                <h5 className="mb-2 mt-1.5 text-2xl text-center mx-auto  font-bold tracking-tight text-gray-900 dark:text-white">Products</h5>



                                                        </div>
                                                </div>
                                        </NavLink>



                                        <NavLink to="/MyOrderBookings">
                                                <div className="max-w-sm mx-1.5 w-60 bg-white rounded-lg hover:bg-slate-400 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                                                        <div>
                                                                <img className="rounded-full mt-5 mx-auto" src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s=" alt="" />

                                                        </div>
                                                        <div className="p-5">

                                                                <h5 className=" text-2xl mb-2 text-center mx-auto font-bold tracking-tight text-gray-900 dark:text-white">Order Bookings</h5>



                                                        </div>
                                                </div>
                                        </NavLink>

                                        <NavLink to="/profile">
                                                <div className="max-w-sm mx-1.5 w-60 bg-white  hover:bg-slate-400 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                                        <div className='mb-5 mt-7'>
                                                                <img className="rounded-full mt-5 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpAe0mMrHU3Tk_cejwncStqO-nRJ5sxPxTQ&usqp=CAU" alt="" />
                                                        </div>
                                                        <div className="p-5">

                                                                <h5 className="mb-2 mt-1 text-2xl text-center mx-auto font-bold tracking-tight text-gray-900 dark:text-white">My Profile</h5>


                                                        </div>
                                                </div>

                                        </NavLink>
                                </div>

                        </div>




                </>
        )
}

export default ShoppingJunction