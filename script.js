const teamContainer = document.querySelector('.team-container');


const membri = [
  {'nome': 'Wayne Barnett',
   'ruolo':'Founder & CEO',
   'foto':' img/wayne-barnett-founder-ceo.jpg'
},
  {'nome': 'Angela Caroll',
   'ruolo':'Chief Editor',
   'foto':' img/angela-caroll-chief-editor.jpg'
},
  {'nome': 'Walter Gordon',
   'ruolo':'Office Manager',
   'foto':' img/walter-gordon-office-manager.jpg'
},
  {'nome': 'Angela Lopez',
   'ruolo':'Social Media Manager',
   'foto':' img/angela-lopez-social-media-manager.jpg'
},
  {'nome': 'Scott Estrada',
   'ruolo':'Developer',
   'foto':' img/scott-estrada-developer.jpg'
},
  {'nome': 'Barbara Ramos',
   'ruolo':'Graphic Designer',
   'foto':' img/barbara-ramos-graphic-designer.jpg'
}

]

// console.log(membri[0].nome);

for( let i in membri){

  let teamCard = document.createElement('div');
  teamCard.className=('team-card');

  let cardImage = document.createElement('div');
  cardImage.className=('card-image');

  let cardText = document.createElement('div');
  cardText.className=('card-text');

  cardImage.innerHTML=`<img src="${membri[i].foto}" alt="">`;

  cardText.innerHTML=`<h3>${membri[i].nome}</h3>
  <p>${membri[i].ruolo}</p>`;

  teamCard.append(cardImage);
  teamCard.append(cardText);
  teamContainer.append(teamCard);
}  