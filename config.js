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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_51_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2U1poSU4rS0Zyc3FlRkdRWTBVd3lKOHlwL1hZcS8wNkJod0NPcFJjaTBjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMTc3Nzg3MzE1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjc1NjNGNjUzQjhDRjkwMUIxMUJGN0VFQkM1ODg0NzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjY2NzEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzc3ODczMTU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOTM4NURBOTk1OTNBMzY3MUZDRUI4NzM0NDQ5NjcyQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNjY3MTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTnRoa3daLWZUcm05aUZpQ1VXajJaQVwiLFxuICBcInBob25lSWRcIjogXCIyZWY5N2UxNy04NTUwLTQ3MWMtYmZhNC03M2VhMjBkZjc4NDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTIsXG4gICAgICAxOTcsXG4gICAgICAyNCxcbiAgICAgIDEyNixcbiAgICAgIDIwMyxcbiAgICAgIDIwNyxcbiAgICAgIDIsXG4gICAgICA2OSxcbiAgICAgIDIxNCxcbiAgICAgIDU1LFxuICAgICAgMTIzLFxuICAgICAgMSxcbiAgICAgIDIwOCxcbiAgICAgIDEyNixcbiAgICAgIDIxNixcbiAgICAgIDc4LFxuICAgICAgNDMsXG4gICAgICAyNDIsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxODEsXG4gICAgICA4OSxcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgMjI0LFxuICAgICAgMjU1LFxuICAgICAgMjQsXG4gICAgICAxNzgsXG4gICAgICAxNDEsXG4gICAgICAxMDQsXG4gICAgICAxMzUsXG4gICAgICAyNSxcbiAgICAgIDQxLFxuICAgICAgMjQ1LFxuICAgICAgNTcsXG4gICAgICAyNDIsXG4gICAgICAxMjEsXG4gICAgICA4NCxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlEWjdORU1WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3Nzc4NzMxNTg6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDk1MjQzNTg1MTI3Mzo0OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJdGFjaGlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVFM2OFlIRU0vZnBMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjMyOTVXVTdINCthSWZ2MzJoTWpiZlE1dklzS2djdS9GbjhBR0xaM0xpRkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEhWSmNrcU9qY2tXSzZSVUNWT3NJS1ZEd0lza0lFWFZDdzN3d09RWlRwcFdadC9xVkk5cW9LWjBtWHRYa0xQTE5MaC8zZE51RUg1WEYySitHUkg1REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1NibXd6bkFXR3ZiaEZvdUNCUjJsMkNtdzRPUU1WVmFIM29qZExWRnRHUnYwYU1KMFk1TGpIdXN4cTA5NHFWbHpkRmViU0VjMk16bTFTUmx2MkdGQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzc3ODczMTU4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2NjcwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxTb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFNvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWk12Y1BPMkFRcXpwaURTNlFoZWVMOXk0U1RrZjdwMktHTGlTQmdLS3UyST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDI3NjEyNTMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MEDMO",


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
