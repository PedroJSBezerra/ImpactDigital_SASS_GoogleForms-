let form = document.querySelector('.section-column-form')

form.addEventListener('submit', (e) => {

  e.preventDefault()
  
  let action = "https://docs.google.com/forms/d/e/1FAIpQLSczbPhzHyXaMbFH6o_e3OPgwAMIa_7t-neNNSoNeDYU4zRSDw/formResponse"
  let data = new URLSearchParams()
  let formData = new FormData(form)

  for(const pair of formData.entries()){ //faça um pair para cada entrada do form
    data.set(pair[0],pair[1])
  }

  fetch(action, { //action = url do request
    method: "post", //metodo
    body: data, //dados do formulário
    mode: 'no-cors' //desabilita cors
  })
  .then(res => {
    form.reset() //reseta os campos do formula´rio
  })
  .catch(err => console.log(err))

})