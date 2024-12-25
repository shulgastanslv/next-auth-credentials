import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware';

const middleware = async (request: NextRequestWithAuth) => {
  console.info('Middleware request:', request);
};

export const config = {
  matcher: ['/'],
};

export default withAuth(middleware);