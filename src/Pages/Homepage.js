import React, { useEffect } from 'react';
import { mainFeaturedPost } from "../data";
import { Grid } from "@mui/material";
import FeaturedPet from "../Components/FeaturedPet";
import MainFeaturedPost from '../Components/MainFeaturedPost';
import { fetchAllPets } from "../redux/actions/pets";
import { useDispatch, useSelector} from "react-redux";

const Homepage = () => {
    const dispatch = useDispatch();
    const pets = useSelector((state)=>state.pets.allPets);
    useEffect(() => {
        fetchAllPets({dispatch});
      },[]);
    return <> <MainFeaturedPost mainFeaturedPost={mainFeaturedPost}/>
    <Grid container spacing={4}>
    {pets.map((pet)=>(
      <FeaturedPet key={pet._id} pet={pet}/>
    ))}
    </Grid></>
}
export default Homepage;