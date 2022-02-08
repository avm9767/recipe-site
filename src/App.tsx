import React from "react";
import recipes from "./recipes.json";

import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./AppTheme";
import "./App.css";

// import OrderedList from "./components/OrderedList/OrderedList";
// import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
// import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import Recipe from "./components/Recipe/Recipe";

function App() {
    const [recipeInfo, ] = React.useState(recipes);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme} >
                <div className="App">
                    {/* <OrderedList
                        title="Ingredients"
                        items={recipeInfo[0].ingredients.required}
                        uncheckedIcon={<CircleOutlinedIcon />}
                        checkedIcon={<CheckCircleOutlineRoundedIcon />}
                    /> */}
                    {/* <RecipeInfo
                        name={recipeInfo[0].recipeName}
                        description={recipeInfo[0].description}
                        image={recipeInfo[0].image}
                        duration={recipeInfo[0].duration}
                        yield={recipeInfo[0].yield}
                    /> */}
                    <Recipe
                        recipe={recipeInfo[0]}
                    />
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
