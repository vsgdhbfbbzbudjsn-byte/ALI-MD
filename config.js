
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62V626jOBTHX2Xkr42mmKuJVGm5BpLmHkKT1X5wwBASbjEmlIz6CPs2+0L7JivSdqfSzHa6UvlkbDjn9z8+l28gL5KKjEgL+t9ASZMzZqRbsrYkoA/0OooIBT0QYoZBH9yMFg5Ltbr1+eN0hsqNcygtSMNjEpeXe+eYzAhbSlqMeO8OPPVAWe/SJHjH4CafXg5w7fgOl7n75Ph4ytFYNpyxQ5pNk9XbrWCPpppPD8EdeOos4oQmeWyVe5IRitMRaWc4oR/Db4eaRBdnWJMGzVUYwFG7mLHdfhk1FXfbuCO19ZxjEep88zH8k6z6xk27IiuNayrmPBDkOpV7ER1eEGlWHJ1G4uYewZ73jF8lcU5CNyQ5S1j74bjXNi2TsXURG8+TjdL3Knr283TOLSo9FxTNb9L5/rgxG0H8GHirLadm2gbBcqsIU0vPm3a4ueBqj24mioaRu50fBoGGmaC9BZ/R11w5/p+4N5Odv3eUNFqfOZn57eA0UMjYP17Sx6IsZN3nsHh7ny83cPMxfO88f5zOw/moXW/XjXk/Pc1kfr498edztLLxKZWkXaHM9N1+/B0fs5q+R2nHtTTYhMXWkA+DmSck+tLGbRMMB3576xmy5MJFfJxt0VKx0O1mGEjxzWBbQVlTvAEei1FzzubDfAEHJ9+VhHi310Jdu7sqOpLWDUEfPvUAJXFSMYpZUuTXPVXuARyelySghF3DCyaZiuyiXZ5HuVSc0T1F82bol97EW7CMWMrKOehJiFZQiu9AD5S0CEhVkdBJKlbQdkyqCsekAv3frzfViaYkKxgZJiHoAxWqnCoIMi8K6m/V12aPWYXL8mtOGOiBiBbZmIA+ozXpgesPOpJ129R1jtdEUeBFQ0e8jFTB5HQTQU3vJGbPTldJRiqGsxL0oSIpUJSgyD/1PofDEnUdIkuFHK+YKmeIOm+KhiqbIhRVU0G/4BA+i0O1DFHgLUvlLNtSIDSRZfCSAJHMaxyC3Psc0qdxQNnQRMM0eJ3XVcuACocEC4mCIatQ1HnhfQ6Z+ywOZGmWIBoi5ARbMUVLVqGsixYnChovCgr8BYfyWRyGbvKcbfKGbfOmphiItwzTEpAATckUoPILDvXpjx7IySN77nNddQqwB6KEVszL6zItcPjaBF8PcRAUdc6WbR4Y3YJQ0H+zTRhL8rjqlNU5psE+OROj0wH6EU4r8m9DIJSEr1pehpxRhF2fsh+s9UCVTNCxd4Z+iE0fwh/Dkz5niAAhJ0qyKHMSJ8Luy+6gB3LcGQPCly9f/v7rzy4wL8idh5AwnKRVF1G3vmTMta3Rbq4gbzDQ3FgzYg18l/jaWp9bl5rcuB562Hro3ogPixt1GEdGcoHlaLdTbSwed7eBqtlzbDV3PzEC+oCnnN467mE0T2L5fCld3Xg0p9wq2+twDSWKT3Bjtdwqq9e7QzDGFjnm5d4r6nsyubcex2tZ3h3IfbJOKsovfSOY31Rac9d5C8k5CchbZ9zU3Dl++XDJ63H5INGsbHn1xPuenO7SxXYvcNOHptSqKULSpDlReDhM6gjZK5KNQw4Nh0zAcYm9IV1Eh+HtZF2tRC1+bvrXoZO+DPvkpR0n19coIdfZ+XILv7zMZ/Au57in3hsbL9P4PyaaHm3OiT2z+fXMaAqXi87LjdMUlYqXGX+78Ovh4FaYzXVvsB+Dpy75yxSzqKAZ6AOch7S4pgot6i6J3Twq3nFmaLH7qjzFFdO+F8ZPak1Qn7+a0aJ0cLXvUjHaNMaoy/JWK8slw+y1zoDWPcYqBk//AHIEnSCyCgAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
