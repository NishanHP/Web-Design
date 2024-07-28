import { styled } from '@mui/material/styles';

const NavLink = styled('a')({
  textDecoration: 'none',
  color: (theme) => theme.palette.link.primary, 
  transition: 'color 0.3s ease',
  '&:hover': {
    color: (theme) => theme.palette.link.secondary,
  },
});

export default NavLink;
