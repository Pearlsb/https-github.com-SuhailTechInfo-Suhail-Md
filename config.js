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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_46_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1QjFCSHM2ZUVwdG1mbGl5Sndad1M1VG0zcXR1MWcxWmliK3BRSUJRWnNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5MDMwMjE3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODk4OTUxM0JCOTNBNTUwOTVCQURCNUVGQzZGQzlBQjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2Njk4Nzk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTkwMzAyMTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMkJFNUYzQURERkNEQjcyNTJBQjgzQjAxOTE5RTVGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2OTg3OTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiandhRk51YjJTRDZJcDBBcll5ai10UVwiLFxuICBcInBob25lSWRcIjogXCJkMTVlM2VkYy02NTY5LTQyMmMtODdmMy00YmMzYzhmMzkxZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxMDYsXG4gICAgICA0OSxcbiAgICAgIDI0MSxcbiAgICAgIDY3LFxuICAgICAgNjgsXG4gICAgICAyMzYsXG4gICAgICAyMDQsXG4gICAgICAxMzYsXG4gICAgICAyMzgsXG4gICAgICAxNDksXG4gICAgICA3MCxcbiAgICAgIDkzLFxuICAgICAgMTM1LFxuICAgICAgNjMsXG4gICAgICAyMzksXG4gICAgICAxNjUsXG4gICAgICAxMDMsXG4gICAgICAxMzUsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMTc3LFxuICAgICAgMTE1LFxuICAgICAgMTQzLFxuICAgICAgNCxcbiAgICAgIDQ2LFxuICAgICAgMTc5LFxuICAgICAgMjcsXG4gICAgICAxNjksXG4gICAgICAxMDIsXG4gICAgICA0OCxcbiAgICAgIDE3OCxcbiAgICAgIDExMCxcbiAgICAgIDE3OCxcbiAgICAgIDIzMyxcbiAgICAgIDExNCxcbiAgICAgIDY3LFxuICAgICAgMTI4LFxuICAgICAgMTI0LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWU4zUTVTRzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5MDMwMjE3NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkkgaGF0ZSBsb3ZlXCIsXG4gICAgXCJsaWRcIjogXCIxNjA2NTM1NzA0NzQyMTk6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJRbmM0REVLajl5cklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4L3cySFcwN1ZKeWUzMWZBZkNmU0ZDWnNLZTRMUHZ5d1h0aGJ0ZGJaWXljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhuSXV2NnFHM3B4M2FFYmFnbDlxZW5JWEZJZUNzbTFyckdNbWp3N1pvMHAyNnZEOGs3SGNaL0VTMEU5Q05XRkVQczd0WFZvaGVBS1ptTmlPT1FoN0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5yUk5vWnVpenFETUhRZklOckQyT2dXeVZ1T05jNTE5OGFycDVDZ285VTBISVM5R0VZQkliNmNJb2hjS0xHeDVQL1JheVI4RytOeFh4a3MxYXlpTkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5MDMwMjE3NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY5ODc5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU84elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzh6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwickZuWDJBaHZSeGZjMUZ1YTRDU1NrSk92ZkRBQXNSNDVtSm9reWxteFRFbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NjkzNjk2NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjYwNzU0ODU2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
