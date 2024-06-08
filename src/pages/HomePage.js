import React, { useContext } from 'react';

import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';
import { SocketContext } from '../context/SocketContext';
import { BandCharts } from '../components/BandCharts';

function HomePage() {

  const { online } = useContext( SocketContext )

  return (
    <div className="container">
        <div className="alert">
          <p>
            Service status: 
            {
              online
                ? <span className="text-success fw-bolder "> Online</span>
                : <span className="text-danger"> Offline</span>
            }
           
          </p>
        </div>


        <h1>BandNames</h1>
        <hr />

        <div className='row'>
            <div className='col'>
              <BandCharts />
            </div>
        </div>

        <div className="row">
          <div className="col-8">
            <BandList />
          </div>

          <div className="col-4">
            <BandAdd />
          </div>
        </div>



    </div>
  );
}

export default HomePage;