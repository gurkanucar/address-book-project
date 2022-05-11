export const csvExport = (arr) => {
  let csv = convertToCsv(arr);

  let a = document.createElement("a");
  a.href = "data:attachment/csv," + encodeURIComponent(csv);
  a.target = "_blank";
  a.download = "my_address_book.csv";

  document.body.appendChild(a);
  a.click();
};

const convertToCsv = (arr) => {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
};
