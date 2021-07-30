import React from 'react';
import HomePage from './components/HomePage';


const Page = ({ 
  page,
}) => (
  <div className="pages">
    {page === 'HOME' && (<HomePage />)}
  </div>
);

export default Page;