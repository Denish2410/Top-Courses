import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { filterData, apiUrl }  from "./data";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses]=useState({});
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  const fetchData = async ()=>{
    setLoading(true);
    try{
      const res=await fetch(apiUrl);
      const output=await res.json();
      setCourses(output.data);
    }
    catch(err){
      toast.error("Something went wrong");
      return(
        <div className="flex items-center justify-cente">
          <p className="bg-bgDark2 text-20px">Eoorrrrrrr</p>
        </div>
      )
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter 
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
          }
        </div>
      </div>

    </div>
  );
};

export default App;