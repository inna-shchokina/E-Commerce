// import { useState } from "react";
import FilterNav from "../components/FilterNav";
import Header from "../components/Header";
import Items from "../components/Items";

function Home({ items }) {
  return (
    <div className="bg-[#FBFCFD]">
      <Header />
      <FilterNav />
      <Items items={items} />
    </div>
  );
}

export default Home;
