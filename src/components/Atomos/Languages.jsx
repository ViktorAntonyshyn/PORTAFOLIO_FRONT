
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Languages.css'


function Languages() {
    return (
        <>
            <div className='container-lang'>
                <div className='lang'>
                    <h5>Languages</h5>
                </div>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <span>1.  </span>
                    <div className="progress-bar" style={{ width: '24%' }}>English</div>
                </div> <br />
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <span>2.  </span>
                    <div className="progress-bar" style={{ width: '25%' }}>Spanish</div>
                </div> <br />
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span>3.  </span>
                    <div className="progress-bar" style={{ width: '50%' }}>Polish</div>
                </div> <br />
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <span>4.  </span>
                    <div className="progress-bar" style={{ width: '75%' }}>Russian</div>
                </div> <br />
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <span>5.  </span>
                    <div className="progress-bar" style={{ width: '97%' }}>Ukraniano - nativo</div>
                </div></div>

        </>
    );
}

export default Languages;