import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import "./RecipeInfo.css";


interface IProps {
    name: string,
    description: string,
    image: string,
    duration: {
        prep: string,
        cook: string,
        total: string
    },
    yield: string
}

const RecipeInfo: React.FC<IProps> = (props: IProps) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 16px"
            }}
        >
            <Typography variant="h3">{props.name}</Typography>
            <Typography variant="subtitle1">{props.description}</Typography>
            <Box
                component="img"
                src={(props.image !== "") ? props.image : "./logo512.png"}
                sx={{
                    // maxHeight: "400px"
                    // figure out the CSS styles for the image once I have the whole recipe component made
                }}
            >
            </Box>
            <TableContainer>
                <Table
                    size="small"
                    sx={{
                        // width: {
                        //     sm: "100%",
                        //     md: "25%",
                        //     lg: "25%",
                        //     xl: "25%"
                        // },
                        maxWidth: {
                            xs: "325px",
                            sm: "325px",
                            md: "350px",
                            lg: "350px",
                            xl: "350px"
                        }
                    }}
                >
                    <TableHead>
                        <TableRow className="row">
                            <TableCell
                                align="left" 
                                className="cell"
                            >
                                Prep Time
                            </TableCell>
                            <TableCell
                                align="left"
                                className="cell"
                            >
                                Cook Time
                            </TableCell>
                            <TableCell
                                align="left"
                                className="cell"
                            >
                                Total Time
                            </TableCell>
                            <TableCell
                                align="left"
                                className="cell"
                            >
                                Yields
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className="row">
                            <TableCell
                                align="left"
                                className="cell cell_data"
                                sx={{
                                    color: "secondary.main"
                                }}
                            >
                                {props.duration.prep}
                            </TableCell>
                            <TableCell
                                align="left"
                                className="cell cell_data"
                                sx={{
                                    color: "secondary.main"
                                }}
                            >
                                {props.duration.cook}
                            </TableCell>
                            <TableCell
                                align="left"
                                className="cell cell_data"
                                sx={{
                                    color: "secondary.main"
                                }}
                            >
                                {props.duration.total}
                            </TableCell>
                            <TableCell
                                align="left"
                                className="cell cell_data"
                                sx={{
                                    color: "secondary.main"
                                }}
                            >
                                {props.yield}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default RecipeInfo;
