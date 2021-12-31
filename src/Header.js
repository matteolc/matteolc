import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinDropIcon from '@mui/icons-material/PinDrop';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const StyledTypography = styled(Typography)(({ theme }) => ({
    flexGrow: 1, 
    alignSelf: 'flex-start',
    marginBottom: 0,
    borderLeft: '9px solid',
    paddingLeft: '12px'
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  // '@media only screen and (max-width: 400px)': {
  //   padding: 0,
  // },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  background: '#ffffff',
  color: '#000000',
  '@media all': {
    minHeight: 251,
  },
}));

const InfoItem = (props) => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontSize: '16px', fontFamily: 'DM Mono'}}
        >
          {props.info}
        </Typography>
        {props.icon}
  </div>     
  )
}

function Header(props) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 4}}>
      <HideOnScroll {...props}>
      <StyledAppBar>
        <StyledToolbar>
          <Container >
            <Stack spacing={2} sx={{borderBottom: '1px solid'}} direction='row'>
              <Stack spacing={2} sx={{ paddingRight: 2}}>
              <StyledTypography
                variant="h3"
                noWrap
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  alignSelf: 'flex-start',
                  marginBottom: 0
                }}>
                Matteo La Cognata
              </StyledTypography>
              <StyledTypography
                variant="h5"
                noWrap
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  alignSelf: 'flex-start',
                  marginTop: '0px !important'
                }}
              >
                M.Sc. Telecommunication Engineering
              </StyledTypography>
              <Typography
                variant="h6"
                component="div"
                sx={{color: grey[700]}}
              >
                <p>
                Skilled and resourceful engineer with a diverse expertise and a solid practical background in Software development, Voice-over-IP and DevOps.
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    I
                  </Grid>
                  <Grid item>
                    <FavoriteIcon color='error' sx={{marginLeft: '2px', marginRight: '2px', paddingTop: '2px'}} />
                  </Grid>
                  <Grid item>
                    refactoring, observability and building dashboards.
                  </Grid>
                </Grid>                 
                </p>
                </Typography> 
              </Stack> 
              <Stack spacing={0} sx={{paddingTop: 2}}>
                <InfoItem info='matteo.lacognata@gmail.com' icon={<MailOutlineIcon sx={{marginLeft: 2}}/>}/> 
                <InfoItem info='+39-380-152-4729' icon={<PhoneIcon sx={{marginLeft: 2}}/>}/> 
                <InfoItem info='Milan, Italy' icon={<PinDropIcon sx={{marginLeft: 2}}/>}/> 
                <InfoItem info='linkedin.com/in/matteolc' icon={<LinkedInIcon sx={{marginLeft: 2}}/>}/> 
                <InfoItem info='github.com/matteolc' icon={<GitHubIcon sx={{marginLeft: 2}}/>}/> 
              </Stack>     
            </Stack> 
          </Container>        
        </StyledToolbar>
      </StyledAppBar>
      </HideOnScroll>
       <StyledToolbar/>
    </Box>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Matteo La Cognata`,
}

export default Header
