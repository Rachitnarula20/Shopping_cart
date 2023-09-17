import {CartIcon,} from '../icons';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import React from 'react'

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    return (
        <nav>
          <div className='nav-center'>
            <h3>CELL PLANET</h3>
            <div className='nav-container'>
              <CartIcon />
              <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
              </div>
            </div>
          </div>
        </nav>
      );
    };
    export default Navbar;