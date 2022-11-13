import * as React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { AnimatedRoute } from './AnimatedRoute';
import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: 'cyan',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 1em',
        }}
      >
        <h3>App Header</h3>
        <p style={{ marginLeft: 'auto' }}>Login</p>
      </div>
      <Routes>
        <Route element={<AnimatedRoute />}>
          <Route
            index
            element={
              <React.Fragment>
                <h1>Hello StackBlitz!</h1>
                <p>Start editing to see some magic happen :)</p>
                See <Link to="/blog">Blog</Link> posts
              </React.Fragment>
            }
          />{' '}
          <Route
            path="/blog"
            element={
              <React.Fragment>
                <Link to="/">Go Back</Link>
                <h1>Blog Page</h1>
                <p>This will be a list of pages</p>
              </React.Fragment>
            }
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
