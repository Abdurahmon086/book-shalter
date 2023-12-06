import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Loader from './Layout/Loader';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import { useGuards } from './Hooks/authGuard';

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const navigate = useNavigate()
  const isAuth = useGuards()
  const { pathname } = useLocation()

  useEffect(() => {

    if (!isAuth && pathname != '/signin') {
      navigate('/signnup')
    }

  }, [pathname])


  return (
    <>
      {
        !isAuth ? (pathname == '/signin' ? <SignIn /> : <SignUp />) :
          (
            <Suspense>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          )
      }
    </>
  );
}

export default App;