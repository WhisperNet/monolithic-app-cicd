import express from 'express';
import { client } from '@repo/db/client';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json({
    message: 'Signup successful',
    id: user.id,
  });
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
