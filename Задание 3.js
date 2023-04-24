function useRequest(url, callback) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);

   xhr.onload = function () {
      if (xhr.status != 200) {
         console.log('Статус ответа: ', xhr.status);
      } else {
         const result = JSON.parse(xhr.response);
         if (callback) {
            callback(result);
         }
      }
   };

   xhr.onerror = function () {
      console.log('Ошибка! Статус ответа: ', xhr.status);
   };

   xhr.send();
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
const value = document.querySelector('input').value;

function displayResult(apiData) {
   let pic = '';
   if (value >= 1 && value <= 10) {
      apiData.forEach(item => {
         const resultBlock = `
       <div class="result">
         <img
           src="${item.download_url}"
           class="card-image"
         />
         <p>${item.author}</p>
       </div>
     `;
         pic = pic + resultBlock;
      });

      resultNode.innerHTML = pic;
   } else {
      pic = 'число вне диапазона от 1 до 10';
      return;
   };
}

btnNode.addEventListener('click', () => {
   useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
})
