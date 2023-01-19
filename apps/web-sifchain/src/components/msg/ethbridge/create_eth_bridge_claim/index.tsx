import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateEthBridgeClaim from '@/models/msg/ethbridge/msg_create_eth_bridge_claim';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateEthBridgeClaim: FC<{ message: MsgCreateEthBridgeClaim }> = (props) => {
  const { message } = props;

  const cosmosreceiver = useProfileRecoil(message.ethBridgeClaim.cosmosreceiver);
  const cosmosreceiverMoniker = cosmosreceiver
    ? cosmosreceiver?.name
    : message.ethBridgeClaim.cosmosreceiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateEthBridgeClaim"
        components={[
          <Name address={message.ethBridgeClaim.cosmosreceiver} name={cosmosreceiverMoniker} />,
          <b />,
        ]}
        values={{
          claimType: message.ethBridgeClaim.claimType,
        }}
      />
    </Typography>
  );
};

export default CreateEthBridgeClaim;
