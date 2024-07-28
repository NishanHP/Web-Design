import styled from "@emotion/styled";
import { AppBar, Badge, InputBase, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Mail, Pets} from "@mui/icons-material"

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0 10px",
    width: "40%",
    height: "30px",
}))

const Icons = styled("div")(({ theme }) => ({

}))

const Navbar = () => {
    return(
        <AppBar position="sticky">
            <StyledToolbar color='brown'>
                <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"}}}>
                    Home
                </Typography>
                <Pets sx={{display: {xs: "block", sm: "none"}}} />

                <Icons><Badge badgeContent={2} color="error">
                    <Mail></Mail>
                    </Badge>
                </Icons>
            </StyledToolbar>
            </AppBar>
    )
}

export default Navbar