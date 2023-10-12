/**import React from 'react'

export const Footer = () => {
  return (
    <div>
      <p align="center"><p>if you have an Account <a href="login.html">Login</a>.</p>
  </p>
    </div>
  )
}
export default Footer**/
import React from 'react';
import { Pagination } from 'antd';
const App = () => <Pagination defaultCurrent={1} total={50} />;
export default App;