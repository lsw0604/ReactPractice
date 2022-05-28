import client from "./client";

// Login

export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// Register

export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });