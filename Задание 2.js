const data =
{
   "list": [
      {
         "name": "Petr",
         "age": "20",
         "prof": "mechanic"
      },
      {
         "name": "Vova",
         "age": "60",
         "prof": "pilot"
      }
   ]
};
const dataJson = JSON.stringify(data);

console.log(dataJson);