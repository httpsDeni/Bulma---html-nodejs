document.addEventListener('DOMContentLoaded', () => {
    const categoryTags = document.querySelectorAll('.tags a.tag');
    const categoryTagResults = document.getElementById('category-tag-results');
  
    const posts = [
      { title: 'Título do Post 1', categories: ['Tecnologia'], tags: ['Tag 1', 'Tag 2'] },
      { title: 'Título do Post 2', categories: ['Viagens'], tags: ['Tag 2'] },
      // Adicione mais objetos para outros posts
    ];
  
    function updateCategoryTagResults(selectedCategoryTag) {
      categoryTagResults.innerHTML = '';
  
      const filteredPosts = posts.filter(post => {
        return (
          selectedCategoryTag === 'Todas' ||
          post.categories.includes(selectedCategoryTag) ||
          post.tags.includes(selectedCategoryTag)
        );
      });
  
      if (filteredPosts.length === 0) {
        categoryTagResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
      } else {
        filteredPosts.forEach(post => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('search-result');
          resultItem.innerHTML = `<h3>${post.title}</h3>`;
          categoryTagResults.appendChild(resultItem);
        });
      }
    }
  
    categoryTags.forEach(tag => {
      tag.addEventListener('click', event => {
        event.preventDefault();
        const selectedCategoryTag = tag.textContent;
        updateCategoryTagResults(selectedCategoryTag);
      });
    });
  });
  