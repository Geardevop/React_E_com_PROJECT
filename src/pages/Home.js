import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { useEffect, useState } from 'react';
import { products } from '../data';
import useAPI from '../hooks/useAPI';
export const Home = () => {
 
  const {data, loading} = useAPI("/products")
  
  return(
  <div>
    <Hero />
    {loading   &&<div>loading..</div>}
    {!loading && data && <ProductList data={products} />}
  </div>
  )
};

export default Home;
