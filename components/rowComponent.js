import rowDetails from "./rowDetailsComponent";

export const rowComponent = () => {
  let template = "";
  for (let i = 0; i < rowDetails.length; i++) {
    template += `
          <tr>
              <td>${rowDetails[i].orderId}</td>
              <td>${rowDetails[i].productName}</td>
              <td>${rowDetails[i].productCode}</td>
              <td>${rowDetails[i].productType}</td>
              <td>${rowDetails[i].status}</td>
              <td><a href="#" class="edit-link">${rowDetails[i].action}</a></td>
          </tr>
          `;
  }
  return template;
};
