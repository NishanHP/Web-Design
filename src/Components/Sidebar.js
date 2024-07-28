import { Box } from "@mui/material";
import React from "react";

const Sidebar = () =>{
    return (
        <Box bgcolor={"lightgreen"} flex={1} sx={{display:{xs: "none", sm: "block"}}}>
            SideBar
        </Box>
    )
}

export default Sidebar