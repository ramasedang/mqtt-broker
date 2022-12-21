import mqtt from 'mqtt';

const client = mqtt.connect('ws://mqtt-broker-vercell.vercel.app');

client.on('connect', function () {
    setInterval(function () {
      client.publish('myTopic', 'Hallo subscriber'); // mengirim data
      console.log('mengirim data => [hallo subscriber]');
    }, 1000);
  });