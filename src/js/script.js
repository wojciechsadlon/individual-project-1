// Settings

const select = {
  overlay: document.getElementById('overlay'),
  closeModal: document.querySelectorAll('#overlay .js--close-modal'),
  allModals: document.querySelectorAll('#overlay > *'),
  allPopups: document.querySelectorAll('.popup'),
  chatInput: document.querySelector('.msg-text'),
  chatSendBtn: document.querySelector('button[value="Send"]'),
  msgWrapper: document.querySelector('.messages-wrapper'),
  sections: document.querySelectorAll('.section-wrapper'),
  navLinks: document.querySelectorAll('.nav__list li'),
  navButton: document.querySelector('.nav__header-button'),
  navPanel: document.querySelector('.nav'),
};

const classNames = {
  show: 'show',
  fromMe: 'from-me',
  active: 'active',
};

// Modals

function closeModal() {
  select.overlay.classList.remove(classNames.show);
}

select.closeModal.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    closeModal();
  });
});

select.overlay.addEventListener('click', function(e){
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
  select.allModals.forEach(function(modal){
    modal.classList.remove(classNames.show);
  });
  select.overlay.classList.add(classNames.show);
  document.querySelector(modal).classList.add(classNames.show);
}

select.allPopups.forEach((popup) => {
  popup.addEventListener('click', function(e){
    e.preventDefault();
    const id = '#' + popup.getAttribute('href');
  
    openModal(id);
  });
});

// Chat

function sendMessage(){
  const text = select.chatInput.value;
  const newMsg = document.createElement('p');
  newMsg.classList.add(classNames.fromMe);
  newMsg.innerHTML = text;
  
  if(text){
    select.msgWrapper.appendChild(newMsg);
    select.chatInput.value = '';
  }
}

select.chatSendBtn.addEventListener('click', function(e){
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

  for(let section of select.sections){
    section.classList.remove(classNames.active);
    if(section.getAttribute('id') === link){
      section.classList.add(classNames.active);
    }
  }
}

select.navLinks.forEach((link) => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const linkId = link.querySelector('a').getAttribute('href').replace('#', '');

    activateSection(linkId);
  });
});

// Nav

select.navButton.addEventListener('click', function(e){
  select.navPanel.classList.toggle(classNames.active);
})

