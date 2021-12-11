var msg = {
  HALO: "Hai!",
  HALLO: "Hai!",
  HAI: "Halo!",
  HI: "Halo!",
  P: "Iya, kenapa?",
  ASSALAMUALAIKUM: "Waalaikumsalam",
  "NAMA KAMU SIAPA?": "Nama saya Dico!",
  "LAGI APA?": "Kepo!",
  "LAGI NGAPAIN?": "Kepo!",
  "LAGI DIMANA?": "Lubuk hatimu wkwkwkw...",
  "UDAH MAKAN?": "Ciee perhatiaaannn...!!!",
  "SUDAH MAKAN?": "Ciee perhatiaaannn...!!!",
  "SELAMAT PAGI": "Pagi!",
  PAGI: "Pagi!",
  "SELAMAT SIANG": "Siang!",
  SIANG: "Siang!",
  "SELAMAT SORE": "Sore!",
  SORE: "Sore!",
  "SELAMAT MALAM": "Malam!",
  MALAM: "Malam!",
};

function talk() {
  var user = document.getElementById("data").value;
  var kapital_user = user.toUpperCase();
  document.getElementById("chatLog").innerHTML +=
    '<div class="user-inbox inbox"><div class="msg-header"><p>' +
    user +
    "</p></div></div>";
  if (kapital_user in msg) {
    document.getElementById("chatLog").innerHTML +=
      '<div class="bot-inbox inbox"><div class="msg-header"><p>' +
      msg[kapital_user] +
      "</p></div></div>";
  } else {
    document.getElementById("chatLog").innerHTML +=
      '<div class="bot-inbox inbox"><div class="msg-header"><p>Maaf saya tidak mengerti apa yang anda katakan.</p></div></div>';
  }
}
