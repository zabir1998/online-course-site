import React from 'react';
import Course from "../Course/Course";
import { fakeData } from "../../fakeData/fakeData";
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Shop = () => {
    
    const [courses, setCourses] = useState(fakeData);
    const [cart,setCart]=useState([]);
    // console.log(courses)
    const handleAddCourse=(course)=>{
        console.log('Course Added',course);
        const newCart=[...cart,course];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="course-container">
            {courses.map((crs) => (
          <Course
           handleAddCourse={handleAddCourse}
            key={crs.id}
            course={crs}
          ></Course>
        ))}
            </div>
            <div className="cart-container">

        <Cart cart={cart}></Cart>

</div>  
            
        </div>
    );
};

export default Shop;