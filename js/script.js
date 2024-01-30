const creationDateObj = {
  year: 1899
};

const creationDate = new Date(
  creationDateObj.year
);

const timeLeft = document.querySelector('#timeLeft');

setInterval(() => {

  const now = new Date();
  const diffInMS = now - creationDate;
  const diffAsDate = new Date(diffInMS);

  const [
    years
  ] = diffAsDate
      .toISOString()
      .split('T')
      .map(timePart =>
        timePart
          .split(/-|:|\./)
          .map(str => +str)
      )
      .flat();

  timeLeft.textContent = `${years - 1899} лет `;

}, 1000);
