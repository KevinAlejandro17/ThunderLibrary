import { useEffect, useState } from "react";

import { supabase } from "../../backend/client";
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
} from "@mui/material";

import { blueGrey, red } from "@mui/material/colors";
import { toast } from "react-toastify";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    console.log("API response:", data); // Log the response to check if data is being returned
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id, email) => {
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) {
      console.log(error);
    } else {
      toast.success(`Correctamente eliminado ${email}`)
      fetchUsers();
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>User List</h1>
      {users.length === 0 ? (
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
                  <TableCell>EMAIL</TableCell>
                  <TableCell>FULL NAME</TableCell>
                  <TableCell>PHONE</TableCell>
                  <TableCell>ROLE</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      "& .MuiTableCell-root": {
                        color: "white",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                      },
                    }}
                  >
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.full_name}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell component="td">
                      <Button
                        variant="contained"
                        sx={{
                          color: "white",
                          background: red[800],
                          "&:hover": { background: red[900] },
                        }}
                        onClick={() => handleDelete(user.id, user.email)}
                      >
                        delete
                      </Button>
                    </TableCell>
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

export default UserList;
