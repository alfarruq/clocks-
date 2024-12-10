function updateClock() {
  const now = moment(); // Hozirgi vaqtni olish

  const hoursElement = document.getElementById('hours').querySelector('span');
  const minutesElement = document.getElementById('minutes').querySelector('span');
  const secondsElement = document.getElementById('seconds').querySelector('span');
  const periodElement = document.getElementById('period');

  const hours = now.format('hh'); // 12-soat formatida
  const minutes = now.format('mm');
  const seconds = now.format('ss');
  const period = now.format('A'); // AM yoki PM

  // Vaqtni elementlarga yozish
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  periodElement.textContent = period;
}

// Har soniyada yangilash uchun interval
setInterval(updateClock, 1000);

// Boshlanishida taymerni yangilash
updateClock();
