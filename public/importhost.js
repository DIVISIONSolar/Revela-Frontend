// Specify the URL of the PHP file
const phpFileUrl = './gethost.php';

// Fetch the content of the PHP file
fetch(phpFileUrl)
  .then(response => response.text())
  .then(content => {
    // Update the content of the .node-id element
    const nodeIdElement = document.querySelector('.node-id');
    nodeIdElement.textContent = content;
  })
  .catch(error => {
    console.error('Error fetching PHP file:', error);
  });
