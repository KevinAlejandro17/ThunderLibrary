import React, { useEffect } from "react";
import { useAuth } from "../context/Context";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { blueGrey, red } from "@mui/material/colors";
import { supabase } from "./../../backend/client";

const Rentals = () => {
  const { rentals } = useAuth();

  const getUserName = async (userID) => {
    const { data } = await supabase
      .from("users")
      .select("full_name")
      .eq("id", userID);

    console.log(data);
    return data[0].full_name;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" mb={8} sx={{ color: "white" }}>
        Mis libros alquilados
      </Typography>
      {rentals.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <Box>
          <TableContainer component={Paper} sx={{ background: blueGrey[800] }}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      color: "white",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  <TableCell>ID</TableCell>
                  <TableCell>Fecha de alquiler</TableCell>
                  <TableCell>Fecha devolución</TableCell>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Libro</TableCell>
                  <TableCell>Estado devolución</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rentals.map((rental) => (
                  <TableRow
                    key={rental.id_rental}
                    sx={{
                      "& .MuiTableCell-root": {
                        color: "white",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                      },
                    }}
                  >
                    <TableCell>{rental.id_rental}</TableCell>
                    <TableCell>{rental.rental_date}</TableCell>
                    <TableCell>{rental.return_date}</TableCell>
                    <TableCell>{rental.id_user}</TableCell>
                    <TableCell>{rental.isbn}</TableCell>
                    <TableCell>{JSON.stringify(rental.returned)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default Rentals;
