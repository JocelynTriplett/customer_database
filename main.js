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
      <div class="name">
      <h2>${people[p].name.first} ${people[p].name.last}</h2>
      </div>
      <h3>${people[p].email}</h3>
      <div class="addressSpacer"></div>
      <p>${people[p].location.street}</p>
      <p>${people[p].location.city}, ${people[p].location.state} ${people[p].location.postcode}</p>
      <p class="phone">${people[p].phone}</p>
      <div class="addressSpacer"></div>
      <p class="SSN">${people[p].id.value}</p>
      </div>
      <div class="endspacer"></div>
      </div>

    `
    gallery.innerHTML += person;
  }
}

personInfo(people);
