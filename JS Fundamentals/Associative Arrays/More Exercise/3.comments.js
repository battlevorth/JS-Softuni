function sortComments(input) {
    let articles = {};
    let users = {};

    for (const line of input) {
        if (line.includes('user')) {
            let [create,userName] = line.split(' ')
            if (!users[userName]) {
                users[userName] = {};
            }
        }
        if (line.includes('article')) {
            let [art,articleName] = line.split(' ');
            if (!articles[articleName]) {
                articles[articleName] = {};
            }
        }
        if (line.includes('posts on')) {
            let [user,post] = line.split(' posts on ');
            let [postOnArticle,userPost] = post.split(': ')
            if (users[user] && articles[postOnArticle]) {
                articles[postOnArticle][user] = userPost;
            }
        }
    }
    
    for (let articleName in articles) {
        let comments = articles[articleName];
        let commentsCount = 0;
        console.log(articleName);
        for (const comment in comments) {
            commentsCount++
        }
        comments['commentsInArticle'] = commentsCount;
    }
    console.log(articles);
}
sortComments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
