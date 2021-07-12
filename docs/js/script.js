// Modals

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e){
  if(e.target === this){
    closeModal();
  }
});

document.addEventListener('keyup', function(e){
  if(e.keyCode === 27){
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal){
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelectorAll('.popup').forEach((popup) => {
  popup.addEventListener('click', function(e){
    e.preventDefault();
    const id = '#' + popup.getAttribute('href');
  
    openModal(id);
  });
});

// Chat

function sendMessage(){
  const text = document.querySelector('.msg-text').value;
  const newMsg = document.createElement('p');
  newMsg.classList.add('from-me');
  newMsg.innerHTML = text;
  
  if(text){
    document.querySelector('.messages-wrapper').appendChild(newMsg);
    document.querySelector('.msg-text').value = '';
  }
}

document.querySelector('button[value="Send"]').addEventListener('click', function(e){
  e.preventDefault;
  sendMessage();
});

// Chart

var ctx = document.getElementById('myChart').getContext('2d');

/* eslint-disable */
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
      label: "Signups",
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: "FTD",
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: "Earned",
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      hidden: true,
    }]
  },
});

// Links

function activateSection(link){
  const sections = document.querySelectorAll('.section-wrapper');

  for(let section of sections){
    section.classList.remove('active');
    if(section.getAttribute('id') === link){
      section.classList.add('active');
    }
  }
}

document.querySelectorAll('.nav__list li').forEach((link) => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const linkId = link.querySelector('a').getAttribute('href').replace('#', '');

    activateSection(linkId);
  });
});

