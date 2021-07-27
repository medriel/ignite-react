import { NextApiRequest, NextApiResponse } from 'next';

/* Formas de autenticação */
// JWT (Storage)
// Next Auth (Social)
// Cognito, Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Adriel' },
    { id: 2, name: 'Marcela' },
    { id: 3, name: 'Yasmin' },
    { id: 4, name: 'Izaulina' },
    { id: 5, name: 'André' },
  ]
}