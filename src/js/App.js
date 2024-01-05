import React from 'react';
import User from '../components/Users';

export default function App() {
  return (
    <>
    <NavBar/>
      <h1>I am App Component!!!</h1>
      {/* <button onClick={() => {
        electron.notificationApi.sendNotification('My custom notification!');
      }}>Notify</button> */}
      <User/>
    </>
  )
}

export function NavBar() {
  return (
    <div>
      <h1>Nav Bar</h1>
    </div>
  )
}

