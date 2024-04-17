import React from 'react'

const DashboardBanner = () => {
  return (
    <div className="bg-primary flex items-center h-[150px] lg:h-[200px] rounded-md px-10 gap-4">
        <img
        className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full"
        src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        />
        <h1 className='text-2xl lg:text-4xl'>Thomas Kauffmant</h1>
  </div>
  )
}

export default DashboardBanner