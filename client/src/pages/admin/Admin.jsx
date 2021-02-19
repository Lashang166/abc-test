import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Route } from 'react-router-dom'
import ProductManager from "./ProductManager";
import CategoryManager from './Category'
import BrandManager from "./BrandManager";


const Admin = () => {


  return (
    <div>
      <Header />

      <Route path="/admin/product" component={ProductManager} />
      <Route path="/admin/category" component={CategoryManager} />
      <Route path="/admin/brand" component={BrandManager} />
      
    </div>
  );
};

export default Admin;
