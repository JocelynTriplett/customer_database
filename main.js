let people = customers.results;

function personInfo(){
  let gallery = document.getElementById('gallery')
  for (var p = 0; p < people.length; p++) {
    let person= `
      <div class="person">
      <div class="photo">
      <img src=${people[p].picture.large}>
      </div>
      <div class="information">
      <h2>${people[p].name.first} ${people[p].name.last}</h2>
      <h3>${people[p].email}</h3>
      <p>${people[p].location.street}</p>
      <p>${people[p].location.city}, ${people[p].location.state} ${people[p].location.postcode}</p>
      <p class="phone">${people[p].phone}</p>
      <p class="SSN">${people[p].id.value}</p>
      </div>
      </div>
    `
    gallery.innerHTML += person;
  }
}

personInfo(people);
