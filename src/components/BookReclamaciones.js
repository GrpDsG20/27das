import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Reclamos1 } from './Pages/Book/Page1';
import { Reclamos2 } from './Pages/Book/Page2';
import { Reclamos3 } from './Pages/Book/Page3';
import { BotonSiguiente, BotonVolver} from './ElementForm';
import "../components/BookReclamaciones.css"


const steps = ['Identificación del consumidor reclamante', 'Identificación del bien contratado', 'Detalle del reclamo y pedido del consumidor'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Reclamos1 />;
    case 1:
      return <Reclamos2 />;
    case 2:
      return <Reclamos3 />;
    default:
      throw new Error('Paso No Encontrado');
  }
}

const theme = createTheme();

export function BookReclamaciones(){
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por sus recomendaciones.
                </Typography>
                <Typography variant="subtitle1">
                   Su número de orden es #2001539. Hemos enviado su pedido por correo electrónico
                  confirmación, y le enviaremos una actualización cuando su pedido se haya
                  Enviado.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box>
                  {activeStep !== 0 && (
                    <BotonVolver onClick={handleBack} >
                      Volver
                    </BotonVolver>
                  )}
                  
                  <BotonSiguiente onClick={handleNext} >
                    {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                  </BotonSiguiente>
                  <br />
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>        
      </Container>
    </ThemeProvider>
  );
}