// Define the variables
const mailType = document.getElementById("mailtypeSelect");
const timeSelect = document.getElementById("timeSelect");
const systemSelect = document.getElementById("systemSelect");
const clientSelect = document.getElementById("clientSelect");
const posSelect = document.getElementById("posSelect");
const errorSelect = document.getElementById("errorSelect");
const fromTime = document.getElementById("fromTime");
const toTime = document.getElementById("toTime");
const idocNumber = document.getElementById("idocNumber");
const idocTypeSelect = document.getElementById("idocTypeSelect");
const idocErrorNum = document.getElementById("idocErrorNum");
const missingArticle = document.getElementById("missingArticle");
const otherError = document.getElementById("otherError");
const incidentNum = document.getElementById("incidentNum");
const language = document.getElementById("language");
const errorSolved = document.getElementById("errorSolved");
// Classes of optional fields
const systemSelectClass = document.getElementsByClassName("systemSelect")[0];
const clientSelectClass = document.getElementsByClassName("clientSelect")[0];
const posSelectClass = document.getElementsByClassName("posSelect")[0];
const errorSelectClass = document.getElementsByClassName("errorSelect")[0];
const fromTimeClass = document.getElementsByClassName("fromTime")[0];
const toTimeClass = document.getElementsByClassName("toTime")[0];
const idocNumberClass = document.getElementsByClassName("idocNumber")[0];
const idocTypeSelectClass = document.getElementsByClassName("idocTypeSelect")[0];
const idocErrorNumClass = document.getElementsByClassName("idocErrorNum")[0];
const missingArticleClass = document.getElementsByClassName("missingArticle")[0];
const otherErrorClass = document.getElementsByClassName("otherError")[0];
const incidentNumClass = document.getElementsByClassName("incidentNum")[0];
const languageClass = document.getElementsByClassName("language")[0];
const errorSolvedClass = document.getElementsByClassName("errorSolved")[0];

let allOptionalFields = [systemSelectClass,clientSelectClass,posSelectClass,errorSelectClass,fromTimeClass,toTimeClass,idocNumberClass,idocTypeSelectClass,idocErrorNumClass,missingArticleClass,otherErrorClass,incidentNumClass,languageClass,errorSolvedClass];

function hideFields(args) {
    for (let i=0;i<args.length;i++) {
        args[i].classList.add("invisible");
    }
}

function showFields(args) {
    for (let i=0;i<args.length;i++) {
        args[i].classList.remove("invisible");
    }
}

document.addEventListener("load", hideFields(allOptionalFields));

mailType.addEventListener("change", () => {
    switch(mailType.value) {
        case "1":
            hideFields(allOptionalFields);
            showFields([clientSelectClass,posSelectClass,fromTimeClass,toTimeClass, languageClass]);
            break;
        case "2":
            hideFields(allOptionalFields);
            showFields([incidentNumClass,clientSelectClass,posSelectClass,errorSolvedClass, languageClass]);
            break;
        case "3":
            hideFields(allOptionalFields);
            showFields([systemSelectClass,clientSelectClass,posSelectClass,errorSolvedClass, incidentNumClass, languageClass]);
            break;
        case "4":
            hideFields(allOptionalFields);
            showFields([systemSelectClass]);
            break;
        case "5":
            hideFields(allOptionalFields);
            break;
        case "6":
            hideFields(allOptionalFields);
            showFields([incidentNumClass,clientSelectClass,idocTypeSelectClass,idocNumberClass, languageClass]);
            break;
        case "7":
            hideFields(allOptionalFields);
            showFields([incidentNumClass, systemSelectClass, clientSelectClass,idocTypeSelectClass,idocNumberClass, languageClass]);
            break;
        case "8":
            hideFields(allOptionalFields);
            showFields([incidentNumClass, systemSelectClass, clientSelectClass,idocTypeSelectClass,idocNumberClass]);
            break;
        default:
            hideFields(allOptionalFields);
            break;
    }
});

let mail = "";
function prepareMail (idx) {mail = `${mailTemplates[idx]["to"]}?cc=${mailTemplates[idx]["cc"]}&subject=${mailTemplates[idx]["subject"]}&body=${mailTemplates[idx]["message"]}`};

function sendMail() {
    const selLang = document.querySelectorAll('input[name="language"]');
            let selectedValue;
            for (const rb of selLang) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }

    const isErrorSolved = document.querySelectorAll('input[name="errorSolved"]');
            let isSolved = false;
            for (const rb of isErrorSolved) {
                if (rb.checked) {
                    isSolved = Boolean(rb.value);
                    break;
                }
            }

    let selClient;
    switch(clientSelect.value) {
        case "101":
            selClient = "Verteiler-Monitoring-HER@aldi-nord.de";
            break;
        case "105":
            selClient = "Verteiler-Monitoring-SHO@aldi-nord.de";
            break;
        case "109":
            selClient = "Verteiler-Monitoring-GRE@aldi-nord.de";
            break;
    }

    switch(mailType.value) {
        case "1":
            if(selectedValue === "both"){
                window.open(`mailto:fr-support@aldi.fr?cc=holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de; susan.omar@aldi.fr; ALDI-AMS@realcore.de&subject=Subject: Retail Monitoring Time - Gaps in SAP CAR MD ${clientSelect.value} VST ${posSelect.value}&body=Hello everyone,%0D%0A%0D%0Athere was no data flow at ${timeSelect.value} monitoring  in MD ${clientSelect.value} VST ${posSelect.value} from ${fromTime.value} until ${toTime.value}. -See Screenshot-%0D%0A%0D%0A<Screenshot>%0D%0A%0D%0AI ask for further investigation into this case.%0D%0A%0D%0ABest regards%0D%0A%0D%0A----------------%0D%0A%0D%0AHallo zusammen,%0D%0A%0D%0Abeim ${timeSelect.value} Uhr Monitoring gab es keinen Datenfluss in MD ${clientSelect.value} VST ${posSelect.value} von ${fromTime.value} bis ${toTime.value}. -Siehe Screenshot.Ich bitte um weitere Überprüfung der Ursache.%0D%0A%0D%0AViele Grüße`)
            } else {
                window.open(`mailto:holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de?cc=ALDI-AMS@realcore.de&subject=Betreff: Retail Monitoring Zeit - Gaps in SAP CAR MD ${clientSelect.value} VST ${posSelect.value}&body=Hallo zusammen,%0D%0A%0D%0Abeim ${timeSelect.value} Uhr Monitoring gab es keinen Datenfluss in MD ${clientSelect.value}  VST ${posSelect.value} von ${fromTime.value} bis ${toTime.value}. -Siehe Screenshot-%0D%0A%0D%0A<Screenshot>%0D%0A%0D%0AIch bitte um weitere Überprüfung der Ursache.%0D%0A%0D%0AViele Grüße`)
            }
            break;
        case "2":
            if(selectedValue === "both") {
                window.open(`mailto:holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; ALDI-AMS@realcore.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de?cc=christoph.breitler@aldi.fr; fr-support@aldi.fr; susan.omar@aldi.fr&subject=Incident ${incidentNum.value}  AFMS Monitoring SAP CAR MD${clientSelect.value} VST${posSelect.value}, error when processing selling transactions&body=Hello everyone%0D%0A%0D%0Aan error occurred while processing the selling transactions in CAR MD ${clientSelect.value} VST ${posSelect.value} at ${timeSelect.value} monitoring.%0D%0A${isSolved ? "The error has been corrected." : ""}%0D%0A%0D%0ATicket ${incidentNum.value} was created in SolMan.%0D%0A%0D%0AWith kind regards%0D%0A%0D%0A----------%0D%0A%0D%0AHallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung der Kassentransaktionen auf CAR in MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0A${isSolved ? "Der Fehler wurde korrigiert." : ""}%0D%0A%0D%0ADazu wurde das Ticket  ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            } else {
                window.open(`mailto:holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; ALDI-AMS@realcore.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de?cc=${selClient}&subject=Incident ${incidentNum.value}  AFMS Monitoring SAP CAR MD${clientSelect.value} VST${posSelect.value}, Fehler rote Bons&body=Hallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung der Kassentransaktionen auf CAR in MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0A${isSolved ? "Der Fehler wurde korrigiert." : ""}%0D%0A%0D%0ADazu wurde das Ticket  ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            }
            break;
        case "3":
            if(selectedValue === "both") {
                window.open(`mailto:holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; ALDI-AMS@realcore.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de?cc=christoph.breitler@aldi.fr; fr-support@aldi.fr; susan.omar@aldi.fr&subject=Incident ${incidentNum.value}  AFMS Monitoring GK ${systemSelect.value} MD${clientSelect.value} VST${posSelect.value}, error in message queue&body=Hello everyone%0D%0A%0D%0AThere was an error in queue monitoring on GK ${systemSelect.value} MD ${clientSelect.value} VST ${posSelect.value} at ${timeSelect.value} monitoring.%0D%0A${isSolved ? "The error has been corrected." : ""}%0D%0A%0D%0ATicket ${incidentNum.value} was created in SolMan.%0D%0A%0D%0AWith kind regards%0D%0A%0D%0A----------%0D%0A%0D%0AHallo zusammen,%0D%0A%0D%0Aes ist ein Fehler im Queue-Monitoring auf GK ${systemSelect.value} in MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0A${isSolved ? "Der Fehler wurde korrigiert." : ""}%0D%0A%0D%0ADazu wurde das Ticket  ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            } else {
                window.open(`mailto:holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; ALDI-AMS@realcore.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de?cc=${selClient}&subject=Incident ${incidentNum.value}  AFMS Monitoring GK ${systemSelect.value} MD${clientSelect.value} VST${posSelect.value}, Fehler in Message-Queue&body=Hallo zusammen,%0D%0A%0D%0Aes ist ein Fehler im Queue-Monitoring auf GK ${systemSelect.value} in MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0A${isSolved ? "Der Fehler wurde korrigiert." : ""}%0D%0A%0D%0ADazu wurde das Ticket  ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            }
            break;
        case "4":
            window.open(`mailto:support@aldi-nord.de; ALDI-AMS@realcore.de?cc=holger.thurow@aldi-nord.de; sap-basis@aldi-nord.de; dennis.westermann@aldi-nord.de; daniel.jansen@aldi-nord.de;  jonah.katritzke@aldi-nord.de; lars.staudinger@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; arne.sonntag@realcore.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de&subject=AFMS Monitoring ${systemSelect.value} Fehlermeldung&body=Hallo zusammen,%0D%0A%0D%0Abeim ${timeSelect.value} Uhr Monitoring ist im System ${systemSelect.value} ein Fehler aufgetreten.%0D%0A%0D%0ADazu wurde das Ticket  ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            break;
        case "5":
            window.open(`mailto:holger.thurow@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de?cc=ALDI-AMS@realcore.de&subject=AFMS Monitoring ${timeSelect.value} Uhr&body=Hallo zusammen,%0D%0A%0D%0Akurze Statusmeldung nach dem ${timeSelect.value} Uhr Monitoring:%0D%0AEs gab heute bisher weder rote Bons zu bearbeiten, noch waren Ausgangs - IDoc's in Retail oder CAR betroffen. Ebenso wurden keine Korrekturen in GK vorgenommen.%0D%0A%0D%0AMit freundlichen Grüßen`)
            break;
        case "6":
            if(selectedValue === "both") {
                window.open(`mailto:support@aldi-nord.de; ALDI-AMS@realcore.de?cc=holger.thurow@aldi-nord.de; sap-basis@aldi-nord.de; dennis.westermann@aldi-nord.de; daniel.jansen@aldi-nord.de;  jonah.katritzke@aldi-nord.de; lars.staudinger@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; melanie.hagen@sap.com; fr-support@aldi.fr; youssef.kistas@aldi.fr; christoph.breitler@aldi.fr; julien.masri@aldi.fr; susan.omar@aldi.fr; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de; kristyna.czurilla@aldi-nord.de&subject=Incident ${incidentNum.value}  AFMS Monitoring SAP CAR MD${clientSelect.value}, ${idocTypeSelect.value} IDoc Error&body=Hello everyone%0D%0A%0D%0Aan error occurred while processing the IDoc type ${idocTypeSelect.value} in MD ${clientSelect.value} at ${timeSelect.value} monitoring.%0D%0AIDoc numbers affected:%0D%0A${idocNumber.value}%0D%0A%0D%0ATicket ${incidentNum.value} was created in SolMan.%0D%0A%0D%0AWith kind regards%0D%0A%0D%0A----------%0D%0A%0D%0AHallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung des IDoc Typen ${idocTypeSelect.value} in MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0AIDoc mit folgender Nummer:%0D%0A${idocNumber.value}%0D%0A%0D%0ADazu wurde das Ticket ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            } else {
                window.open(`mailto:support@aldi-nord.de; ALDI-AMS@realcore.de?cc=holger.thurow@aldi-nord.de; sap-basis@aldi-nord.de; dennis.westermann@aldi-nord.de; daniel.jansen@aldi-nord.de;  jonah.katritzke@aldi-nord.de; lars.staudinger@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de;&subject=Incident ${incidentNum.value}  AFMS Monitoring SAP CAR MD${clientSelect.value}, ${idocTypeSelect.value} Fehler IDoc&body=Hallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung des IDoc Typen ${idocTypeSelect.value} in MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0AIDoc mit folgender Nummer:%0D%0A${idocNumber.value}%0D%0A%0D%0ADazu wurde das Ticket ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            }
            break;
        case "7":
            if(selectedValue === "both") {
                window.open(`mailto:support@aldi-nord.de; ALDI-AMS@realcore.de?cc=holger.thurow@aldi-nord.de;sap-basis@aldi-nord.de; dennis.westermann@aldi-nord.de;daniel.jansen@aldi-nord.de;jonah.katritzke@aldi-nord.de; lars.staudinger@aldi-nord.de;marvin.sassenbach@aldi-nord.de;daniel.kozlik@aldi-nord.de;melanie.hagen@sap.com;fr-support@aldi.fr;youssef.kistas@aldi.fr;christoph.breitler@aldi.fr;julien.masri@aldi.fr;alexander.kremer@aldi-nord.de;susan.omar@aldi.fr;sascha.loeffler@aldi-nord.de;kristyna.czurilla@aldi-nord.de&subject=Incident ${incidentNum.value}  AFMS Monitoring SAP Retail ${systemSelect.value} MD${clientSelect.value}, ${idocTypeSelect.value} IDoc Error&body=Hello everyone%0D%0A%0D%0Aan error occurred while processing the IDoc type ${idocTypeSelect.value} in ${systemSelect.value} MD ${clientSelect.value} at ${timeSelect.value} monitoring.%0D%0AIDoc numbers affected:%0D%0A${idocNumber.value}%0D%0A%0D%0ATicket ${incidentNum.value} was created in SolMan.%0D%0A%0D%0AWith kind regards%0D%0A%0D%0A----------%0D%0A%0D%0AHallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung des IDoc Typen ${idocTypeSelect.value} in ${systemSelect.value} MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0AIDoc mit folgender Nummer:%0D%0A${idocNumber.value}%0D%0A%0D%0ADazu wurde das Ticket ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            } else {
                window.open(`mailto:support@aldi-nord.de; ALDI-AMS@realcore.de?cc=holger.thurow@aldi-nord.de; sap-basis@aldi-nord.de; dennis.westermann@aldi-nord.de; daniel.jansen@aldi-nord.de;  jonah.katritzke@aldi-nord.de; lars.staudinger@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; melanie.hagen@sap.com; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de;&subject=Incident ${incidentNum.value}  AFMS Monitoring SAP Retail ${systemSelect.value} MD${clientSelect.value}, ${idocTypeSelect.value} Fehler IDoc&body=Hallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung des IDoc Typen ${idocTypeSelect.value} in ${systemSelect.value} MD ${clientSelect.value} VST ${posSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0AIDoc mit folgender Nummer:%0D%0A${idocNumber.value}%0D%0A%0D%0ADazu wurde das Ticket ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`)
            }
            break;
        case "8":
            window.open(`mailto:support@aldi-nord.de; ALDI-AMS@realcore.de?cc=holger.thurow@aldi-nord.de; sap-basis@aldi-nord.de; dennis.westermann@aldi-nord.de; daniel.jansen@aldi-nord.de;  jonah.katritzke@aldi-nord.de; lars.staudinger@aldi-nord.de; marvin.sassenbach@aldi-nord.de; daniel.kozlik@aldi-nord.de; melanie.hagen@sap.com; fr-support@aldi.fr; youssef.kistas@aldi.fr; christoph.breitler@aldi.fr; julien.masri@aldi.fr; susan.omar@aldi.fr; alexander.kremer@aldi-nord.de; sascha.loeffler@aldi-nord.de; kristyna.czurilla@aldi-nord.de&subject=${systemSelect.value}-${clientSelect.value} Fehler bei der Verarbeitung des IDoc-Typen ${idocTypeSelect.value}&body=Hallo zusammen,%0D%0A%0D%0Aes ist ein Fehler bei der Verarbeitung des IDoc Typen ${idocTypeSelect.value} bei Mandant ${clientSelect.value} / ${systemSelect.value} beim ${timeSelect.value} Uhr Monitoring aufgetreten.%0D%0AIDoc mit folgender Nummer:%0D%0A${idocNumber.value}%0D%0A%0D%0ADazu wurde das Ticket ${incidentNum.value} im SolMan erstellt.%0D%0A%0D%0AMit freundlichen Grüßen`);
            break;
        default:
            hideFields(allOptionalFields);
            break;
    }
}