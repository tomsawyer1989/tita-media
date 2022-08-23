import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from "./pages/login";
import Home from './pages/home';

function RequireAuth({ children, login }) {
  let location = useLocation();

  if (!login) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App({ login }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth login={ login }>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  login: state.users.login
});

export default connect(mapStateToProps)(App);