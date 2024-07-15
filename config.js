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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace("/254/,743416283") : "923184474176";




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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_37_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5dVdQWUhpS2E1UlNFU2laQk5rRlQ3UFpjK1F0NDNQeXVZOHYyVHFJUE04PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaZXVFanN0QVNxQ0hlVjhUZEhraGh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE0ZTgwZTc4LTMwZjQtNDJjMy05ZGI4LTA3MmJkMGVhZDFkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAzOSxcbiAgICAgIDEwNCxcbiAgICAgIDIxMSxcbiAgICAgIDc2LFxuICAgICAgMzAsXG4gICAgICAzLFxuICAgICAgOTMsXG4gICAgICAxMSxcbiAgICAgIDQ1LFxuICAgICAgMzYsXG4gICAgICAxNDYsXG4gICAgICA1LFxuICAgICAgMjIwLFxuICAgICAgMTQ5LFxuICAgICAgMjIsXG4gICAgICAxMDMsXG4gICAgICAxNjQsXG4gICAgICAyMTQsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDE2MCxcbiAgICAgIDIyLFxuICAgICAgNyxcbiAgICAgIDU4LFxuICAgICAgMjM1LFxuICAgICAgMTMwLFxuICAgICAgMTMxLFxuICAgICAgMTY4LFxuICAgICAgMTEwLFxuICAgICAgMjI3LFxuICAgICAgMzcsXG4gICAgICAxMTgsXG4gICAgICA3MSxcbiAgICAgIDI1MyxcbiAgICAgIDI3LFxuICAgICAgNTAsXG4gICAgICA4OSxcbiAgICAgIDIwMCxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFCNjVORDJIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDM0MTYyODM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5MTU2NTg5NjEwNjQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKamZuSndCRUlTdDFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRVN3VaRldZT3ZyYmZWdUJtTmNwM1VwZkd1dXFsTU01NzAreU1CUEpEalE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkRDZkZoR1VsbTNyN1VsbEh3Zmd2SjVMTjRzODBhUzZ2U2RKcHlEcm9jYWpqRXFla3lTMGx2dzh0UTR2UGhLTmtvUzdxbFgzazA5ZTRMaW0zWUpYRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3JlaWI4UWJOTEtsMlRpVFF6MkoraWpydDRWNzRSTW5Qd283RHB1TWpnTDBsRW9lZE5jcDBHUEV1b3g0eTU0MDFscm95ZFpLREJhaitWYjcvRkVPaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzNDE2MjgzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDc5NDMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFVkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYNWpybW9ybm4zWUlGSXFkam9zVktFQldyZWlUVm5kcUdaczFnTFZ6SHdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyNzYyNjY0NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Cyril",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
