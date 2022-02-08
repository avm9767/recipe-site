import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from '@mui/material/Checkbox';
import ListItemText from "@mui/material/ListItemText";

import "./OrderedList.css";

interface IProps {
    reqTitle: string,
    reqItems: string[],
    optTitle?: string,
    optItems?: string[],
    uncheckedIcon: JSX.Element,
    checkedIcon: JSX.Element
}

const OrderedList: React.FC<IProps> = (props: IProps) => {

    function generateListItems(items: string[]): JSX.Element[] {
        return items.map((text, idx) => {
            return (
                <ListItem
                    key={idx}
                    className="list__item"
                >
                    <ListItemIcon>
                        <Checkbox
                            icon={props.uncheckedIcon}
                            checkedIcon={props.checkedIcon}
                            // if i ever need a list that doesn't require checkboxes, 
                            // then add a prop that can set the checkbox to disabled along with 
                            // some CSS styles that hide the disabled styles
                            sx={{
                                color: "#9999a1",
                                "&:hover": {
                                    backgroundColor: "#ffbb0014"
                                }
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            )
        });
    }

    function addOptionalItems(title: string, items: string[]) {
        return (
            <React.Fragment>
                <ListSubheader
                    className="list__title"
                    sx={{
                        color: "secondary.main"
                    }}
                >
                {title}
                </ListSubheader>
                {generateListItems(items)}
            </React.Fragment>
        )
    }

    return (
        <Box>
            <List
                subheader={
                    <ListSubheader
                        className="list__title"
                        sx={{
                            color: "secondary.main"
                        }}
                    >
                        {props.reqTitle}
                    </ListSubheader>
                }
            >
                {generateListItems(props.reqItems)}
                {(props.optItems !== undefined && props.optItems.length > 0 && props.optTitle !== undefined) ? addOptionalItems(props.optTitle, props.optItems) : undefined}
            </List>
        </Box>
    )
}

export default OrderedList;
