import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  try {
    // throw 'error';
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error';
      loadCart(() => {
        // reject('error3');
        resolve("value33");
      });
    });
  } catch (error) {
    console.log("error occured.....");
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve("value3");
        console.log(value);
      });
    });
  })
  .then((val) => {
    renderOrderSummary();
    renderPaymentSummary();
    console.log(val);
  });
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
