// import { getSession } from 'next-auth/react';
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
    const { title, content } = req.body;

    const session = await getServerSession(req, res, authOptions);
    console.log(`session: ${session}`);
    console.log("**********************");

    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: { connect: { email: session?.user?.email } },
        },
    });
    res.json(result);
}