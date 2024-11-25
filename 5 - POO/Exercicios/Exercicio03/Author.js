const Post = require('./Post')

class Author {
    constructor(name) {
        this.name = name
        this.post = []
    }

    addPost(title, text) {
        const posts = new Post(title, text, this)
        this.post.push(posts)
        return posts
    }
}

module.exports = Author