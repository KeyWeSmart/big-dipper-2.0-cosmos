import withGetStaticProps from '@/pages/withGetStaticProps';
import type { NextPage } from 'next';
import Transactions from '@/screens/transactions';

const TransactionsPage: NextPage = () => <Transactions />;

export const getStaticProps = withGetStaticProps('transactions', 'blocks');

export default TransactionsPage;
