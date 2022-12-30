import { useConnectWalletList } from '@/components/nav/components/connect_wallet/hooks';
import { useStyles } from '@/components/nav/components/connect_wallet/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Loading from '@/components/loading';

const SelectNetworkDialog: React.FC<{
  networkName: string;
}> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const { handleConnectWallet, handleCloseSelectNetworkDialog, openSelectNetworkDialog } =
    useConnectWalletList();

  return (
    <div>
      <Dialog
        maxWidth="md"
        onClose={handleCloseSelectNetworkDialog}
        open={openSelectNetworkDialog}
        className={classes.dialog}
      >
        <DialogTitle disableTypography>
          <div className={classes.warningMsg}>
            <div>
              <Typography variant="h2" align="center" className={classes.msgHeader}>
                {t('nowSelectNetwork', {
                  name: props.networkName,
                })}
              </Typography>
            </div>
            <IconButton
              aria-label="close"
              onClick={handleCloseSelectNetworkDialog}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.msgContent}>
            <Typography variant="h4" align="center">
              {t('pleasePairWallet', {
                wallet: 'Keplr Wallet',
              })}
            </Typography>
          </div>
          <Loading className={classes.loading} />
        </DialogContent>
        <DialogActions>
          <div className={classes.actions}>
            <Button onClick={handleConnectWallet} color="primary" className={classes.actionsButton}>
              <Typography variant="h3">{t('Continue')}</Typography>
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectNetworkDialog;