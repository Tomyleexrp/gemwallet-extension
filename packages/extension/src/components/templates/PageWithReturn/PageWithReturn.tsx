import { FC } from 'react';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { Container, Divider, IconButton, Typography } from '@mui/material';

export interface PageWithReturnProps {
  title: string;
  handleBack: () => void;
}

export const PageWithReturn: FC<PageWithReturnProps> = ({ title, handleBack, children }) => {
  return (
    <>
      <div
        style={{
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <IconButton
          style={{ position: 'fixed', left: 0 }}
          aria-label="close"
          onClick={() => handleBack()}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <Typography variant="body1">{title}</Typography>
      </div>
      <Divider />
      <Container
        component="main"
        style={{
          height: 'calc(100vh - 50px)',
          padding: '1rem 0.5rem'
        }}
      >
        <Container>{children}</Container>
      </Container>
    </>
  );
};
