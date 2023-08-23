document.addEventListener('DOMContentLoaded', () => {
  const commentsContainer = document.querySelector('.comments');
  const submitButton = document.getElementById('submit-comment');

  // Carregar e exibir comentários
  function loadComments() {
    commentsContainer.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.innerHTML = `<p><strong>${comment.name}:</strong> ${comment.text}</p>`;
      commentsContainer.appendChild(commentDiv);
    });
  }

  // Enviar novo comentário
  submitButton.addEventListener('click', () => {
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');

    const newComment = {
      name: nameInput.value,
      text: textInput.value
    };

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));

    loadComments();

    // Limpar campos após enviar
    nameInput.value = '';
    textInput.value = '';
  });

  // Carregar comentários ao carregar a página
  loadComments();
});
