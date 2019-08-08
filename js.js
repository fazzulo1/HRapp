$(() => {
  console.log('hi');
  const getFilter = data => {
    console.log('', data);

    // for (let i = 0; i < data.networks.length; i++) {
    //   const $list1 = $('<div>').text(
    //   );
    //   $list1.addClass('list');
    //   $('#providers').append($list1);
    // }
  };
  const endpoint = `http://localhost:3000/employees`;
  $.ajax({
    url: endpoint,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(getFilter);

  // $('.filter').on('click', event => {
  //   console.log('I am here');
  //   event.preventDefault();
  // });
});

// const array1 = ['kenny', 'leo', 'don', 'deva'];

// const instructor = 'leo';

// array1.filter(objKey => {
//   if (objKey.includes(instructor)) {
//     console.log('filtered', objKey);
//   }
// });

// array2 = [
//   { name: 'kenny', likes: 'thing1' },
//   { name: 'harold', likes: 'thing2' },
//   { name: 'leo', likes: 'thing2' }
// ];
// answer = 'thing2';

// result = array2.filter(eachObjKey => {
//   if (eachObjKey.likes === answer) {
//     console.log(eachObjKey.name);
//   }
// });
