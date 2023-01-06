import { atom } from 'recoil';

export interface AtomState {
  openLoginDialog: boolean;
  walletSelection: string;
  openInstallKeplrWalletDialog: boolean;
  openKeplrPairingDialog: boolean;
  openSelectNetworkDialog: boolean;
  openAuthorizeConnectionDialog: boolean;
  openLoginSuccessDialog: boolean;
  openConnectWalletConnectDialog: boolean;
  tabValue: number;
  showWalletDetails: boolean;
}

const initialState: AtomState = {
  openLoginDialog: false,
  walletSelection: '',
  openInstallKeplrWalletDialog: false,
  openKeplrPairingDialog: false,
  openSelectNetworkDialog: false,
  openAuthorizeConnectionDialog: false,
  openLoginSuccessDialog: false,
  openConnectWalletConnectDialog: false,
  tabValue: 1,
  showWalletDetails: false,
};

export const atomState = atom<AtomState>({
  key: 'wallet',
  default: initialState,
});