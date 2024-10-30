import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TailSpin } from 'react-loader-spinner';


function Technologies() {
  console.log("Technologies component rendered");
  const [selectedOption, setSelectedOption] = useState("link-1");

  const handleOptionSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <Tabs
      fill
      defaultActiveKey="link-1"
      id="technologies-tabs"
      activeKey={selectedOption}
      onSelect={handleOptionSelect}
      className="text-danger container-fluid tab-container"
    >
      <Tab className='tab tab-title-react' eventKey="link-1" title="NEXT.JS">
        {selectedOption === "link-1" && (
          <div className="content tab-content-react">
            <TailSpin
              height="80"
              width="80"
              color="#ffffff"
              ariaLabel="loading"
            />
            <p className='coming-soon'>Next.js Coming Soon</p>
          </div>
        )}
      </Tab>
      <Tab className='tab tab-title-react' eventKey="link-2" title="REACT">
        {selectedOption === "link-2" && (
          <div className="content tab-content-react">
            <TailSpin
              height="80"
              width="80"
              color="#ffffff"
              ariaLabel="loading"
            />
            <p className='coming-soon'>React Coming Soon</p>
          </div>
        )}
      </Tab>
      <Tab className='tab tab-title-bootstrap' eventKey="link-3" title="TAİLWİND">
        {selectedOption === "link-3" && (
          <div className="content text-center tab-content-bootstrap">
            <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
            <p className='coming-soon'>Tailwind Coming Soon</p>
          </div>
        )}
      </Tab>
      <Tab className='tab tab-title-bootstrap' eventKey="link-4" title="BOOTSTRAP">
        {selectedOption === "link-4" && (
          <div className="content text-center tab-content-bootstrap">
            <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
            <p className='coming-soon'>Bootstrap Coming Soon</p>
          </div>
        )}
      </Tab>
      <Tab className='tab tab-title-sass' eventKey="link-5" title="SASS">
        {selectedOption === "link-5" && (
          <div className="content text-center tab-content-sass">
            <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
            <p className='coming-soon'>SASS Coming Soon</p>
          </div>
        )}
      </Tab>
      <Tab className='tab tab-title-javascript' eventKey="link-6" title="JAVASCRIPT">
        {selectedOption === "link-6" && (
          <div className="content text-center tab-content-javascript">
            <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
            <p className='coming-soon'>JavaScript Coming Soon</p>
          </div>
        )}
      </Tab>
      <Tab className='tab tab-title-html-css' eventKey="link-7" title="HTML-CSS">
        {selectedOption === "link-7" && (
          <div className="content text-center tab-content-html-css">
            <TailSpin
        height="80"
        width="80"
        color="#ffffff"
        ariaLabel="loading"
      />
            <p className='coming-soon'>HTML-CSS Coming Soon</p>
          </div>
        )}
      </Tab>
      
    </Tabs>
  );
}

export default Technologies;
