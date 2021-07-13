import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import UserList from "../userDetails/UserList";

const Home = () => {
    return(
        <>
          <Header />
          <UserList />
          <Footer />
        </>
    )
}

export default Home;