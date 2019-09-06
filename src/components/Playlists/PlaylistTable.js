import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function PlaylistTable(props) {
  const {playlists} = props;
  return (
    <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {playlists && playlists.map(playlist => (
          <TableRow key={playlist.name}>
            <TableCell component="th" scope="playlist">
              {playlist.name}
            </TableCell>
            <TableCell align="right"><a href={`${playlist.external_urls.spotify}`}>View</a></TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
  );

  }
export default PlaylistTable;
