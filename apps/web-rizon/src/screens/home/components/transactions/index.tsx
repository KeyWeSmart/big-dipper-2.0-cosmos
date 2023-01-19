import Box from '@/components/box';
import NoData from '@/components/no_data';
import Desktop from '@/screens/home/components/transactions/components/desktop';
import Mobile from '@/screens/home/components/transactions/components/mobile';
import { useTransactions } from '@/screens/home/components/transactions/hooks';
import useStyles from '@/screens/home/components/transactions/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { TRANSACTIONS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';

const Transactions: FC<ComponentDefault> = ({ className }) => {
  const { t } = useTranslation('home');
  const { state } = useTransactions();
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;

  return (
    <Box className={cx(classes.root, className)}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestTransactions')}</Typography>
        <Link shallow href={TRANSACTIONS} className="button" aria-label="see more txs">
          {t('seeMore')}
        </Link>
      </div>
      {!state.items.length ? (
        <NoData />
      ) : (
        <>
          <Desktop className={display.hiddenUntilLg} items={state.items} />
          <Mobile className={display.hiddenWhenLg} items={state.items} />
          <Divider className={display.hiddenWhenLg} />
          <Link
            shallow
            href={TRANSACTIONS}
            className={cx(classes.seeMoreFooter, display.hiddenWhenLg, 'button')}
            aria-label="see more blocks"
          >
            {t('seeMore')}
          </Link>
        </>
      )}
    </Box>
  );
};

export default Transactions;
