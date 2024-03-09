
import React from 'react';
import '../components/Checkout.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from '../components/Checkout';
import Header from '../components/common/Header';

function Donate(){
   return(
    <PayPalScriptProvider options={{'clientId':'AWeIhhTxDMoeJfJGQgDKrnY4qngg4wzdGybirekEkViksoqGjqklIPsRz2v2JaWROqzDdDY7JFQ1QW0s'}}>
   
        <Checkout/>
    </PayPalScriptProvider>


   )
   }


export default Donate;

