class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.dateTime = new Date()
    }
}

module.exports = Comment