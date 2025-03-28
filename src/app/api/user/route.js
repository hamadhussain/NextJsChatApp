import { StreamChat } from 'stream-chat';
import prisma from '@/lib/prisma';  // Prisma instance
import { withClerkMiddleware } from '@clerk/nextjs/api';

const serverClient = StreamChat.getInstance(
  'bxguj3z3dqdj',  // Stream API key
  'mtjvzgetjnrjp8pvt4mh5deygam5q3rzn2zhf6j3wkxhrwpxgq3p4wmtwawwx2md'  // Stream secret key
);

const generateToken = async (req, res) => {
  const { user } = req; // Get Clerk user
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Generate the token using Stream Chat
  const token = serverClient.createToken(user.id);

  // Save token to Prisma database (if not already saved)
  await prisma.user.upsert({
    where: { clerkId: user.id },
    update: { token },
    create: { clerkId: user.id, token },
  });

  return res.status(200).json({ token });
};

export default withClerkMiddleware(generateToken);
