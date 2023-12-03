import React, { useEffect } from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Container from "@mui/material/Container"
import { useDispatch, useSelector} from "react-redux";
import CssBaseline from '@mui/material/CssBaseline'
import{createTheme, ThemeProvider} from "@mui/material/styles"
import { fetchAllCategories } from "./redux/actions/categories";
import { BrowserRouter} from "react-router-dom";

import Router from "./router";

const sections = [{title:"All Pets", url:"/"}];

const theme = createTheme({
  typography: {
    fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = ()=>
{
  const dispatch = useDispatch();
  const allCategories = useSelector((state)=>state.categories.allCategories);
  
  useEffect(() => {
    fetchAllCategories({dispatch});
  },[]);
  return<ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <Container maxWidth="lg">
      <Header allCategories = {[...sections, ...allCategories.map((category) => ({
        title: category?.name,
        url: `/${category?._id}`,
      })),
    ]}
    />

      <Router/>
    </Container>
    <Footer title="Pet Adoption Center" description={"Every Pet deserves a good home"}/>
    </BrowserRouter>
   
    </ThemeProvider>
}

export default App;
