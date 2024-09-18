// Get all heading elements const headings = document.querySelectorAll('h1, h2, h3, h4, h5');

// Add event listener to each heading element
headings.forEach(heading => {
    heading.addEventListener('click', () => {
      // Change the background color of the page to red
      document.body.style.background = 'red';
    });
  });