import AvatarName from '@/components/avatar_name';
import useStyles from '@/screens/contracts/styles';
import { AccessControl, permissionList } from '@/screens/contracts/types';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { FC, Fragment } from 'react';

const AccessControl: FC<{ accessControls: AccessControl[] }> = ({ accessControls }) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography className={classes.label} variant="h4">
        Access Control
      </Typography>
      {!!accessControls?.length && (
        <Table style={{ maxWidth: 560 }}>
          <TableHead>
            <TableRow>
              {permissionList.map(([permission, description], i) =>
                i === 0 ? null : (
                  <TableCell key={permission} title={description} aria-label={description}>
                    <span>{permission}</span>
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {accessControls?.map(({ address, permissions }) => (
              <Fragment key={address}>
                <TableRow>
                  <TableCell colSpan={permissionList.length}>
                    <AvatarName address={address} name={address} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  {permissionList.map(([permission, description], i) =>
                    i === 0 ? null : (
                      <TableCell key={permission} title={description} aria-label={description}>
                        <Checkbox
                          disabled
                          checked={permissions.some((p) => p === i)}
                          key={permission}
                        />
                      </TableCell>
                    )
                  )}
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default AccessControl;