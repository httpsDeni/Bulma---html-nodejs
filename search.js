document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
  
    const posts = [
      { title: 'Título do Post 1', content: 'Conteúdo do post 1...' },
      { title: 'Título do Post 2', content: 'Conteúdo do post 2...' },
      // Adicione mais objetos para outros posts
    ];
  
    function performSearch(query) {
      searchResults.innerHTML = '';
  
      const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(query.toLowerCase()) ||
               post.content.toLowerCase().includes(query.toLowerCase());
      });
  
      if (filteredPosts.length === 0) {
        searchResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
      } else {
        filteredPosts.forEach(post => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('search-result');
          resultItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
          searchResults.appendChild(resultItem);
        });
      }
    }
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      if (query.length > 1) {
        performSearch(query);
      } else {
        searchResults.innerHTML = '';
      }
    });
  });
  