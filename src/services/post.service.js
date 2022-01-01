export class PostService {

    static async getPosts(userId) {
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        posts = await posts.json();
        console.log(userId);
        console.log(posts);
        if (posts) {
            posts = posts.filter(post => {
                return post.userId === parseInt(userId);
            });
        }
        console.log(posts)
        return posts;
    }

}