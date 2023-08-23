document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.querySelector('.posts');
    const paginationPrevious = document.querySelector('.pagination-previous');
    const paginationNext = document.querySelector('.pagination-next');
    const paginationList = document.querySelector('.pagination-list');
  
    const postsPerPage = 5; // Quantidade de posts por página
    const posts = [
      { title: 'Título do Post 1', content: 'Conteúdo do post 1...' },
      { title: 'Título do Post 2', content: 'Conteúdo do post 2...' },
      // Adicione mais objetos para outros posts
    ];
  
    let currentPage = 1;
  
    function displayPosts(pageNumber) {
      postsContainer.innerHTML = '';
  
      const startIndex = (pageNumber - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const currentPosts = posts.slice(startIndex, endIndex);
  
      currentPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(postDiv);
      });
    }
  
    function updatePaginationButtons() {
      paginationList.innerHTML = '';
  
      const totalPages = Math.ceil(posts.length / postsPerPage);
  
      for (let page = 1; page <= totalPages; page++) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = page;
        link.href = '#';
        link.addEventListener('click', () => {
          currentPage = page;
          displayPosts(currentPage);
          updatePaginationButtons();
        });
        listItem.appendChild(link);
        paginationList.appendChild(listItem);
  
        if (page === currentPage) {
          link.classList.add('is-current');
        }
      }
    }
  
    paginationPrevious.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayPosts(currentPage);
        updatePaginationButtons();
      }
    });
  
    paginationNext.addEventListener('click', () => {
      const totalPages = Math.ceil(posts.length / postsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        displayPosts(currentPage);
        updatePaginationButtons();
      }
    });
  
    displayPosts(currentPage);
    updatePaginationButtons();
  });
  