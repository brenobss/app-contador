"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Uma função que instância o objeto Date e pôe a hora, minuto e segundo
// em uma variável, após isso junta todas em uma só adicionando ":" característica
// das horas, em seguida faz a função chamar a si própria a cada 1000 milisegundos
// (1 segundo), para que as horas estejam atualizadas
var dataAtual = new Date();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var segundos = dataAtual.getSeconds();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();

function newRelogio() {
  var dataAtual = new Date();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var segundos = dataAtual.getSeconds();
  var relogio = "".concat(horas, ":").concat(minutos, ":").concat(segundos);
  document.form_relogio.hora.value = relogio;
  setTimeout("newRelogio()", 1000);
}

function newData() {
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;
  var ano = dataAtual.getFullYear();
  var data = dia + "/" + mes + "/" + ano;
  document.form_data.data.value = data;
  setTimeout("newData()", 1000);
} // O objeto '{sendDate}' trata de processar tanto a data quanto a hora


var sendDate = /*#__PURE__*/function () {
  function sendDate(date, hour, descriptionEvent) {
    _classCallCheck(this, sendDate);

    var play = true;
    this.date = [date];
    this.hour = [hour];
    this.descriptionEvent;
    var dayUser = date[0] + date[1];
    var monthUser = date[3] + date[4];
    var yearUser = date[6] + date[7] + date[8] + date[9];
    dayUser = parseInt(dayUser);
    monthUser = parseInt(monthUser);
    yearUser = parseInt(yearUser);

    if (dayUser < dia && monthUser <= mes && yearUser <= ano) {
      console.log("Erro aqui");
      return this.problemModalPrecedent();
    }

    if (monthUser < mes && yearUser <= ano) {
      return this.problemModalPrecedent();
    }

    if (yearUser < ano) {
      return this.problemModalPrecedent();
    }

    if (descriptionEvent == "" || descriptionEvent == undefined) {
      console.log(descriptionEvent);
      return this.eventDes();
    }

    for (var i = 0; i <= 10; i++) {
      if (i == 10 && date[i] != undefined) {
        console.log("Erro no ".concat(i));
        return this.problemModalDate();
      }

      if (date[i] == undefined && i < 10) {
        console.log("Erro aqui no ".concat(i));
        return this.problemModalDate();
      }
    }

    if (date[2] != '/' || date[5] != '/') {
      console.log(date);
      return this.problemModalDate();
    } else if (dayUser > 31 || dayUser < 1 || dayUser === "") {
      console.log(dayUser);
      return this.problemModalDate();
    } else if (monthUser > 12 || monthUser < 1 || monthUser === "") {
      console.log(monthUser);
      return this.problemModalDate();
    } else if (yearUser < 1970 || yearUser == "" || yearUser == undefined) {
      console.log(yearUser);
      return this.problemModalDate();
    } //      Tratando das horas


    var hourUser = hour[0] + hour[1];
    var minutes = hour[3] + hour[4];
    var secunds = hour[6] + hour[7];

    for (var _i = 0; _i <= 8; _i++) {
      if (_i == 8 && hour[_i] != undefined) {
        console.log("Erro no ".concat(_i));
        return this.problemModalHour();
      }

      if (hour[_i] == undefined && _i < 8) {
        console.log("Erro aqui no ".concat(_i));
        return this.problemModalHour();
      }
    }

    if (hour[2] != ':' || hour[5] != ':') {
      console.log(hour);
      return this.problemModalHour();
    } else if (hourUser > 23 || hourUser < 0 || hourUser === "") {
      console.log(hourUser);
      return this.problemModalHour();
    } else if (minutes > 59 || minutes < 0 || minutes === "") {
      console.log(minutes);
      return this.problemModalHour();
    } else if (secunds > 59 || secunds == "" || secunds == undefined) {
      console.log(secunds);
      return this.problemModalHour();
    } else if (dayUser == dia) {
      hourUser = parseInt(hourUser);
      minutes = parseInt(minutes);
      secunds = parseInt(secunds);

      if (hourUser < horas) {
        return this.problemModalPrecedent();
      }

      if (minutes < minutos && hourUser <= horas) {
        return this.problemModalPrecedent();
      }

      if (secunds < segundos && minutes <= minutos && hourUser <= horas) {
        return this.problemModalPrecedent();
      }
    }

    return this.okModalDate(yearUser, monthUser, dayUser, hourUser, minutes, secunds, date, hour);
  }

  _createClass(sendDate, [{
    key: "eventDes",
    value: function eventDes() {
      document.getElementById('exampleModalLabel').innerHTML = 'O evento está em branco!';
      document.getElementById('modalBody').innerHTML = "Gostaria de deix\xE1-lo assim?";
      document.getElementById('btnModalOk').innerHTML = 'OK';
      document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }
  }, {
    key: "problemModalDate",
    value: function problemModalDate() {
      document.getElementById('exampleModalLabel').innerHTML = 'A data está incorreta';
      document.getElementById('modalBody').innerHTML = "A data deve estar no formato: dd/mm/aaaa";
      document.getElementById("btnModalOk").style.display = "none";
      document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }
  }, {
    key: "problemModalPrecedent",
    value: function problemModalPrecedent() {
      document.getElementById('exampleModalLabel').innerHTML = 'A data ou hora extrapolam a precedência do tempo';
      document.getElementById('modalBody').innerHTML = "Coloque data e hora para momentos futuros";
      document.getElementById("btnModalOk").style.display = "none";
      document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }
  }, {
    key: "problemModalHour",
    value: function problemModalHour() {
      document.getElementById('exampleModalLabel').innerHTML = 'O horário está incorreto';
      document.getElementById('modalBody').innerHTML = "As horas devem estar no formato HH:MM:SS";
      document.getElementById("btnModalOk").style.display = "none";
      document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }
  }, {
    key: "okModalDate",
    value: function okModalDate(yearUser, monthUser, dayUser, hourUser, minutes, secunds, date, hour) {
      document.getElementById('exampleModalLabel').innerHTML = 'Confimar esse evento?';
      document.getElementById('modalBody').innerHTML = "A data escolhida foi ".concat(date, " <br> \n        O hor\xE1rio escolhido foi ").concat(hour);
      document.getElementById('btnModalOk').innerHTML = 'OK';
      document.getElementById('btnModalExit').innerHTML = 'REFAZER';
      document.getElementById('btnModalOk').onclick = setInterval(tempoFaltante, 1000, yearUser, monthUser, dayUser, hourUser, minutes, secunds);
    }
  }]);

  return sendDate;
}(); // Função que recebe a data e o horário do usuário


function recoveryDatas() {
  var dateSended = document.getElementById('date').value;
  var hour = document.getElementById('hour').value;
  var descriptionEvent = document.getElementById('event').value;
  var Send = new sendDate(dateSended, hour, descriptionEvent);
} //document.getElementById('idTemporizadorDia').value = ` Dia(s)`;
//document.getElementById('idTemporizadorHour').value = `00:00:00`;
// Função que faz o temporizador funcionar


function tempoFaltante(yearUser, monthUser, dayUser, hourUser, minutes, secunds) {
  var dataMomento = new Date();
  var dataUser = new Date(yearUser, monthUser - 1, dayUser, hourUser, minutes, secunds);
  var diferenca = Math.abs(dataUser.getTime() - dataMomento.getTime());
  var days = Math.trunc(diferenca / (1000 * 60 * 60 * 24));
  var stringHours = ((diferenca / (1000 * 60 * 60 * 24) - Math.trunc(diferenca / (1000 * 60 * 60 * 24))) * 24).toFixed(2);
  var hours = parseFloat(Math.trunc(stringHours));
  var stringMinutes = ((parseFloat(stringHours) - Math.trunc(stringHours)) * 60).toFixed(2);
  var minute = parseFloat(Math.trunc(stringMinutes));
  var stringSecunds = ((parseFloat(stringMinutes) - Math.trunc(stringMinutes)) * 60).toFixed(2);
  var secund = parseFloat(Math.trunc(stringSecunds));
  /* let dias = `${days} Dia(s)`;
  let restante = `${hours}:${minute}:${secund}`;
  document.form_temporizadorD.temporizadorD.value = dias;
  document.form_temporizadorH.temporizadorH.value = restante; */

  console.log(days, hours, minute, secund);
  secunds -= 1;
}
