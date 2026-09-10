const invitation = document.querySelector('.invitation');
const envelope = document.querySelector('#envelope');
const openButton = document.querySelector('#openButton');
const detailsCard = document.querySelector('#detailsCard');

function openInvitation() {
  if (invitation.classList.contains('is-open')) return;
  invitation.classList.add('is-open');
  envelope.setAttribute('aria-expanded', 'true');
  detailsCard.setAttribute('aria-hidden', 'false');
}

envelope.addEventListener('click', openInvitation);
openButton.addEventListener('click', openInvitation);
envelope.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openInvitation();
  }
});
