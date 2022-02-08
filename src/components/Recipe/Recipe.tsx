import React from "react";
import Grid from "@mui/material/Grid";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import OrderedList from "../OrderedList/OrderedList";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";


interface IProps {
    recipe: {
        recipeName: string,
        description: string,
        image: string,
        tags: string[],
        yield: string,
        duration: {
            prep: string,
            cook: string,
            total: string
        },
        ingredients: {
            required: string[],
            optional: string[]
        },
        directions: string[],
        variations: {
            variationName: string,
            ingredients: string[],
            directions: string[]
        }[],
        tips: string[],
        nutrition: {}
    }
}

const Recipe: React.FC<IProps> = (props: IProps) => {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                xs={12}
            >
                <RecipeInfo
                    name={props.recipe.recipeName}
                    description={props.recipe.description}
                    image={props.recipe.image}
                    duration={props.recipe.duration}
                    yield={props.recipe.yield}
                />
            </Grid>
            <Grid
                id="ingredients-list"
                item
                xs={12}
                md={6}
            >
                <OrderedList
                    reqTitle="Ingredients"
                    reqItems={props.recipe.ingredients.required}
                    optTitle="Optional"
                    optItems={props.recipe.ingredients.optional}
                    uncheckedIcon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlineRoundedIcon />}
                />
            </Grid>
            <Grid
                id="directions-list"
                item
                xs={12}
                md={6}
            >
                <OrderedList
                    reqTitle="Directions"
                    reqItems={props.recipe.directions}
                    // figure out how you want to do variations. maybe as a separate list? idk
                    uncheckedIcon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlineRoundedIcon />}
                />
            </Grid>
        </Grid>
    )
}

export default Recipe;
