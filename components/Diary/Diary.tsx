import {
  mealSection,
  nutritionTableHead,
  nutritionalData,
} from "@/constants/diary";
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const Diary = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100", marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Your food diary for
          </Typography>
          <Button variant="contained">Sunday, October 6, 2024</Button>
        </Box>

        {mealSection.map((meal) => (
          <Box key={meal} sx={{ mt: 2 }}>
            <Typography variant="h6">{meal}</Typography>
            <Button variant="outlined" size="small">
              Add Food
            </Button>
            <Button variant="outlined" size="small" sx={{ ml: 1 }}>
              Quick Tools
            </Button>
          </Box>
        ))}

        <Table sx={{ mt: 3 }} aria-aria-label="calorie breakdown">
          <TableHead>
            <TableRow>
              {nutritionTableHead.map((head, key) => (
                <TableCell key={key}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {nutritionalData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={row.highlight ? { color: "green" } : {}}>
                  {row.calories}
                </TableCell>
                <TableCell sx={row.highlight ? { color: "green" } : {}}>
                  {row.carbs}
                </TableCell>
                <TableCell sx={row.highlight ? { color: "green" } : {}}>
                  {row.fat}
                </TableCell>
                <TableCell sx={row.highlight ? { color: "green" } : {}}>
                  {row.protein}
                </TableCell>
                <TableCell sx={row.highlight ? { color: "green" } : {}}>
                  {row.sodium}
                </TableCell>
                <TableCell sx={row.highlight ? { color: "green" } : {}}>
                  {row.sugar}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6">Water Consumption</Typography>
          <Typography>Todays water total: 0 ml</Typography>
          <Button variant="text">Change Units</Button>
          <Box display={"flex"} justifyContent={"space-between"} sx={{ mt: 2 }}>
            <Button variant="contained">+8 oz</Button>
            <Button variant="contained">+17 oz</Button>
            <Button variant="contained">+24 oz</Button>
          </Box>
          <TextField
            label="Add custom"
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
          />
        </Paper>

        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6">Todays foods notes</Typography>
          <TextField
            label="Edit note"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Paper>
      </Paper>
    </Container>
  );
};

export default Diary;
