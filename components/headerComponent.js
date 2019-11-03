const tableHeaders = [
  "Order ID",
  "Product Name",
  "Product Code",
  "Product Type",
  "Status",
  "Action"
];

const headerComponent = () => {
  let template = "";
  for (let i = 0; i < tableHeaders.length; i++)
    template += `<th>${tableHeaders[i]}</th>`;
  return template;
};

module.exports = headerComponent;
