// Function to fetch blog posts from the JSON file
function getBlogPosts() {
    return fetch("blog-post.json")
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error fetching blog posts:", error);
            return [];
        });
}

// Function to display blog posts in the HTML
function showBlogPosts(blogPosts) {
    let blogContainer = document.getElementById("blogContainer");
    let blogHTML = "";

    blogPosts.forEach(post => {
        blogHTML += `
            <div class="blogPost">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="${post.url}" target="_blank">Read More</a>
            </div>
        `;
    });

    blogContainer.innerHTML = blogHTML;
}

// Fetch and display blog posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    getBlogPosts().then(posts => {
        showBlogPosts(posts);
    });
});
