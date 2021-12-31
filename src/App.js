import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import Header from "./Header";
import Resume from "./Resume";
import SkillRating from './SkillRating';
import Seo from './seo';
import theme from './theme';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Header />
          <Seo 
            title="Matteo La Cognata" 
            author="Matteo La Cognata" 
            description="Matteo La Cognata - Curriculum Vitae"
            />
          <main>
            <Stack direction="row" spacing={8}>
              <SkillRating/>
              <Resume/>
            </Stack>             
          </main>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
