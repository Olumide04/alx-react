import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App({ isLoggedIn }) {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
    <div className="App-Login">
      {/* <Login /> */}
    </div>
    <div className="App-footer">
      <Footer />
    </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;