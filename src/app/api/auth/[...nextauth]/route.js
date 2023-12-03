import NextAuth from 'next-auth';

export const AuthOptions = {
	providers: [],
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
