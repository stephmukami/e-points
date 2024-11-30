import NextAuth from "next-auth/next";
import { authOptions } from "../../../lib/authOptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// import NextAuth from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import bcrypt from "bcrypt";
// import { prisma } from "@/app/lib/prisma";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
    
//     CredentialsProvider({
//         name: "credentials",
//         credentials: {
//             email: { label: "Email", type: "text", placeholder: "jsmith" },
//             password: { label: "Password", type: "password" },
//             username: { label: "Username", type: "text", placeholder: "John Smith" },
//         },
//         // start of authorize func
//         async authorize(credentials: Record<"email" | "password" | "username", string> | undefined) {
//             if (!credentials?.email || !credentials?.password) {
//               throw new Error('Please enter an email and password');
//             }
          
//             const dbUser = await prisma.user.findUnique({
//               where: {
//                 email: credentials.email,
//               },
//             });
          
//             if (!dbUser || !dbUser?.hashed_password) {
//               return null;
//             }
          
//             const passwordMatch = await bcrypt.compare(credentials.password, dbUser.hashed_password);
          
//             if (!passwordMatch) {
//               return null;
//             }
          
//             const user = {
//                 id: dbUser.user_id + '',
//                 email: dbUser.email,
//                 name: dbUser.first_name,
//             };
            
//             return user;
            
//           },
//         //end of authorize func
//     }),  
// ],
// secret: process.env.SECRET || "iprevent-secret",
// session: {
//     strategy: "jwt" as const,
// },
// debug: process.env.NODE_ENV === "development",
// });