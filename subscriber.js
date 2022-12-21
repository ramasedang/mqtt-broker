import mqtt from 'mqtt';

const client = mqtt.connect('ws://mqtt-broker-vercell.vercel.app');

client.on('connect', function () {
    client.subscribe('#')
})
client.on('message', function (topic, message) {
    var context = message.toString();
    console.log(context)
})