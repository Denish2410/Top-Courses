import React from "react";
import Card from "./Card";
import { useState } from "react";
const Cards = ({courses,category}) => {
    const [likedCourses,setLikedCourses]=useState([]);

    const getCourses=()=>{
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((coursesCatagory)=>{
                coursesCatagory.forEach((courses)=>{
                    allCourses.push(courses);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses()?.map((course)=>{
                    return <Card key={course.id}
                                course={course}
                                likedCourses={likedCourses} 
                                setLikedCourses={setLikedCourses}/>
                })
            } 
        </div>
    );
};

export default Cards;
