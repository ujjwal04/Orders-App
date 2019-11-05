export const modalComponent = () => {
  let template = `
    <div id="modal" class="simpleModal">
        <header>Edit<i class="fa fa-times cross" aria-hidden="true"></i></header>
        <form id="edit">
            <label for="product_Name">Name:</label><br>
            <input type="text" id="product_Name" class="edit-input"><br><br><br>
            <label for="product_Type">Product Type:</label><br>
            <input type="text" id="product_Type" class="edit-input"><br><br><br>
            <label for="product_Status">Status:</label><br>
            <input type="text" id="product_Status" class="edit-input"><br><br><br>
            <button class="btn edit-btn">Save</button><button class="btn cancel-btn">Cancel</button>
        </form>
    </div>`;
  return template;
};
