import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from "./pages/login";
import HomePage from './pages/home';

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
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <RequireAuth login={ login }>
              <HomePage />
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