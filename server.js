const mqtt = require("mqtt");

const mqtt_broker_url = "mqtt://192.168.0.104:1883";

let mqtt_server_client = mqtt.connect(mqtt_broker_url);

mqtt_server_client.on("connect", async () => {
  console.log("MQTT client connected with broker");
  mqtt_server_client.subscribeAsync("home/temp");
});

mqtt_server_client.on("message", async (topic, message) => {
  console.log(
    `new message on topic [${topic.toString()}] is:  ${message.toString()}`
  );
  //mqtt_server_client.publishAsync("home/cam1", "0");
  Math.floor(Math.random() * 100) % 2 == 0
    ? mqtt_server_client.publishAsync("home/cam1", "1")
    : mqtt_server_client.publishAsync("home/cam1", "0");
});
