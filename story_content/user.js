function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rGvXAKLv7N":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="MUSIC.mp3";
audio.loud();
audio.play();
audio.volume=0.3;
}

