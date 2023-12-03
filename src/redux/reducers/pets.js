import { GET_ALL_CATEGORIES, GET_ALL_PETS, GET_PETS_BY_CATEGORY, GET_PET_BY_ID } from "../actionTypes/pets";

const intialState = {
    allPets:[],
    petsByCategory:[],
    selectedPet:{},
}
const petsReducer = (state = intialState,{type,payload}) =>
{
   switch (type)
   {
    case GET_ALL_PETS:
        return{
            ...state,
            allPets: payload,
        }; 
        case GET_PETS_BY_CATEGORY:
            return{
                ...state,
                petsByCategory:payload,
            };
        case GET_PET_BY_ID:
            return{
                ...state,
                selectedPet: payload,
            };      
        default:
            return state;
   }
};
export default petsReducer;