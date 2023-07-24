import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import NotFound from './components/NotFound';
import Book from './components/Book';

// Redux
import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
