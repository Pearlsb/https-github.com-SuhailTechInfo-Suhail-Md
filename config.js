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


global.devs = "263717467274" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_58_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGdWM0hDS1Q4LzFvdCt3MDRwR3BPY0hGZUQ0NzFhRVpKS0h0cE9MNzViRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicDAyZlRSTnVTemFlcHFNUklfVHhGQVwiLFxuICBcInBob25lSWRcIjogXCJjZmM2MDliMS1iODkxLTRjMDYtYjQ1MC0wNDJlYzAyYzdlNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNTYsXG4gICAgICAxMTAsXG4gICAgICA4MixcbiAgICAgIDE0LFxuICAgICAgNDQsXG4gICAgICAxNzAsXG4gICAgICAxMzAsXG4gICAgICAxNzQsXG4gICAgICAxNzQsXG4gICAgICAxNjQsXG4gICAgICA5NyxcbiAgICAgIDExOSxcbiAgICAgIDExNixcbiAgICAgIDE5OCxcbiAgICAgIDEzNSxcbiAgICAgIDg2LFxuICAgICAgNzMsXG4gICAgICA4MSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMyxcbiAgICAgIDIwLFxuICAgICAgMzksXG4gICAgICAxMTIsXG4gICAgICAxNzUsXG4gICAgICAxOTgsXG4gICAgICAzLFxuICAgICAgNDksXG4gICAgICAyMjYsXG4gICAgICAyMTIsXG4gICAgICAyMDgsXG4gICAgICAyNDYsXG4gICAgICAxMTAsXG4gICAgICAxMDEsXG4gICAgICAyNDAsXG4gICAgICAxMTAsXG4gICAgICAxMTUsXG4gICAgICAzNCxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSM0VLS0pUR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NDY3Mjc0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ0YWt1ZHp3YWxld2FudGVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMTMwMDQ5NjE5NTg6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL3dyaEFRN2VTa3NnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5sQUhFM3J1MjJzOGlXQmJFMFVpSGtRZkR5S0ZrR0dTaHhIck1lc0NLSE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib3d6QzJKalMxYkUzRXhkTC9zTWpsYXJPcmtuc0JBeW1oTHd1eWhGbFl2TGFpTFV2amoyeTk3VFh0WlZObmxELzFQUEp6MHVWVTlIV3Ryclo4alY3QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0VyR2kxYTBxbTdSSlZYd3RnRWJXcWhkNitmdnZnZWxxTTkxQVJ5QXBxaDlMS3JPelB6MjVYOHlhRThnaTlNYjBnaEVnOGZXbERZT3Bab3ZyY0o3aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NDY3Mjc0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYwNzMwNzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Takudzwalewantech",
  ownername:process.env.OWNER_NAME|| "Smart driller",


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
