import React from 'react'

const Dashboard = async () => {
  const user = await getUser();
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard