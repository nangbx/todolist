import React from 'react';
import Header from '../Header';
import Content from './Content/Content';
import NotFound from '../404NotFound/404NotFound';
import { useSelector } from 'react-redux';
export default function Home() {
  const {login} = useSelector(state => state.note)

  return <div>
    {
      login ? (
        <React.Fragment>
      <Header/>
      <Content/>
      </React.Fragment>
      ) : <NotFound/>
    }
      
  </div>;
}
