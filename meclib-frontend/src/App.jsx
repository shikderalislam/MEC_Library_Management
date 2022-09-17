import { useState, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBox from "./components/search/SearchBox";
import { MeclibContext } from "./context/AppContext";
import Navbar from "./layout/Navbar";
import AdminRoutes from "./pages/admin";
import Dashboard from "./pages/admin/Dashboard";
import UpdateBook from "./pages/admin/UpdateBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserRoutes from "./pages/user";
import BookDetails from "./pages/user/BookDetails";
import Profile from "./pages/user/Profile";
import SearchBook from "./pages/user/SearchBook";

function App() {
  // const [user, setUser] = useState()
  const { isAuth, getAllBooks, user, isAuthenticate, allBooks } =
    useContext(MeclibContext);
  // useEffect(() => {
  //   getAllBooks();
  //   // const verifiedUser = verifyToken()
  //   // setUser(verifiedUser)
  // }, []);

  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchBook />} />
        <Route element={<UserRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/book/update/:id" element={<UpdateBook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
