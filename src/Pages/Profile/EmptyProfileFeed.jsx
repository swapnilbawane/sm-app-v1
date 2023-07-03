export function EmptyProfileFeed() {
    const imageUrl =
        'https://res.cloudinary.com/djhnar3ju/image/upload/v1687843277/igor-son-FV_PxCqgtwc-unsplash_quc5xi.jpg'
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> No posts yet. Create new post to see it here. </h1>
            <img
                src={imageUrl}
                alt="plant"
                style={{ display: 'block', margin: 'auto' }}
            />
        </div>
    )
}
