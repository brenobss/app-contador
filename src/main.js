// Uma função que instância o objeto Date e pôe a hora, minuto e segundo
// em uma variável, após isso junta todas em uma só adicionando ":" característica
// das horas, em seguida faz a função chamar a si própria a cada 1000 milisegundos
// (1 segundo), para que as horas estejam atualizadas
const dataAtual = new Date;
const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

function newRelogio() {
    let dataAtual = new Date;
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    let relogio = `${horas}:${minutos}:${segundos}`;

    document.form_relogio.hora.value = relogio;

    setTimeout("newRelogio()", 1000);
}




function newData() {
    let dataAtual = new Date;

    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();

    let data = dia + "/" + mes + "/" + ano;

    document.form_data.data.value = data;

    setTimeout("newData()", 1000);
}

// O objeto '{sendDate}' trata de processar tanto a data quanto a hora


class sendDate {
    constructor(date, hour, descriptionEvent) {
        let play = true;
        this.date = [date]
        this.hour = [hour]
        this.descriptionEvent
        let dayUser = date[0] + date[1];
        let monthUser = date[3] + date[4];
        let yearUser = date[6] + date[7] + date[8] + date[9];
        dayUser = parseInt(dayUser);
        monthUser = parseInt(monthUser);
        yearUser = parseInt(yearUser);

        if (dayUser < dia && monthUser <= mes && yearUser <= ano) {
            console.log("Erro aqui")
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
        for (let i = 0; i <= 10; i++) {
            if (i == 10 && date[i] != undefined) {
                console.log(`Erro no ${i}`)
                return this.problemModalDate();
            }
            if (date[i] == undefined && i < 10) {
                console.log(`Erro aqui no ${i}`)
                return this.problemModalDate();
            }
        }
        if (date[2] != '/' || date[5] != '/') {
            console.log(date);
            return this.problemModalDate();
        }
        else if (dayUser > 31 || dayUser < 1 || dayUser === "") {
            console.log(dayUser);
            return this.problemModalDate();
        }
        else if (monthUser > 12 || monthUser < 1 || monthUser === "") {
            console.log(monthUser);
            return this.problemModalDate();
        }
        else if (yearUser < 1970 || yearUser == "" || yearUser == undefined) {
            console.log(yearUser);
            return this.problemModalDate();
        }

        //      Tratando das horas


        let hourUser = hour[0] + hour[1];
        let minutes = hour[3] + hour[4];
        let secunds = hour[6] + hour[7];



        for (let i = 0; i <= 8; i++) {
            if (i == 8 && hour[i] != undefined) {
                console.log(`Erro no ${i}`)
                return this.problemModalHour();
            }
            if (hour[i] == undefined && i < 8) {
                console.log(`Erro aqui no ${i}`)
                return this.problemModalHour();
            }
        }
        if (hour[2] != ':' || hour[5] != ':') {
            console.log(hour);
            return this.problemModalHour();
        }
        else if (hourUser > 23 || hourUser < 0 || hourUser === "") {
            console.log(hourUser);
            return this.problemModalHour();
        }
        else if (minutes > 59 || minutes < 0 || minutes === "") {
            console.log(minutes);
            return this.problemModalHour();
        }
        else if (secunds > 59 || secunds == "" || secunds == undefined) {
            console.log(secunds);
            return this.problemModalHour();
        } else

            if (dayUser == dia) {
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

    eventDes() {
        document.getElementById('exampleModalLabel').innerHTML = 'O evento está em branco!';
        document.getElementById('modalBody').innerHTML = `Gostaria de deixá-lo assim?`;
        document.getElementById('btnModalOk').innerHTML = 'OK';
        document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }

    problemModalDate() {
        document.getElementById('exampleModalLabel').innerHTML = 'A data está incorreta';
        document.getElementById('modalBody').innerHTML = `A data deve estar no formato: dd/mm/aaaa`;
        document.getElementById("btnModalOk").style.display = "none";
        document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }
    problemModalPrecedent() {
        document.getElementById('exampleModalLabel').innerHTML = 'A data ou hora extrapolam a precedência do tempo';
        document.getElementById('modalBody').innerHTML = `Coloque data e hora para momentos futuros`;
        document.getElementById("btnModalOk").style.display = "none";
        document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }
    problemModalHour() {
        document.getElementById('exampleModalLabel').innerHTML = 'O horário está incorreto';
        document.getElementById('modalBody').innerHTML = `As horas devem estar no formato HH:MM:SS`;
        document.getElementById("btnModalOk").style.display = "none";
        document.getElementById('btnModalExit').innerHTML = 'REFAZER';
    }

    okModalDate(yearUser, monthUser, dayUser, hourUser, minutes, secunds, date, hour) {
        document.getElementById('exampleModalLabel').innerHTML = 'Confimar esse evento?';
        document.getElementById('modalBody').innerHTML = `A data escolhida foi ${date} <br> 
        O horário escolhido foi ${hour}`;
        document.getElementById('btnModalOk').innerHTML = 'OK';
        document.getElementById('btnModalExit').innerHTML = 'REFAZER';
        document.getElementById('btnModalOk').onclick = setInterval(tempoFaltante, 1000, yearUser, monthUser, dayUser, hourUser, minutes, secunds)
    }
}



// Função que recebe a data e o horário do usuário

function recoveryDatas() {
    const dateSended = document.getElementById('date').value;
    const hour = document.getElementById('hour').value;
    const descriptionEvent = document.getElementById('event').value;
    const Send = new sendDate(dateSended, hour, descriptionEvent);
}

//document.getElementById('idTemporizadorDia').value = ` Dia(s)`;
//document.getElementById('idTemporizadorHour').value = `00:00:00`;


// Função que faz o temporizador funcionar


function tempoFaltante(yearUser, monthUser, dayUser, hourUser, minutes, secunds) {

    let dataMomento = new Date

    const dataUser = new Date(yearUser, monthUser - 1, dayUser, hourUser, minutes, secunds)

    let diferenca = Math.abs(dataUser.getTime() - dataMomento.getTime())
    let days = Math.trunc(diferenca / (1000 * 60 * 60 * 24));
    let stringHours = (((diferenca / (1000 * 60 * 60 * 24)) - Math.trunc(diferenca / (1000 * 60 * 60 * 24))) * 24).toFixed(2)
    let hours = parseFloat(Math.trunc(stringHours))
    let stringMinutes = ((parseFloat(stringHours) - Math.trunc(stringHours)) * 60).toFixed(2)
    let minute = parseFloat(Math.trunc(stringMinutes))
    let stringSecunds = ((parseFloat(stringMinutes) - Math.trunc(stringMinutes)) * 60).toFixed(2)
    let secund = parseFloat(Math.trunc(stringSecunds)) 

    

    /* let dias = `${days} Dia(s)`;
    let restante = `${hours}:${minute}:${secund}`;
    document.form_temporizadorD.temporizadorD.value = dias;
    document.form_temporizadorH.temporizadorH.value = restante; */

    console.log(days,hours, minute, secund)

    secunds -= 1

}



