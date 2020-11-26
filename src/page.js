import { renderRoutes, matchRoutes } from 'react-router-config';
import React from 'react';
import routes from './route';
import { Breadcrumb } from './components';

/**
 * These are root pages
 */
const Home = ({location}) => {
  const matchedRoutes = matchRoutes(routes, location.pathname);
  console.log('matchedRoutes in Home', matchedRoutes);
  return(
    <div>
      <h1 className="py-3">Home</h1>
      
      <Breadcrumb 
        locationPath={location.pathname} 
        matchedRoutes={matchedRoutes}
      />
    </div>
  );
};

const Books = ({location}) => {
  const matchedRoutes = [
      {
      route: {
        path: '/',
        breadcrumbName: 'Home'
      }
    },...matchRoutes(routes, location.pathname)
  ];
  console.log('matchedRoutes in Books', matchedRoutes);
  return(
    <div>
      <h1 className="py-3">Books</h1>
      
      <Breadcrumb 
        locationPath={location.pathname} 
        matchedRoutes={matchedRoutes}
      />
    </div>
  );
};

const Electronics = ({route, location}) => {
  const matchedRoutes = [
      {
      route: {
        path: '/',
        breadcrumbName: 'Home'
      }
    },...matchRoutes(routes, location.pathname)
  ];
  console.log('matchedRoutes in Electronics', matchedRoutes);

  return (
    <div>
      <h1 className="py-3">Electronics</h1>
      {/* Breadcrumb */}
      <Breadcrumb 
        locationPath={location.pathname} 
        matchedRoutes={matchedRoutes}
      />

      {renderRoutes(route.routes)}
    </div>
  );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = (props) => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = (props) => {
  return <h3>Desktop PC</h3>;
};

const Laptop = (props) => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };