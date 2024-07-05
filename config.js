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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_09_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvam55Smpabnd6N0hvSnhwdDlEYWkyQXlnb2lmZFhnRlR5eFJ5TnlzWEpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDOVBWenQ0MlNzV2R6bHROaFlOYVB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE1OTU1ODllLTBiMjItNGEzMS04NzM2LTRhN2U1YzcyNmE2NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDQyLFxuICAgICAgMTU3LFxuICAgICAgNzgsXG4gICAgICAxODAsXG4gICAgICA3LFxuICAgICAgMTQzLFxuICAgICAgMTMxLFxuICAgICAgMjM2LFxuICAgICAgMjIsXG4gICAgICAyNTMsXG4gICAgICAxMTgsXG4gICAgICAxNTcsXG4gICAgICAxMCxcbiAgICAgIDU4LFxuICAgICAgMjI1LFxuICAgICAgOTcsXG4gICAgICAxMjQsXG4gICAgICAxMTEsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAzNCxcbiAgICAgIDcyLFxuICAgICAgMTM3LFxuICAgICAgMTU3LFxuICAgICAgMTc0LFxuICAgICAgMTU0LFxuICAgICAgMTcxLFxuICAgICAgMTQxLFxuICAgICAgMzgsXG4gICAgICA3MyxcbiAgICAgIDIxMCxcbiAgICAgIDEzNSxcbiAgICAgIDI5LFxuICAgICAgMCxcbiAgICAgIDIxNSxcbiAgICAgIDc2LFxuICAgICAgMTI1LFxuICAgICAgOCxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNE1CUDZUQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzc3ODczMTU4OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzQ5NTI0MzU4NTEyNzM6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9BbUFzUTRJeWZ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBWTNHcTdGY1JQTEMrUGFxTjRMWDMyY2hveEFkQlQyM0hCczhsb3cvd3pRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhueXZkT1FnMkM2OWYwZi9RVlFUanJaNHRKMmtjSGpORG1wVVJ2RVZNTWFic2krMEVqOVdCZDJIa2xKcG9CWDgzRlFRWm1XR1V1dnhBeWJ2ZzdGV0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRZUnlKRVRuT2VzM1AzM1lNM0F4RVZFUDRRb203V3Zrc0ViZ1U0ODZON3VjM09SVkN6OU1oS1Z0ZHdHazFQbTY4VU5jS2dOc2xDUUxNRzBUQk4vVGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc3Nzg3MzE1ODo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTc0MTc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
