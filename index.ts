// Import stylesheets
import './style.css';
import liff from '@line/liff';
// Write TypeScript code!
const body = document.getElementById('body');
const pictureUrl = document.getElementById('pictureUrl');
const userID = document.getElementById('userID');
const displayName = document.getElementById('displayName');
const message = document.getElementById('message');
const email = document.getElementById('email');

async function main() {
  liff.ready.then(() => {
    if (liff.getOS() === 'ios') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getProfile();
    }
  });
  await liff.init({ liffId: '1656092207-0Qr9Qboy' });
}
main();
async function getProfile() {
  const profile = await liff.getProfile();
  pictureUrl.innerHTML = profile.pictureUrl;
  displayName.innerHTML = '<b>displayName : </b>' + profile.displayName;
}
