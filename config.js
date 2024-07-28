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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743416283";





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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_40_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaZVZvcU95YjhMOVc1M1V4U2daT0hNNWNnQ0k4RFJxNExnZm9XcFhENlhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0MzQxNjI4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUM5OTkzRDRBQkQ2Njk2OTU2MTgwQ0NGQjI3NkQwOUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU2MDUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk4zNVZvUWo2U1NTdXFsY3VVdWJ6YlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTg5NTYxNjQtZGQ1Mi00ZGMyLWE1ZWQtOGNhM2IwOWJiNzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDEyNixcbiAgICAgIDE4NSxcbiAgICAgIDE2OCxcbiAgICAgIDEyOSxcbiAgICAgIDg2LFxuICAgICAgMTEyLFxuICAgICAgMzUsXG4gICAgICA3MSxcbiAgICAgIDExLFxuICAgICAgMTkyLFxuICAgICAgMjgsXG4gICAgICAxOCxcbiAgICAgIDE3MyxcbiAgICAgIDIwNCxcbiAgICAgIDE5MCxcbiAgICAgIDUxLFxuICAgICAgNDUsXG4gICAgICAzNixcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgOTQsXG4gICAgICAyNTAsXG4gICAgICAxNCxcbiAgICAgIDE0MCxcbiAgICAgIDE5MSxcbiAgICAgIDMwLFxuICAgICAgMTY4LFxuICAgICAgMjE4LFxuICAgICAgMTg0LFxuICAgICAgMTEzLFxuICAgICAgMjM4LFxuICAgICAgMjUsXG4gICAgICA2MCxcbiAgICAgIDIwMixcbiAgICAgIDIyMSxcbiAgICAgIDI0OSxcbiAgICAgIDE1MixcbiAgICAgIDExNCxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNUDg2VDVKS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQzNDE2MjgzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDkxNTY1ODk2MTA2NDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVDhnYWtGRUllSW1MVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInB3R3dackpMQjNmMWNzRmd5OTJtYTIzYis1RGlRajdKT25xYU5OZkFFUnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVJqTmdVeTh6OHV4cklUc054NmloVE0yaWdudkFmcVhDYWJoUnFQKzhnMHhQa0tva0VyNWRyN3o3Y3Y5QWJWd0YzUHByYlR3K3F0NVMrYWliQjZqRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaysrdUY0Q2l5K3kzbVZtSldwSUg2VzRXdnd5OUhLN2dVdVA0eU1ldnFHcEZPbkMyQUJTbkdINk9iRU9zQmtLcWgwRFdaQ29rUG9oZlU3c0RvaE51anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzNDE2MjgzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTU2MDQzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "☬♛◤*CALDEN*◥♛✑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_iAPI : process.env.KOYEB_API  || "false",

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
