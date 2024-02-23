"use client"

import { useState } from 'react';

export default function PricePage () {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex space-x-9 mb-4 rounded-lg">
        <input
          type="radio"
          id="tab1"
          name="tabs"
          className="hidden"
          checked={selectedTab === 'tab1'}
          onChange={() => handleTabChange('tab1')}
        />
        <label
          htmlFor="tab1"
          className={`cursor-pointer py-2 px-4 bg-blue-500 text-white ${
            selectedTab === 'tab1' && 'bg-blue-700'
          }`}
        >
          Tab 1
        </label>

        <input
          type="radio"
          id="tab2"
          name="tabs"
          className="hidden"
          checked={selectedTab === 'tab2'}
          onChange={() => handleTabChange('tab2')}
        />
        <label
          htmlFor="tab2"
          className={`cursor-pointer py-2 px-4 bg-blue-500 text-white ${
            selectedTab === 'tab2' && 'bg-blue-700'
          }`}
        >
          Tab 2
        </label>
      </div>

      <div className='flex w-70 m-10'>
      <div className="p-4 border rounded-lg ">
        {selectedTab === 'tab1' && <div>Tab 1 Content Goes Here</div>}
        {selectedTab === 'tab2' && <div>Tab 2 Content Goes Here</div>}
      </div>

      <div className='w-30'>test bg</div>
      </div>
    </div>
  );
};


