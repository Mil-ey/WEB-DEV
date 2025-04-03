//INDEX.HTML//

function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
       blogContainer.innerHTML = '';
       const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
       posts.forEach(post => {
           const postElement = document.createElement('div');
           postElement.classList.add('blog-post');
           postElement.innerHTML = `
               <h3>${post.title}</h3>
               <p>${post.body}</p>
               <button onclick="deletePost(${post.id})">Delete</button>
           `;
           blogContainer.appendChild(postElement);
       });
       // you hvaent added this to the git//
   
   }
   
   //NEW-POST.HTML//
   Document.getElementById('postForm').addEventListener('submit', function(event) {
       event.preventDefault();
   
       const title = document.getElementById('title').value;
       const content = document.getElementById('content').value;
        if (title === '' || content === '') {
           alert('Please fill in all fields');
           return;
       }
       const date = new Date().toLocaleDateString();
       const newPost = { title, content, date };
       
       let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
       posts.push(newPost);
   
       localStorage.setItem('blogPosts', JSON.stringify(posts));
       window.location.href = 'index.html';
   });
   
   // you havent added this to the git//
   
   
   //POST.html//
   function loadPost() {
       const postId = new URLSearchParams(window.location.search).get('id');
       const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
       const post = posts.find(p => p.id == postId);
       const postElement = document.getElementById('post');
       postElement.classList.add('blog-post');
       postElement.innerHTML = `
           <h3>${post.title}</h3>
           <p>${post.content}</p>
           <p>${post.date}</p>
       `;
       const editForm = document.getElementById('edit-form');
       editForm.addEventListener('submit', function(event) {
           event.preventDefault();
           const updatedTitle = document.getElementById('editTitle').value;
           const updatedContent = document.getElementById('editContent').value;
           const updatedDate = new Date().toLocaleDateString();
           
           post.title = updatedTitle;
           post.content = updatedContent;
           post.date = updatedDate;
   
           localStorage.setItem('blogPosts', JSON.stringify(posts));
           window.location.href = 'index.html';
       });  
   
       
       if (post) {
           document.getElementById('postTitle').innerText = post.title;
           document.getElementById('postContent').innerText = post.content;
           document.getElementById('postDate').innerText = post.date;
       } else {
           alert('Post not found');
       }
   const deleteButton = document.getElementById('deleteButton');
       deleteButton.addEventListener('click', function() {
           const updatedPosts = posts.filter(p => p.id != postId);
           localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
           window.location.href = 'index.html';
       });
       deleteButton.addEventListener('click', function() {
           const updatedPosts = posts.filter(p => p.id != postId);
           localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
           window.location.href = 'index.html';
       });
       
   }
   