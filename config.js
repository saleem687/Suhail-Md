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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/•❈•💔s̷a̷l̷e̷e̷m̷💔•❈•ᵏʰᵒᵏʰᵃʳ❣️/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "•❈•💔s̷a̷l̷e̷e̷m̷💔•❈•ᵏʰᵒᵏʰᵃʳ❣️" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923043649687";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTE1kT2o5OHg3QjdyTjJ4blBtcnJDc0tnK0RlQldTOWx3U01oaG56eGhYND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDM2NDk2ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBREQyMTFFRDg1MzcyNDAxNkVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM0NDY0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDS2p6ZW5ZS1FCbTFnRC1jOG9lWC1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1MGM0NDJjLTE5MDQtNGMzMS05MjIwLTAwMTUyMTQ0Y2NkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDE2NixcbiAgICAgIDQyLFxuICAgICAgMTUyLFxuICAgICAgOSxcbiAgICAgIDk3LFxuICAgICAgMTAxLFxuICAgICAgMTIzLFxuICAgICAgMjUxLFxuICAgICAgOTcsXG4gICAgICAyMDgsXG4gICAgICAxMixcbiAgICAgIDYzLFxuICAgICAgMjUyLFxuICAgICAgMjUsXG4gICAgICAxMTAsXG4gICAgICA2NSxcbiAgICAgIDIwMSxcbiAgICAgIDI1NSxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjIzLFxuICAgICAgMixcbiAgICAgIDE4OCxcbiAgICAgIDExNyxcbiAgICAgIDExLFxuICAgICAgMzksXG4gICAgICA1NixcbiAgICAgIDEzMCxcbiAgICAgIDE5NSxcbiAgICAgIDIwMCxcbiAgICAgIDI4LFxuICAgICAgMzAsXG4gICAgICAxNDQsXG4gICAgICAxNDMsXG4gICAgICAxNjMsXG4gICAgICAxMzcsXG4gICAgICAxMTYsXG4gICAgICA1OCxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1NjlaSDNIOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDQzNjQ5Njg3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MTE0NzQ1ODE3OTIwODo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKAouKdiOKAovCfkpRzzLdhzLdszLdlzLdlzLdtzLfwn5KU4oCi4p2I4oCi4bWPyrDhtZLhtY/KsOG1g8qz4p2j77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJ2aE1JRUVMekFxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrcEJVc0hoVUxRbGR6TWhHMllYeXJIeXZHQWtJbm94UEpGSnJvYnhza0NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRwQUJuaXFKK1ZhdExOMkNNUXNYQ3hXTklvSjhYemxzREo3L0N3d3FrQTdvYXRITzNRbE52M09MQmxESml2YVFXMkw4cFo2V0JIQjhWNXZjNEpPSkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVoVHpKRVF2UzJESDFuZkJ1V2lUc3lDbC9ZWUpkcEdYZEZrZ3BuMEpZYU9BYjQ4YTh0eG9GVG9HTjlBakpBeUs2SDZpSEpmSEpFSE1UcWwzUGtKUkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA0MzY0OTY4Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0NDYzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR1NVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHU1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwic1QwL2FBRWFMQWFOc0FtTUlGTGx3RHNaUVVQa0R0RXdFWm92Zy9xUjJHQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjEyMjI1NTMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNDQ2NDA3NDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SR KHOKHAR",
  ownername:process.env.OWNER_NAME|| "•❈•💔s̷a̷l̷e̷e̷m̷💔•❈•ᵏʰᵒᵏʰᵃʳ❣️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
