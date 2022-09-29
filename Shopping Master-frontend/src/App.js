import "./App.css";
import React from "react";
import Signin from "./MyComponent/Signin";
import Register from "./MyComponent/Register";
import Registration from "./MyComponent/Registration";
import Footer from "./MyComponent/Footer";
import Bookings from "./MyComponent/Bookings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./MyComponent/Products";
import Profile from "./MyComponent/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllBookings from "./MyComponent/AllBookings";
import MyBookings from "./MyComponent/MyBookings";
import Pendings from "./MyComponent/Pendings";
import Completeds from "./MyComponent/Completeds";
import AddBookings from "./MyComponent/AddBookings";
import CompletedBookingDetail from "./MyComponent/CompletedBookingDetail";
import HomePage from "./MyComponent/HomePage";
import Productlist from "./MyComponent/Productlist";
import Addproduct from "./MyComponent/Addproduct";
import Productdetail from "./MyComponent/Productdetail";
import Allbookingstatus from "./MyComponent/Allbookingstatus";
import PendingBookingDetail from "./MyComponent/PendingBookingDetail";
import Protected from "./MyComponent/Protected";
import Error10 from "./MyComponent/Error10";
import ShoppingJunction from "./MyComponent/ShoppingJunction";
import Category from "./MyComponent/Category";
import AddCategory from "./MyComponent/AddCategory";
import Testing from "./MyComponent/Testing";
function App({ history }) {
  function check() {
    if (localStorage.getItem("token") == null) {
      console.log("token not find");
      return false;
    }
    return true;
  }

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/register1" element={<Register />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/testing" element={<Testing />} />
          <Route
            exact
            path="/addcategory"
            element={
              <Protected isLoggedIn={check()}>
                <AddCategory />
              </Protected>
            }
          />
          <Route
            exact
            path="/category"
            element={
              <Protected isLoggedIn={check()}>
                <Category />
              </Protected>
            }
          />
          <Route
            exact
            path="/Home"
            element={
              <Protected isLoggedIn={check()}>
                <ShoppingJunction />
              </Protected>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <Protected isLoggedIn={check()}>
                <Product />
              </Protected>
            }
          />
          <Route
            exact
            path="/addproduct"
            element={
              <Protected isLoggedIn={check()}>
                <Addproduct />
              </Protected>
            }
          />
          <Route
            exact
            path="/productlist"
            element={
              <Protected isLoggedIn={check()}>
                <Productlist />
              </Protected>
            }
          />
          <Route
            exact
            path="/AllBookings"
            element={
              <Protected isLoggedIn={check()}>
                <AllBookings />
              </Protected>
            }
          />
          <Route
            exact
            path="/bookings"
            element={
              <Protected isLoggedIn={check()}>
                <Bookings />
              </Protected>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Protected isLoggedIn={check()}>
                <Profile />
              </Protected>
            }
          />
           <Route
            exact
            path="/MyOrderBookings"
            element={
              <Protected isLoggedIn={check()}>
                <MyBookings />
              </Protected>
            }
          />
          <Route
            exact
            path="/Pendings"
            element={
              <Protected isLoggedIn={check()}>
                <Pendings />
              </Protected>
            }
          />
          <Route
            exact
            path="/Completeds"
            element={
              <Protected isLoggedIn={check()}>
                <Completeds />
              </Protected>
            }
          />
          <Route
            exact
            path="/AddBookings"
            element={
              <Protected isLoggedIn={check()}>
                <AddBookings />
              </Protected>
            }
          />
          <Route
            exact
            path="/productdetail"
            element={
              <Protected isLoggedIn={check()}>
                <Productdetail />
              </Protected>
            }
          />
          <Route
            exact
            path="/allbookingsstatus"
            element={
              <Protected isLoggedIn={check()}>
                <Allbookingstatus />
              </Protected>
            }
          />
          <Route
            exact
            path="/pendingbookingdetail"
            element={
              <Protected isLoggedIn={check()}>
                <PendingBookingDetail />
              </Protected>
            }
          />
          <Route
            exact
            path="/completedbookingdetail"
            element={
              <Protected isLoggedIn={check()}>
                <CompletedBookingDetail />
              </Protected>
            }
          />
          <Route
            exact
            path="/error404"
            element={
              <Protected isLoggedIn={check()}>
                <Error10 />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
