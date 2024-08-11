const api = "http://172.24.48.1:5050/api/";
export async function getOrders() {
  try {
    let res = await fetch(`${api}order/all`, {}).then((d) => d.json());

    return res;
  } catch (error) {
    console.error(error);
    throw new Error('error');
  }
}
