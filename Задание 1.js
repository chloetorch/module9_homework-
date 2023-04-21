// const parser = new DOMParser();
// const xmlString = `
// <list>
//     <student>
//       <name lang="en">
//          <first>Ivan</first>
//          <second>Ivanov</second>
//       </name>
//       <age>35</age>
//       <prof>teacher</prof>
//    </student>
//    <student>
//       <name lang="ru">
//          <first>Петр</first>
//          <second>Петров</second>
//       </name>
//       <age>58</age>
//       <prof>driver</prof>
//    </student>
//   </list>
//    `;
// // console.log('xmlString', xmlString)

// const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

// const listNode = xmlDOM.querySelector('list');
// const studentNode = listNode.querySelector('student');
// const nameNode = studentNode.querySelector('name');
// const firstNode = nameNode.querySelector('first');
// const secondNode = nameNode.querySelector('second');
// const ageNode = studentNode.querySelector('age');
// const profNode = studentNode.querySelector('prof');

// const langAttr = nameNode.getAttribute('lang');

// const result = {
//    // category: categoryAttr,
//    lang: langAttr,
//    name: firstNode.textContent + ' ' + secondNode.textContent,
//    age: Number(ageNode.textContent),
//    prof: profNode.textContent,
// }

// console.log('result', result)

////////////////////////////////////////////////////////

const parser = new DOMParser();
const xmlString = `
<list>
    <student>
      <name lang="en">
         <first>Ivan</first>
         <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
   </student>
   <student>
      <name lang="ru">
         <first>Петр</first>
         <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
   </student>
  </list> 
   `;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const list = xmlDOM.querySelectorAll('student');

for (const student of list) {
   const name = student.querySelector('name').textContent;
   // const langAttr = name.getAttribute('lang');   не добавляется атрибут при таком методе, как его нужно записать?
   const age = student.querySelector('age').textContent; // вариант Number(age.textContent) из обучения не сработал в for in, как зесь должны обозначаться цифры?
   const prof = student.querySelector('prof').textContent;
   console.log('name: ', name, 'age: ', age, 'prof: ', prof);
}

// при данном подходе в консоль выводится указанная информация, но не в одну строку как указано в задании, это значит, что задание сделано неверно?