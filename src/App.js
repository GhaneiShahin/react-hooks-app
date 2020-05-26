import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import { AuthContext } from './context/auth-context';

const App = props => {
  const authContext = useContext(AuthContext);

  const {isAuth} = authContext;

  // let content = <Auth />;
  // if (authContext.isAuth) {
  //   content = <Ingredients />;
  // }

  return (
    <div>
      {isAuth ? <Ingredients /> : <Auth />}
    </div>
  );
};

export default App;
