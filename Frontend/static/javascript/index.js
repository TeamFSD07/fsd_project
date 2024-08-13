document.addEventListener("DOMContentLoaded", function() {
  const navToggleBtn = document.querySelector("[data-bs-toggle='collapse']");
  const navbarNav = document.querySelector("#navbarNav");
  
  navToggleBtn.addEventListener("click", function () {
      navbarNav.classList.toggle("show"); // Use Bootstrap's class for showing/hiding
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const navToggleBtn = document.querySelector("[data-bs-toggle='collapse']");
  const navbarNav = document.querySelector("#navbarNav");

  navToggleBtn.addEventListener("click", function () {
      navbarNav.classList.toggle("show");
  });

  showSection('home'); // Show the home section by default
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
      section.style.display = section.id === sectionId ? 'block' : 'none';
  });
}

function performSearch() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const sections = document.querySelectorAll('.content-section');
  let found = false;

  sections.forEach(section => {
      if (section.style.display === 'block') {
          const content = section.textContent.toLowerCase();
          const index = content.indexOf(query);

          if (index !== -1) {
              moveToText(section, query);
              found = true;
          }
      }
  });

  if (!found) {
      alert('No results found');
  }
}

function moveToText(element, query) {
  const textNodes = getTextNodes(element);
  let charIndex = 0;
  let foundNode = null;
  let foundIndex = -1;

  for (let node of textNodes) {
      const nodeText = node.textContent.toLowerCase();
      foundIndex = nodeText.indexOf(query);

      if (foundIndex !== -1) {
          foundNode = node;
          break;
      }
      charIndex += nodeText.length;
  }

  if (foundNode) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(foundNode, foundIndex);
      range.setEnd(foundNode, foundIndex + query.length);
      selection.removeAllRanges();
      selection.addRange(range);
      foundNode.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function getTextNodes(node) {
  const textNodes = [];

  function traverse(node) {
      if (node.nodeType === 3) {
          textNodes.push(node);
      } else {
          node.childNodes.forEach(child => traverse(child));
      }
  }

  traverse(node);
  return textNodes;
}

