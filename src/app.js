window.onload = function() {
  let first = "A ";
  let adj = [
    "happy ",
    "lonely ",
    "skinny ",
    "noisy ",
    "sad ",
    "thinny ",
    "sunny "
  ];
  let noun = ["person ", "cat ", "boy ", "girl ", "guy ", "bird ", "bear "];
  let action = [
    "ate my ",
    "broke my ",
    "found my ",
    "stoled my ",
    "robbed my ",
    "saw my ",
    "played my "
  ];
  let possesion = [
    "car ",
    "toe ",
    "cup ",
    "computer ",
    "chair ",
    "tv ",
    "eyes "
  ];
  let where = [
    "in my house ",
    "in my car ",
    "in my school",
    "in my club ",
    "in my box ",
    "in my home",
    "in my gym "
  ];

  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possesion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possesion[rdm4] +
    where[rdm5];
};
