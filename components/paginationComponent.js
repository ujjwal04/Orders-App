export const paginationComponent = () => {
  let template = "";
  for (let i = 0; i < 10; i++) {
    template += `
              <li><a href="#" class="numbers">${i + 1}</a></li>
          `;
  }
  return template;
};
