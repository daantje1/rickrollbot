const ytdl = require('ytdl-core-discord');

async function play(connection, url) {
  connection.play(await ytdl(url), { type: 'opus' });
}
