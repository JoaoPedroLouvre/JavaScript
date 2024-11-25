const Comment = require('./Comment')

class Post {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.comments = []
        this.createdAt = new Date()
    }

    addNewComment(username, content) {
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post