const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/SR KHOKHAR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/•❈•💔s̷a̷l̷e̷e̷m̷💔•❈•ᵏʰᵒᵏʰᵃʳ❣️/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "•❈•💔s̷a̷l̷e̷e̷m̷💔•❈•" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923043649687";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_47_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN3U1alVOL1pEeFRyMVZBQVg4SWhMbTErV0lPSEUzdFJSL1Z2UXFTcU9ZTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDM2NDk2ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRDc2NkJDNzhEOTdDQkM5MEMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM3ODA1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3bG10dlVVUlNLbW1fNkxFVzF0ejVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3YmU0Y2UxLTEyMjMtNDUyMy1iZTkwLTllZWYyMWViYTYyMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxNDAsXG4gICAgICAxNTksXG4gICAgICA3NyxcbiAgICAgIDI0NixcbiAgICAgIDE5OCxcbiAgICAgIDE2OCxcbiAgICAgIDIzLFxuICAgICAgMTY0LFxuICAgICAgMTUyLFxuICAgICAgMTI1LFxuICAgICAgMTM4LFxuICAgICAgMjcsXG4gICAgICAxOTksXG4gICAgICAxNDYsXG4gICAgICA4MixcbiAgICAgIDEzLFxuICAgICAgODksXG4gICAgICAxMDQsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAxMTgsXG4gICAgICAxMixcbiAgICAgIDM4LFxuICAgICAgMjQ1LFxuICAgICAgMjIzLFxuICAgICAgMjAsXG4gICAgICAyMTAsXG4gICAgICAxMzAsXG4gICAgICA3MyxcbiAgICAgIDMwLFxuICAgICAgMTQ2LFxuICAgICAgNjEsXG4gICAgICA4NyxcbiAgICAgIDY0LFxuICAgICAgMTE0LFxuICAgICAgMTAxLFxuICAgICAgMjUzLFxuICAgICAgMjA5LFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFQUVEzOFY4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDM2NDk2ODc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MTE0NzQ1ODE3OTIwODoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLigKLinYjigKLwn5KUc8y3Ycy3bMy3Zcy3Zcy3bcy38J+SlOKAouKdiOKAouG1j8qw4bWS4bWPyrDhtYPKs+Kdo++4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTRGdONE9FTHJGcTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3BCVXNIaFVMUWxkek1oRzJZWHlySHl2R0FrSW5veFBKRkpyb2J4c2tDQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4V1A1dlRicUVvY3BOaWx4b0Y5SjhaWUlvanNBTnRLbE1RanlEU0pGNjBOQ3k0MGJ5NzhiaFJBc2RncDZlMVBFUHE1UzBCTHRmZ3lvNVliTVREUklDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3QVptVTFaTFBEdXhlSmRCejhZWFBlTklOZ2dpR0tDMXBzQVphTksvQUduMlRyd2VKcUlQTkt1dGhraDFhMzIwMi9XaGRLUkNHQXZ6ZXZFVUJJbW5EZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDM2NDk2ODc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzc4MDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjlHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOOUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxcWsrZ0l0bHRVeWNJTkl4ei82d0pMZFhPY3V5TDk0dHZGQnhjVVJwRWM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5NTUyMjkwNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM3ODA0Njk5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SR KHOKHAR BOT",
  ownername:process.env.OWNER_NAME|| "•❈•💔s̷a̷l̷e̷e̷m̷💔•❈•",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SR KHOKHAR"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|SR KHOKHAR BOT| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
