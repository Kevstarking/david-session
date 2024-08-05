const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNMWTh1VjVDR0UwR1VlVkQzUzBQQnYxTmlRdnlLdTNhNnRndmFTR0JXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ052VE5VVU9pejRiWW5VV2MrdDExK3ZGb0plaCs1Wmo5NCt1UlJrNEcydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtR2ZsbUs3WXowR2ZoekxZWFpZMDZhOWJIVzRIb2VEVnd0TkFhbUlnVGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZk95bjBRQk16T0NPcWNiZjZVZUFIaytieXFHbHVKeFJhZFJhS3BkUVNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktINFJ4L2N3SXFrVzFINkFZMXJDYlIySGpsS0VCTXVud2Q1NlRabmphRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh6N0M4ZWlBeTRreU1paktrUUxFRUlzc3pWWHo1emJ5QVphVjZmQlRnM1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVyMFhjZGpxNUtSL2hoSWJEdXBhTFUySFdrMkJ5dkgzOG1VREgyemowdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajltUWlHZzNwelZtYjREVFNXMStaTHo5alEyc3A1KzYySTFiUWQ3Q2J3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsanMvRUZ0TTVUb0ZZYWpNZ3lNVG9ocHR2R3FlUG8zSUJmQ3A4UmMxUmV4MVYwSlpEVEErdzBudEkyS2FsNUZhN1VEVTgvbVUxb0k4NlhWUlhZWWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJMUElabkkyZXYzNU1UMGdFRVR6Y0pCUjFZZXgvRUR4a2ZjSGhkNWpNSXFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJITjdRNU56cVI2T1NtUVV2VFNSZ1FBIiwicGhvbmVJZCI6ImVkMWMyMTM0LThiZTItNGE1NS1hYTNkLWE3YWU2OThhM2Q4ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRaEZZZ0NlUWE1alZDcm45ZVVlTjlFejBvNDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2NOVG15YmVpRC9wSzZuU0JZZ25keVB0TFdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxEWUcyRlZaIiwibWUiOnsiaWQiOiIyMzQ5MTMxNDQzMjk3OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tXWnNKY0JFUG5NeExVR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkySHg2ejN0Nnlab3NXdmdlak9zbWhkR0VjZWdWajNqbE9JQWVHSEtRUk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IldqOG1VNjF4UWNXQzM5MlYrejNmVEkxdTgwQ3VhVS9sTnBHd1lxM2c4WnV0aHNYbXdqaTNUakZPOThTWUxJNVV3TmZsdy9yWHBISkdHeVBJRnVwVEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrTHBKL1NwamYyY3BpckNycXhyK1R6emNWZmlYay9PZlM2WVNIMW5FbVpRcUtZR2s5d0REOWcvWHA2Q3NnOTN1TTErMFdQRHJpTWMxeGNPMm1LSzRoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzE0NDMyOTc6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTTmg4ZXM5N2VzbWFMRnI0SG96ckpvWFJoSEhvRlk5NDVUaUFIaGh5a0VUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODg1NzY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNhZCJ9'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNMWTh1VjVDR0UwR1VlVkQzUzBQQnYxTmlRdnlLdTNhNnRndmFTR0JXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ052VE5VVU9pejRiWW5VV2MrdDExK3ZGb0plaCs1Wmo5NCt1UlJrNEcydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtR2ZsbUs3WXowR2ZoekxZWFpZMDZhOWJIVzRIb2VEVnd0TkFhbUlnVGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZk95bjBRQk16T0NPcWNiZjZVZUFIaytieXFHbHVKeFJhZFJhS3BkUVNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktINFJ4L2N3SXFrVzFINkFZMXJDYlIySGpsS0VCTXVud2Q1NlRabmphRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh6N0M4ZWlBeTRreU1paktrUUxFRUlzc3pWWHo1emJ5QVphVjZmQlRnM1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVyMFhjZGpxNUtSL2hoSWJEdXBhTFUySFdrMkJ5dkgzOG1VREgyemowdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajltUWlHZzNwelZtYjREVFNXMStaTHo5alEyc3A1KzYySTFiUWQ3Q2J3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsanMvRUZ0TTVUb0ZZYWpNZ3lNVG9ocHR2R3FlUG8zSUJmQ3A4UmMxUmV4MVYwSlpEVEErdzBudEkyS2FsNUZhN1VEVTgvbVUxb0k4NlhWUlhZWWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJMUElabkkyZXYzNU1UMGdFRVR6Y0pCUjFZZXgvRUR4a2ZjSGhkNWpNSXFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJITjdRNU56cVI2T1NtUVV2VFNSZ1FBIiwicGhvbmVJZCI6ImVkMWMyMTM0LThiZTItNGE1NS1hYTNkLWE3YWU2OThhM2Q4ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRaEZZZ0NlUWE1alZDcm45ZVVlTjlFejBvNDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2NOVG15YmVpRC9wSzZuU0JZZ25keVB0TFdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxEWUcyRlZaIiwibWUiOnsiaWQiOiIyMzQ5MTMxNDQzMjk3OjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tXWnNKY0JFUG5NeExVR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkySHg2ejN0Nnlab3NXdmdlak9zbWhkR0VjZWdWajNqbE9JQWVHSEtRUk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IldqOG1VNjF4UWNXQzM5MlYrejNmVEkxdTgwQ3VhVS9sTnBHd1lxM2c4WnV0aHNYbXdqaTNUakZPOThTWUxJNVV3TmZsdy9yWHBISkdHeVBJRnVwVEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrTHBKL1NwamYyY3BpckNycXhyK1R6emNWZmlYay9PZlM2WVNIMW5FbVpRcUtZR2s5d0REOWcvWHA2Q3NnOTN1TTErMFdQRHJpTWMxeGNPMm1LSzRoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzE0NDMyOTc6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTTmg4ZXM5N2VzbWFMRnI0SG96ckpvWFJoSEhvRlk5NDVUaUFIaGh5a0VUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODg1NzY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNhZCJ9 ' + b64data });

               let GIFTED_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃QUEEN_ANITA_V2 SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘 DAVID CYRIL 𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Follow My Support Channel
Wanna talk to me?👉 https://t.me/deecee_x 👈
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*2024-2099 David Cyril*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
