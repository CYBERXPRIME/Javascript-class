/* fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

 */
const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
