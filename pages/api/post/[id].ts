import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req, res) {
    const postId = req.query.id;
    if (req.method !== 'DELETE') {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }

    const post = await prisma.post.delete({
        where: { id: postId },
    });
    res.json(post);
}
