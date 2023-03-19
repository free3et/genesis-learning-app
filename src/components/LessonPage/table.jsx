import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  Stack,
  Rating,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";

export const TableDurationReleaseDateCategory = ({
  category,
  duration,
  release_date,
  rating,
}) => {
  function createData(vote, duration, release_date, rating) {
    return { vote, duration, release_date, rating };
  }

  const rows = [createData(category, duration, release_date)];
  return (
    <TableContainer>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <Box
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "inline-block",
                    mb: 1.2,
                    p: 0.5,
                    borderRadius: 1,
                    border: "2px solid #9c27b0",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {category}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography
                  gutterBottom
                  variant="body2"
                  component="h2"
                  display="flex"
                >
                  <AccessTimeIcon fontSize="small" sx={{ mr: 0.6 }} />
                  {duration}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  gutterBottom
                  variant="body2"
                  component="h2"
                  display="flex"
                >
                  <DateRangeIcon fontSize="small" sx={{ mr: 0.6 }} />
                  {release_date?.slice(0, 10)}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Stack spacing={1} sx={{ flexDirection: "row" }}>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    value={rating || +""}
                    precision={0.1}
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    color="secondary"
                    pl={2}
                    sx={{ mt: 0 }}
                  >
                    [{rating}]
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
