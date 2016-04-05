'use strict';

const signUp = (success, failure, data) => {
    Math.random() > 0.5 ? success('in signUp') : failure(data);
  };





//   $.ajax({
//     method: 'POST',
//     url: 'http://tic-tac-toe.wdibos.com/sign-up',
//     data,
//   }).done(success)
//   .fail(failure);
// };





module.exports = {
  signUp,
};
