import withGetServerSideProps from '@/pages/withGetServerSideProps';
import type { NextPage } from 'next';
import BlockDetails from '@/screens/block_details';

const BlockDetailsPage: NextPage = () => <BlockDetails />;

export const getServerSideProps = withGetServerSideProps(
  'blocks',
  'transactions',
  'message_labels',
  'message_contents'
);

export default BlockDetailsPage;
