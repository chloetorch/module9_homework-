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
   // const langAttr = name.getAttribute('lang');   (1) не добавляется атрибут при таком методе, как его нужно записать?
   const age = student.querySelector('age').textContent; // (2) вариант Number(age.textContent) из обучения не сработал в for in, как зесь должны обозначаться цифры?
   const prof = student.querySelector('prof').textContent;
   console.log('name: ', name, 'age: ', age, 'prof: ', prof);
}

// (3) при данном подходе в консоль выводится указанная информация, но не в одну строку как указано в задании, это значит, что задание сделано неверно?
