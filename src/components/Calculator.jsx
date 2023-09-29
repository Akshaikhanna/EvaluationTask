import React, { useState } from "react";
import {
  Card,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import "../styles/Calculator.css";

function Calculator() {
  const [dateofbirth, setDateofbirth] = useState("");
  const [age, setAge] = useState(null);

  const handlecalculateAge = () => {
    const birthDate = new Date(dateofbirth);
    const currentDate = new Date();
    const age = currentDate - birthDate;
    const ageYears = age / (365 * 24 * 60 * 60 * 1000);
    setAge(Math.floor(ageYears));
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className="cardWithShadow">
            <div className="Calculator">
              <Typography variant="h5">Age Calculator</Typography>
              <Typography variant="h6">Enter your Date of Birth: </Typography>
              <TextField
                type="date"
                id="dob"
                value={dateofbirth}
                onChange={(e) => setDateofbirth(e.target.value)}
                fullWidth
              />
              <Button
                variant="contained"
                onClick={handlecalculateAge}
                className="button"
                fullWidth
              >
                Calculate Age
              </Button>
              {age !== null && (
                <Typography variant="h5" align="center">
                  Your {age} years old.
                </Typography>
              )}
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Calculator;
