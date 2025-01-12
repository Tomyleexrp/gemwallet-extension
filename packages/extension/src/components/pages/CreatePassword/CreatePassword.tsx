import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';

import { TextField, Typography } from '@mui/material';
import * as Sentry from '@sentry/react';

import { ERROR_RED } from '../../../constants';
import { useWallet } from '../../../contexts';
import { saveWallet } from '../../../utils';
import { PageWithStepper } from '../../templates';

export interface CreatePasswordProps {
  activeStep: number;
  steps: number;
  handleBack: () => void;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

export const CreatePassword: FC<CreatePasswordProps> = ({
  activeStep,
  steps,
  handleBack,
  setActiveStep
}) => {
  const [passwordError, setPasswordError] = useState('');
  const [saveWalletError, setSaveWalletError] = useState('');
  const { wallets, selectedWallet } = useWallet();

  const handleNext = useCallback(() => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPasswordValue = (document.getElementById('confirm-password') as HTMLInputElement)
      .value;
    if (passwordValue.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (passwordValue !== confirmPasswordValue) {
      setPasswordError('Passwords must match');
    } else if (wallets[selectedWallet]) {
      const _wallet = {
        publicAddress: wallets[selectedWallet].publicAddress,
        seed: wallets[selectedWallet].seed,
        mnemonic: wallets[selectedWallet].mnemonic
      };
      try {
        saveWallet(_wallet, passwordValue);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } catch (e) {
        Sentry.captureException(e);
        setSaveWalletError(
          'Something went wrong while trying to save your wallet, please try again'
        );
      }
    }
  }, [selectedWallet, setActiveStep, wallets]);

  return (
    <PageWithStepper
      steps={steps}
      activeStep={activeStep}
      buttonText="Next"
      handleBack={handleBack}
      handleNext={handleNext}
    >
      <Typography variant="h4" component="h1" style={{ marginTop: '100px' }}>
        Create a password
      </Typography>
      <Typography variant="subtitle1" component="h2" style={{ marginTop: '30px' }}>
        You will use this password to unlock your wallet
      </Typography>
      <TextField
        fullWidth
        id="password"
        key="password"
        name="password"
        label="Password"
        error={!!passwordError}
        type="password"
        style={{ marginTop: '20px' }}
      />
      <TextField
        fullWidth
        id="confirm-password"
        key="confirm-password"
        name="confirm-password"
        label="Confirm Password"
        error={!!passwordError}
        helperText={passwordError}
        type="password"
        style={{ marginTop: '20px' }}
      />
      {saveWalletError ? (
        <Typography variant="body2" style={{ marginTop: '15px', color: ERROR_RED }}>
          {saveWalletError}
        </Typography>
      ) : null}
    </PageWithStepper>
  );
};
