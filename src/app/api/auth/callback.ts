// import { NextApiRequest, NextApiResponse } from 'next';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import axios from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await axios.get('http://localhost:8000/auth/google/callback', {
//       headers: { Cookie: req.headers.cookie || '' },
//     });
//     if (response.status === 200) {
//       res.setHeader('Set-Cookie', response.headers['set-cookie'] || []);
//       res.redirect('/dashboard');
//     } else {
//       res.status(response.status).json({ error: 'Authentication Failed' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
