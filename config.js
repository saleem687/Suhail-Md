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
global.DATABASE_URL = process.env.DATABASE_URL |https://chat.whatsapp.com/KiCBKTXpynh6hHeJvXDcxC| ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ •❈•💔s̷a̷l̷e̷e̷m̷💔•❈•ᵏʰᵒᵏʰᵃʳ❣️

global.devs = "923091221642" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923091221642";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "ture"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923091221642";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_13_23_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NixcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhdkVnNEROVkZPb1M5RFpvQUFCUm5rQkQ2N2NoVTNtV3ZGajVsNStHY0ZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIQkdZYV9HMVRvdWlSODJXaGJjT0ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhODYwN2RmLTNiNTktNDliOS05Y2FiLTY2YmE0ZjkyNjg4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDc4LFxuICAgICAgMTg3LFxuICAgICAgOTksXG4gICAgICAxODgsXG4gICAgICA1MSxcbiAgICAgIDEzNCxcbiAgICAgIDQwLFxuICAgICAgMjA3LFxuICAgICAgMTMwLFxuICAgICAgMTEzLFxuICAgICAgMTcwLFxuICAgICAgMjMyLFxuICAgICAgMTA0LFxuICAgICAgMzcsXG4gICAgICA2MyxcbiAgICAgIDIwOSxcbiAgICAgIDY0LFxuICAgICAgOTEsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTkzLFxuICAgICAgMjUxLFxuICAgICAgMTY3LFxuICAgICAgMTQ5LFxuICAgICAgMTYsXG4gICAgICAyMzMsXG4gICAgICAxODIsXG4gICAgICAyMzYsXG4gICAgICAyMzEsXG4gICAgICAzMCxcbiAgICAgIDc3LFxuICAgICAgMTMxLFxuICAgICAgMTQsXG4gICAgICA0MyxcbiAgICAgIDEwMCxcbiAgICAgIDI1MSxcbiAgICAgIDEyMSxcbiAgICAgIDEzNixcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUjNGNjZLUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDkxMjIxNjQyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYWxlZW0ga2hva2hhclwiLFxuICAgIFwibGlkXCI6IFwiMjA2NDg5NTYyMTUzMDM5OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENDdFp3SkVMeUo2N01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUcDRNN0ZsOVV3a1lKN0Qza3NUaHJGTnkxbGpXSVo5aGY4cjZLS1pLZWlnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjA3cDJUZkxKZzVPN3FFbjVVTE5HdHRXYzROaXRzQ1lqRnY4VWJoU3NIYk00TE5xN0l0cmhJZk4yWHpWYWZsOWtaOGR1TTVaNUR2RVZzK0pDYUxmd2lRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBVTDlwdTlhWjJHaXpsQ24wNHM4UlNkcXVKSW1NVjJYNHNzbVVPWG1xRkhlblA2dmVMa3FWZUdwN01ncjlycUJtZW10MTNlYVpIZ1VMSGw2eGJDaUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5MTIyMTY0Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzIxNzkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTSt4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNK3guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoYUx0V0lwRnV3OE9Odm44NmUyN2d0M09remNQdnVWamJWWXpyUTJLbHcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0NzU1MDgwODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzAwMjk2MzEyM1wifSIKfQ==|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU |.menu| "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ •❈•💔s̷a̷l̷e̷e̷m̷💔•❈•ᵏʰᵒᵏʰᵃʳ❣️』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
