import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const loginNow = () => {
    login(username, password)
  }
  return (
    <div>
      <Box sx={{
        marginTop: "5rem"
      }}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: "100vh" }}
          alignItems="center">
          <Box
            display="flex"
            flexDirection="column">
            <h3>Login page </h3>
            <TextField sx={{ marginBottom: "10px" }}
              type='text'
              id="username"
              placeholder='Enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField sx={{ marginBottom: "10px" }}
              type='password'
              id="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant='contained' onClick={loginNow}>Login</Button>
          </Box>
        </Box>
      </Box>

    </div>
  )
}

export default Login