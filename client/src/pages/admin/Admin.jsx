import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Route } from 'react-router-dom'
import ProductManager from "./ProductManager";
import CategoryManager from './Category'
import BrandManager from "./BrandManager";
import ExpressManager from './ExpressManager'
import PaymentManager from './PaymentManager'
import OrdersManager  from './OrdersManager'


const Admin = () => {


  return (
    <div>
      <Header />

      <Route path="/admin/product" component={ProductManager} />
      <Route path="/admin/category" component={CategoryManager} />
      <Route path="/admin/brand" component={BrandManager} />
      <Route path="/admin/express" component={ExpressManager} />
      <Route path="/admin/payment" component={PaymentManager} />
      <Route path="/admin/orders" component={OrdersManager} />
      
    </div>
  );
};

export default Admin;
