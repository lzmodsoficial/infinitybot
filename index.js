//=====================================\\
const {
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  DisconectReason,
  MessageTypeProto,
    WAConnection,
  WALocationMessage,
  ReconnectMode,
  WAContextInfo,
  proto,
  ProxyAgent,
  waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent, 
    WAMessage, 
    BaileysError, 
    WA_MESSAGE_STATUS_TYPE, 
    MediaConnInfo, 
    URL_REGEX, 
    WAUrlInfo, 
    WA_DEFAULT_EPHEMERAL, 
    WAMediaUpload,
  mentionedJid,
  processTime,
  Browser,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
  relayWAMessage,
    GroupSettingChange
  } = require('@adiwajshing/baileys')
  //=======================================\\
  const { color, bgcolor } = require('./~ Infinity Datab ~/funções/color')
  const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./~ Infinity Datab ~/funções/functions')
  const { fetchJson, fetchText } = require('./~ Infinity Datab ~/funções/fetcher')
  const { recognize } = require('./~ Infinity Datab ~/funções/ocr')
  const fs = require('fs');
  const os = require('os');
  const chalk = require('chalk');
  const yts = require('yt-search');
  const crypto = require('crypto');
  const util = require('util');
  const axios = require('axios');
  const encodeUrl = require('encodeurl');
  const linkfy = require('linkifyjs');
  const request = require('request');
  const cheerio = require('cheerio');
  const imgbb = require('imgbb-uploader');
  const googleImage = require('g-i-s');
  const googleIt = require('google-it');
  const imageToBase64 = require('image-to-base64');
  const moment = require('moment-timezone')
  const { exec } = require('child_process')
  const fetch = require('node-fetch')
  const ffmpeg = require('fluent-ffmpeg')
  const speed = require('performance-now');
  const { removeBackgroundFromImageFile } = require('remove.bg')
  const lolis = require('lolis.life')
  const loli = new lolis()
  const welkom = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/welkom.json'))
  const nsfw = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/nsfw.json'))
  const samih = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/simi.json'))
  const simple = require('./~ Infinity Datab ~/funções/simple.js');
  blocked = []
  
  //=======================================\\
  //      ❗ ❗ ❗ ❗  //Antis\\   ❗ ❗ ❗ ❗      \\
  //=========================================\\
  
  const antifake = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/antis/antifake.json'))
  
  const antilink = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/antis/antilink.json'))

  const anticall = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/antis/anticall.json'));

  const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false
  
  //====================================\\
   //❗ ❗ ❗ ❗  //Ping\\   ❗ ❗ ❗ ❗\\
  //====================================\\
  
  function kyun(seconds){
    function pad(s){
    return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);
    return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
    }
  
  //====================================\\
  //❗ ❗ ❗ //Conexao Do Bot \\ ❗ ❗ ❗\\
  //====================================\\
  
  async function starts() {
  const lz = new WAConnection()
  lz.logger.level = 'warn'
  console.log(banner.string)
  lz.on('qr', () => {
  console.log(color('[','white'), color('!','red'), color(']','white'), color('Escaneie o Qr Code Acima Para Iniciar o Bot'))
  })
  
  fs.existsSync('./qrcode.json') && lz.loadAuthInfo('./qrcode.json')
  lz.on('connecting', () => {
  start('2', 'Conectando Aguarde...')
  })
  lz.on('open', () => {
  success('2', '🎃 Conectado Com Sucesso ✡️')
  console.log(chalk.red(""), chalk.keyword("white")("( Sistema )"), chalk.green("Infinity Bot Versao [5.0]"))
  console.log(chalk.red(""), chalk.keyword("white")("( Sistema )"), chalk.green("Versao [6] A Caminho :)"))
  console.log(chalk.red(""), chalk.keyword("orange")("( ALERT )"), chalk.red("Qualquer Bug Me Chama No Pv: +55 (62) 8494-4742 Para Ser Resolvido."))
  })
  
  await lz.connect({
    timeoutMs: 30 * 1000
    })
    
    fs.writeFileSync('./qrcode.json', JSON.stringify(lz.base64EncodedAuthInfo(), null, '\t'))
    lz.on('close', () => {
    rc = 'QUE INTERNET DA XUXA EM AMIGO KKKK, A CONEXÃO CAIU...'
    console.log(color(rc,'red'))
    })
  
  //====================================\\
  //  ❗ ❗ ❗  //ANTI FAKE\\  ❗ ❗ ❗  \\
  //===================================\\ 
  
  lz.on('group-participants-update', async (anu) => {
  if(antifake.includes(anu.jid)) {
  const mdata = await lz.groupMetadata(anu.jid)
  if (anu.action == 'add'){
  num = anu.participants[0]
  if(!num.split('@')[0].startsWith(55)) {
  lz.sendMessage(mdata.id, ' ⛹️⛹️numero fake aq nao!👋🏌️', MessageType.text)
  setTimeout(async function () {
  lz.groupRemove(mdata.id, [num])
  }, 1000)
      }
  }
  }
  
  
  //====================================\\
  // ❗ ❗ ❗  //Bem Vindo\\  ❗ ❗ ❗  \\
  //===================================\\ 
  
  if (!welkom.includes(anu.jid)) return
  try {
  const mdata = await lz.groupMetadata(anu.jid)
  console.log(anu)
  if (anu.action == 'add') {
  num = anu.participants[0]
  try {
  ppimg = await lz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
  } catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 *${mdata.subject}*\n\n𝐥𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐧𝐚𝐨 𝐬𝐞𝐫 𝐛𝐚𝐧𝐢𝐝𝐨❤️`
  let buff = await getBuffer(ppimg)
  lz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
  lz.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
  } else if (anu.action == 'remove') {
  num = anu.participants[0]
  try {
  ppimg = await lz.getProfilePicture(`${num.split('@')[0]}@c.us`)
  } catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `ඞ   。　    .    •
      •  @${num.split('@')[0]} was E j e c t e d
                 1 impostor restante   。　.
      　 　　。　　 　　　　ﾟ　　　.　      　　
  𝐁𝐨𝐢 𝐛𝐨𝐢 𝐛𝐨𝐢, 𝐛𝐨𝐢 𝐝𝐚 𝐜𝐚𝐫𝐚 𝐩𝐫𝐞𝐭𝐚 𝐪𝐮𝐞𝐦 𝐬𝐚𝐢𝐮 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐦𝐚𝐦𝐚 𝐚 𝐩𝐢𝐤𝐚 𝐝𝐨 𝐜𝐚𝐩𝐞𝐭𝐚😂👋`
          
  let buff = await getBuffer(ppimg)
  lz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
  }
  } catch (e) {
  console.log('Error : %s', color(e, 'red'))
  }
  })
  
  lz.on('CB:Blocklist', json => {
              if (blocked.length > 2) return
      for (let i of json[1].blocklist) {
      blocked.push(i.replace('c.us','s.whatsapp.net'))
      }
  })
  
  //====================================\\
  //❗ ❗ ❗  //Chat Update\\  ❗ ❗ ❗\\
  //===================================\\ 
  
  lz.on('chat-update', async (info) => {
      try {
      if (!info.hasNewMessage) return
      info = info.messages.all()[0]
      if (!info.message) return
      info.message = (Object.keys(info.message)[0] === 'ephemeralMessage') ? info.message.ephemeralMessage.message : info.message
      if (info.key && info.key.remoteJid == 'status@broadcast') return
      if (!info.message) return
      m = simple.smsg(lz, info)
      
      global.prefix
      
      global.blocked
      const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
      const content = JSON.stringify(info.message)
      const speed = require('performance-now');
      const from = info.key.remoteJid
      const type = Object.keys(info.message)[0]
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, contactsArray } = MessageType
      
      if(isAnticall){ 
        lz.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;  
        console.log('bloqueando o '+ callerId)
        await sleep(4000)
        lz.blockUser(callerId, 'add') 
          return
        });	
        }

  const { MsgsDeEspera } = require('./~ Infinity Datab ~/funções/wait.js');
  var aguarde = MsgsDeEspera[Math.floor(Math.random() * MsgsDeEspera.length)] 


  //====================================\\
  // ❗ ❗ ❗ ❗  //Msgs\\  ❗ ❗ ❗ ❗  \\
  //====================================\\
  
  enviar = {
  espere: `${aguarde}`,
  success: '✅ Esta Ai Mano :) ✅️',
  
  apenas: {
  grupos: '❰ ❌ Esse Comando So Pode Ser Usado Em Grupos Mano ❌ ❱',
  premium: '❰ ❌ Esse Comando So Pode Ser Usado Por Usuarios Premium Do Bot Mano ❌ ❱',
  dono: `❰ ❌ Esse Comando So Pode Ser Usado Pelo Meu Dono Mano❌ ❱`,
  
  bad: {
  AdmBot: '❰ ❌ So Posso Executar Esse Comando Se Eu For Adm mano ❌ ❱',
  adm: '❰ ❌ Ponha-se No Seu Lugar Membro Comum! Esse Comando e So Pra Adms ❌ ❱',
  link: '❰ ❌ Link inválido ❌ ❱',
  }
  }
  }
  
  //=======================================\\
  // ❗ ❗ ❗ ❗  //Exportaçoes\\  ❗ ❗ ❗ ❗\\
  //=========================================\\
  
  NotRG = '❰ ❌ Você Não Esta Registrado(a)! Use: .rg Para Se Registrar ❌ ❱'
  
  NotVIP = '❰ ❌ Apenas Usuarios Vips Podem Executar Esse Comando ❌ ❱'
  
  const dono = JSON.parse(fs.readFileSync('./dono/configs.json'))
  
  const logoslink = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/logos/logos.json'))
  
  const registro = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/rg.json'));
  
  const vip = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/vips.json'));
  
  const { PalavrasDoAnagrama } = require('./~ Infinity Datab ~/funções/anagrama.js');
  
  const prefix = dono.prefix
  
  NomeDoBot = dono.NomeDoBot
  
  NickDoDono = dono.NickDoDono
  
  NumeroDoDono = dono.NumeroDoDono

  banChats = dono.banChats
  
  logo = logoslink.logo
  
  const keylz = "lz"
  
  //=======================================\\
  // ❗ ❗ ❗  //Algumas Definiçoes\\  ❗ ❗ ❗   \\
  //=========================================\\
  
  //Botoes\\
  const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
  kma = gam1
  mhan = await lz.prepareMessage(from, kma, image, {quoted:selo})
  const buttonMessages = {
  imageMessage: mhan.message.imageMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 4
  }
  lz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
  }
  
  const sendBut = (id, text1, desc1, but = [], options = {}) => {
  const buttonMessage = {
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 1
  }
  lz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
  }
  
  const sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
      await lz.sendMessage(from, hasil, type, options).catch(e => {
      fetch(link).then((hasil) => {
      lz.sendMessage(from, hasil, type, options).catch(e => {
      lz.sendMessage(from, { url : link }, type, options).catch(e => {
      reply('[ ! ] Erro ao baixar mídia')
      console.log(e)
      })
      })
      })
      })
      }	
      

  
  //Grupos\\
  
  const botNumber = lz.user.jid
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? info.participant : info.key.remoteJid
  const groupMetadata = isGroup ? await lz.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const isWelkom = isGroup ? welkom.includes(from) : false
  const isNsfw = isGroup ? nsfw.includes(from) : false
  const isAntiFake = isGroup ? antifake.includes(from) : false
  const isSimi = isGroup ? samih.includes(from) : false
  
  const isAntiLink = isGroup ? antilink.includes(from) : false
  
  //VISUALIZAR AS MENSAGENS\\
  lz.chatRead(from)
  
  //Dono\\
  const ownerNumber = [`${NumeroDoDono}@s.whatsapp.net`]
  const isOwner = ownerNumber.includes(sender)
  
  //VIP\\
  const isVIP = vip.includes(sender)
  
  //Registro\\
  const isRG = registro.includes(sender)
  
  //Outras\\
  global.prefix
  body = (type === 'conversation' && info.message.conversation.startsWith(prefix)) ? info.message.conversation : (type == 'imageMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'videoMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'extendedTextMessage') && info.message[type].text.startsWith(prefix) ? info.message[type].text : (type == 'listResponseMessage') && info.message[type].singleSelectReply.selectedRowId ? info.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && info.message[type].selectedButtonId ? info.message[type].selectedButtonId : info.message[type].selectedButtonId && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""
  bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''
  budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
  
  button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
  button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
  listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''
  
  const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
  const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
  
  
  
  const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const q = args.join(" ")
  const isCmd = body.startsWith(prefix)

  //=======================================\\
// ❗ ❗ ❗ ❗  //perfil (sistemas)\\  ❗ ❗ ❗ ❗\\
//=========================================\\

//=== nivel gado ===\\
const niveis = ['1','2','3','4','5','6','7','8','9']
const niveis2 = ['2','3','4','5','6','7','8','9','10'] 
const nivel = niveis[Math.floor(Math.random() * (niveis.length))]
const gado = niveis2[Math.floor(Math.random() * (niveis2.length))] 

//=== nivel gay ===\\
const nv = ['1','2','3','4','5','6','7','8','9']
const nv2 = ['2','3','4','5','6','7','8','9','10'] 
const lgb = nv[Math.floor(Math.random() * (nv.length))]
const t = nv2[Math.floor(Math.random() * (nv2.length))] 

//=== nivel autista  ===\\
const nvl = ['1','2','3','4','5','6','7','8','9']
const nvl2 = ['2','3','4','5','6','7','8','9','10'] 
const au = nvl[Math.floor(Math.random() * (nvl.length))]
const tista = nvl2[Math.floor(Math.random() * (nvl2.length))] 

//=== nivel comunista  ===\\
const nvv = ['1','2','3','4','5','6','7','8','9']
const nvv2 = ['2','3','4','5','6','7','8','9','10'] 
const comu = nvv[Math.floor(Math.random() * (nvv.length))]
const nista = nvv2[Math.floor(Math.random() * (nvv2.length))] 

//=== nivel doido(a)  ===\\
const n = ['1','2','3','4','5','6','7','8','9']
const n2 = ['2','3','4','5','6','7','8','9','10'] 
const lou = n[Math.floor(Math.random() * (n.length))]
const cura = n2[Math.floor(Math.random() * (n2.length))] 

//=== conselho ===\\
const lzin = [
"Viva Hoje Porque Amanha Tem Aula ksksksksks",
"o Bglh e Comer Um Travecao",
"sla kk",
"nao sei ;-;",
"seu cu piscar meu pau asender"
] 
const conselho = lzin[Math.floor(Math.random() * (lzin.length))]

//=== cargo ===\\
const isCargoGP = `${isGroupAdmins ? 'Ademir Supremo 😎' : 'Membro Comum 😟'}`

const isVipBot = `${isVIP ? '✓' : '✕'}`
  
  //=======================================\\
  //     ❗ ❗ ❗  //Consts Menus\\  ❗ ❗ ❗     \\
  //=========================================\\
  
  const { menuprincipal } = require('./menus/menu.js');
  
  const { menuvip } = require('./menus/menuvip.js');
  
  const { menugrupos } = require('./menus/menugrupos.js');
          
  const { gitdobot } = require('./dono/gitdobot.js');
  
  //=======================================\\
  const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
  }
  const math = (teks) => {
    return Math.floor(teks)
    }
  const reply = (teks) => {
  lz.sendMessage(from, teks, text, {quoted: selo2})
  }
  const sendMess = (hehe, teks) => {
  lz.sendMessage(hehe, teks, text)
  }
  const mentions = (teks, memberr, id) => {
  (id == null || id == undefined || id == false) ? lz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : lz.sendMessage(from, teks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": memberr}})
  }
  //=======================================\\
  
  colors = ['red','white','black','blue','yellow','green']
  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
  
  let pushname = lz.contacts[from] != undefined ? lz.contacts[from].vname || lz.contacts[from].notify : undefined
  if (pushname != undefined) { } else { pushname = sender.split('@')[0]}
  
  // Selos [Verificados] \\
  
  const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${NomeDoBot}`,"title": "hmm" }}}
  
  const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LZ MODS,;;;\nFN:LZ MODS,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./~ Infinity Datab ~/logos/logo.jpg`), thumbnail:fs.readFileSync(`./~ Infinity Datab ~/logos/logo.jpg`),sendEphemeral: true}}}
  
  //COMANDOS\\
  if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mComando\x1b[1;37m]', color(prefix + command), 'Do Lek', color(pushname), 'args :', color(args.length))
  if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mComando\x1b[1;37m]', color(prefix + command), 'Do Lek', color(pushname), color(sender.split('@')[0]), 'No Grupo', color(groupName), 'args :', color(args.length))
  
  // A n a g r a m a \\
  
  if(isGroup && fs.existsSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`)){
  let anagrama = JSON.parse(fs.readFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`))
  if(budy.slice(0,4).toUpperCase() == anagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != anagrama.original) return reply('QUASE LA! TA PERTO')
  if(budy.toUpperCase() == anagrama.original) { lz.sendMessage(from, `
  Parabens ${pushname}
  Você Ganhou o Anagrama!
  `, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`)		
  reply("Iniciando o Proximo Em 5 segundos")
          setTimeout(async() => {
  fs.writeFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`, `${JSON.stringify(PalavrasDoAnagrama[Math.floor(Math.random() * PalavrasDoAnagrama.length)])}`)
  let dataanag = JSON.parse(fs.readFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`))
  lz.sendMessage(from, `
  ╔┅═┅══⟮⛓️⟯══┅═┅═᳀
  ║☢️ Descubra a Palavra
  ║
  ║➤️ Palavra:「 ${dataanag.embaralhada} 」
  ║
  ║➤️ Dica:「 ${dataanag.dica} 」
  ║
  ╚┅═┅══⟮🌟️⟯══┅═┅═᳀
  `, MessageType.text) 
  }, 5000)
  }}
  
  if(isAntiLink) { 
    if(!isBotGroupAdmins) return reply('cade meu adm? assim n consigo remover os lek')
    if(budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com" ) || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
    linkgpp = await lz.groupInviteCode(from)
    if(budy.match(`${linkgpp}`)) return reply('Link detectado! porem foi averiguado que eo link do nosso grupo entao o ban sera anulado ')  
    if (!isGroup) return
    if (isGroupAdmins) return reply(`link detectado! porem foi averiguado que voce e adm entao o ban sera anulado`)
    lz.updatePresence(from, Presence.composing)
    var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
    setTimeout( () => {
    }, 1100)
    setTimeout( () => {
    lz.groupRemove(from, [Kic]).catch((e) => {reply(`ERRO ${e}`)}) 
    }, 1000)
    }
    }
  
  var _0x3355fa=_0x2af2;(function(_0x1064ce,_0x5c7fa6){var _0x59842e=_0x2af2,_0x535efb=_0x1064ce();while(!![]){try{var _0x379353=parseInt(_0x59842e(0x193))/0x1*(-parseInt(_0x59842e(0x18f))/0x2)+-parseInt(_0x59842e(0x191))/0x3+parseInt(_0x59842e(0x195))/0x4*(parseInt(_0x59842e(0x18e))/0x5)+parseInt(_0x59842e(0x192))/0x6*(-parseInt(_0x59842e(0x199))/0x7)+parseInt(_0x59842e(0x196))/0x8*(parseInt(_0x59842e(0x197))/0x9)+-parseInt(_0x59842e(0x198))/0xa+parseInt(_0x59842e(0x194))/0xb*(parseInt(_0x59842e(0x18d))/0xc);if(_0x379353===_0x5c7fa6)break;else _0x535efb['push'](_0x535efb['shift']());}catch(_0x440c01){_0x535efb['push'](_0x535efb['shift']());}}}(_0x5da1,0xf132a),ExApiKey=_0x3355fa(0x190));function _0x2af2(_0x20f9fd,_0x4296c4){var _0x5da189=_0x5da1();return _0x2af2=function(_0x2af25c,_0x5c4b49){_0x2af25c=_0x2af25c-0x18d;var _0x2daf5b=_0x5da189[_0x2af25c];return _0x2daf5b;},_0x2af2(_0x20f9fd,_0x4296c4);}function _0x5da1(){var _0x144299=['6GWLrRc','ale652','5749674sTYnjh','642zmzPkd','325177ipEJyU','781JWvtiw','2940nzHxcB','10888LEpKoC','3033TQmOTN','17492330niIbBI','120127cGoAtb','1136676bhrPeo','1915eCCFxB'];_0x5da1=function(){return _0x144299;};return _0x5da1();}
  
  const sendMenu = async(id, but = [], options = {}) => {
  kma = fs.readFileSync('./~ Infinity Datab ~/logos/inf.jpg')  
  mhan = await lz.prepareMessage(from, kma, image, {quoted:selo})
  const buttonMessages = {
  imageMessage: mhan.message.imageMessage,
  contentText: menuprincipal(prefix, pushname, hora, data, NomeDoBot, NickDoDono, NumeroDoDono),
  footerText: `${NomeDoBot}`,
  buttons: but,
  headerType: 4
  }
  lz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
  }
  
  
  switch(command) {
  
  //=======================================\\
  // ❗ ❗ ❗  //Comandos Com Prefixo\\  ❗ ❗ ❗ \\
  //=========================================\\

case 'setprefix':
case 'prefix':
case 'p':
if (!isOwner) return reply(`apenas pro meu dono lindo`)
if (args.length < 1) return
prefixx = q
dono.prefix = prefixx
fs.writeFileSync('./dono/configs.json', JSON.stringify(dono, null, '\t'))
await sleep(2000)
reply(`Alterado Com Sucesso! Prefixo Novo: ${prefixx}`)
break
  
  // M e n u s \\
  
  case 'comandos':
  case 'help':
  case 'menu':
const audiomenuu = fs.readFileSync('./~ Infinity Datab ~/audios/audiodomenu.mp3')  
await lz.sendMessage(from, audiomenuu, audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
  if (!isRG) return reply(`${NotRG}`)
  let fotomenu = fs.readFileSync('./~ Infinity Datab ~/logos/inf.jpg')  
  
  sendMenu(from,
  [
              {              
                buttonId: `.menulist`,
                buttonText: {
                  displayText:  `💠 Lista De Todos Menus 💠`,
                },
                type: 1
              },
            ]);
  break
      
  case 'menuu':
const audiomenu2 = fs.readFileSync('./~ Infinity Datab ~/audios/audiodomenu.mp3')  
await lz.sendMessage(from, audiomenu2, audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
  if (!isRG) return reply(`${NotRG}`)
  let ft = fs.readFileSync('./~ Infinity Datab ~/logos/logo.jpg')  
  await lz.sendMessage(from, ft, image, {quoted: selo, caption: menuprincipal(prefix, pushname, hora, data, NomeDoBot, NickDoDono, NumeroDoDono)})
  break
  
  case 'menulist':
  let submenu = lz.prepareMessageFromContent(from,{
    "listMessage": {
              "title": `⚡ᎷᎬΝႮՏ ᏆΝҒᏆΝᏆͲᎽ ᏴϴͲ⚡`,
              "description": `🌟 Total Menus: 4 🌟`,
              "buttonText": "Clique Para Ver",
              "listType": "SINGLE_SELECT",
              "sections": [
                {
                  "rows": [
                    {
                      "title": '🌴 Menu Principal 🌴',
                      "rowId": `${prefix}menuuu`
                    },
                    {
                      "title": '🎮 Menu Grupos 🎮',
                      "rowId": `${prefix}menugrupos`
                    },
                      {
                      "title": '👑 Menu Vip 👑',
                      "rowId": `${prefix}menuvip`
                      }
                  ]
                }
              ]                    
            }
  }, {quoted: selo, contextInfo: info})
  lz.relayWAMessage(submenu)
  break
  
  case 'menuvip':
  case 'vipmenu':
  if (!isRG) return reply(`${NotRG}`)
  let fotomenuvip = fs.readFileSync('./~ Infinity Datab ~/logos/inf.jpg')  
  await lz.sendMessage(from, fotomenuvip, image, {quoted: selo, caption: menuvip(prefix, pushname, hora, data, NomeDoBot, NickDoDono, NumeroDoDono)})
  break
  
  case 'menugrupos':
  case 'menugrupo':
  if (!isRG) return reply(`${NotRG}`)
  let fotomenugrupos = fs.readFileSync('./~ Infinity Datab ~/logos/inf.jpg')  
  await lz.sendMessage(from, fotomenugrupos, image, {quoted: selo, caption: menugrupos(prefix, pushname, hora, data, NomeDoBot, NickDoDono, NumeroDoDono)})
  break
          
  case 'git':
  case 'gitdobot':
  if (!isRG) return reply(`${NotRG}`)
  const audiomenu = fs.readFileSync('./~ Infinity Datab ~/audios/audiodomenu.mp3')  
  await lz.sendMessage(from, audiomenu, audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
  let fotogt = fs.readFileSync('./~ Infinity Datab ~/logos/logo.jpg')  
  await lz.sendMessage(from, fotogt, image, {quoted: selo2, caption: gitdobot(prefix)})
  break
  
  case 'lzmodsapi':
  case 'lzapi':
  reply("https://lzmods-api.xyz/")
  break
  
  case 'rg':
  case 'registro':  
  case 'registrar':  
  sendBut(from,`
  💎 Para Se Registrar Clique No Botão Abaixo 💎`,`${NomeDoBot}`,
  [
              {              
                buttonId: `.registrarr`,
                buttonText: {
                  displayText:  `📌 ᎡᎬᏀᏆՏͲᎡᎪᎡ 📌`,
                },
                type: 1
              },
            ]);
  break
  
  case 'registrarr':  
  registro.push(`${sender}`)
  fs.writeFileSync('./~ Infinity Datab ~/funções/rg.json', JSON.stringify(registro))
  sendBut(from,`
  ☑️ Usuário Registrado Com Sucesso ☑️
  
  Espero Que Goste Do Bot :)`,`${NomeDoBot}`,
  [
              {              
                buttonId: `.menuu`,
                buttonText: {
                  displayText:  `💠 ᎷᎬΝႮ 💠`,
                },
                type: 1
              },
            ]);
  break
  
  case 'servip':
  case 'vipme':  
  if (!isOwner) return reply('apenas para o dono')
  vip.push(`${NumeroDoDono}@s.whatsapp.net`)
  fs.writeFileSync('./~ Infinity Datab ~/funções/vips.json', JSON.stringify(vip))
  reply(`Ola ${pushname} Meu Dono Lindo 😘 Você Foi Adicionado a Lista De Usuários Vips Com Sucesso!`)
  break
  
  case 'addvip':
  case 'vip':
  if (!isGroup) return reply('apenas para grupos')
  if (!isOwner) return reply('apenas para o dono')
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  pru = '.\n'
  for (let _ of mentioned) {
  pru += `@${_.split('@')[0]}\n`
  }
  vip.push(`${mentioned}`)
  fs.writeFileSync('./~ Infinity Datab ~/funções/vips.json', JSON.stringify(vip))
  susp = `☢️ @${mentioned[0].split('@')[0]} foi adicionado(a) na lista de usuários vips com sucesso! ☢️`
  mentions(`${susp}`, mentioned, true)   
  tk = '│「 *Lista De Usuarios Vip* 」\n\n│'
  for (let V of vip) {
  tk += `│+  @${V.split('@')[0]}\n`
  }
  tk += `│+ Total : ${vip.length}\n╰───「 ${NomeDoBot} 」────`
  await lz.sendMessage(from, tk.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": vip}})
  break 
  
  case 'deletevip':
  case 'delvip':
  if (!isGroup) return reply('apenas para grupos')
  if (!isOwner) return reply('apenas para o dono')
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  pru = '.\n'
  for (let _ of mentioned) {
  pru += `@${_.split('@')[0]}\n`
  }
  vip.splice(`${mentioned}`, 1)
  fs.writeFileSync('./~ Infinity Datab ~/funções/vips.json', JSON.stringify(vip))
  susp = `✖ @${mentioned[0].split('@')[0]} foi removido da lista de usuários vip com sucesso! ✖`
  mentions(`${susp}`, mentioned, true)   
  tk = '│「 *Lista De Usuarios Vip* 」\n\n│'
  for (let V of vip) {
  tk += `│+  @${V.split('@')[0]}\n`
  }
  tk += `│+ Total : ${vip.length}\n╰───「 ${NomeDoBot} 」────`
  await lz.sendMessage(from, tk.trim(), extendedText, {quoted: selo, contextInfo: {"mentionedJid": vip}})
  break
  
  case 'listvip':
  case 'viplist':
  case 'vips':
  tk = '│「 *Lista De Usuarios Vip* 」\n\n│'
  for (let V of vip) {
  tk += `│+  @${V.split('@')[0]}\n`
  }
  tk += `│+ Total : ${vip.length}\n╰───「 ${NomeDoBot} 」────`
  await lz.sendMessage(from, tk.trim(), extendedText, {quoted: selo, contextInfo: {"mentionedJid": vip}})
  break
  
  case 'st':
  case 'st':
  case 'sticker':
  case 's':
  if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
  const media = await lz.downloadAndSaveMediaMessage(encmedia)
  rano = getRandom('.webp')
  reply(enviar.espere)
  await ffmpeg(`./${media}`)
  .input(media)
  .on('start', function (cmd) {
  console.log(`Started : ${cmd}`)
  })
  .on('error', function (err) {
  console.log(`Error : ${err}`)
  exec(`webpmux -set exif ${addMetadata('infinity','bot')} ${rano} -o ${rano}`, async (error) => {
  fs.unlinkSync(media)
  reply(enviar.stick)
  })
  })
  exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
  fs.unlinkSync(media)
  buffer = fs.readFileSync(rano)
  lz.sendMessage(from, buffer, sticker, {quoted: selo})
  fs.unlinkSync(rano)
  })
  } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
  const media = await lz.downloadAndSaveMediaMessage(encmedia)
  rano = getRandom('.webp')
  await ffmpeg(`./${media}`)
  .inputFormat(media.split('.')[1])
  .on('start', function (cmd) {
  console.log(`Started : ${cmd}`)
  })
  .on('error', function (err) {
  console.log(`Error : ${err}`)
  exec(`webpmux -set exif ${addMetadata('infinity', 'bot')} ${rano} -o ${rano}`, async (error) => {
  fs.unlinkSync(media)
  tipe = media.endsWith('.mp4') ? 'video' : 'gif'
  reply(`Falha na conversão de ${tipe} para sticker`)
  })
  })
  exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
  fs.unlinkSync(media)
  buffer = fs.readFileSync(rano)
  lz.sendMessage(from, buffer, sticker, {quoted: selo2})
  fs.unlinkSync(rano)
  })
  } else {
  reply(`envie e marque uma foto ou video com no maximo 10 segundos manito`)
  }
  break
  
  //=======================================\\
  
case 'attp':
TextoATTP = q
try {
if (args.length == 0) return reply(`Exemplo: ${prefix + command} lzdomina`)
reply(enviar.espere)
ResultadoATTP = await getBuffer(`http://api-exteam.herokuapp.com/api/fun/attp?apikey=${alekey}&text=${TextoATTP}`)
await lz.sendMessage(from, ResultadoATTP, sticker, { quoted: selo})
} catch {
try {
ResultadoATTP = await getBuffer(`https://api.xteam.xyz/attp?file&text=${TextoATTP}`)
await lz.sendMessage(from, ResultadoATTP, sticker, { quoted: selo})
} catch {
reply('erro na api...')
}
}
break
  
  //=======================================\\
  
  case 'rename': // creditos: aleatory bot
  case 're':
  if (!isQuotedSticker) return reply('Marque uma figurinha...')  
  var namaPackss = q.substring(0, q.indexOf('/') - 0)
  var authorPackss = q.substring(q.lastIndexOf('/') + 1)
  texto = body.slice(7)
  reply(enviar.espere)
  stiker_wm = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  dlstiker_wm = await lz.downloadAndSaveMediaMessage(stiker_wm)
  stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
  packname = namaPackss;
  author = authorPackss;
  exif321 = getRandom('.exif')
  exifst = getRandom('.webp')
  googlelink = ` `;
  applelink = ` `;
  json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
  len = JSON.stringify(json).length
  f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
  aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
  if (len > 256) {
  len = len - 256
  aaa.unshift(0x01)
  } else {
  aaa.unshift(0x00)
  }
  fff = Buffer.from(aaa)
  ffff = Buffer.from(JSON.stringify(json))
  if (len < 16) {
  len = len.toString(16)
  len = "0" + len
  } else {
  len = len.toString(16)
  }
  ff = Buffer.from(len, "hex")
  wm = Buffer.concat([f, ff, fff, ffff])
  fs.writeFile(exif321, wm, function(err) {
  if (err) return console.log(err);
  exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
  if (err) return console.log(err);
  lz.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: selo})
  fs.unlinkSync(exifst)
  fs.unlinkSync(exif321)
  fs.unlinkSync('undefined.webp')
  })
  });
  break
  
  // ==========/ P l a y s \========== \\
  
case 'play':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}play rei lacoste`)
reply(enviar.espere)
anu = await axios.get(`https://lzmods-api.xyz/api/yt/playmp3?nome=${q}&apikey=lz`)
let resultadoplay = `
🍀 a Musica「 ${q} 」Foi Encontrada Com Sucesso! 🍀

☔Título : ${anu.data.resultado.titulo}
☔Canal : ${anu.data.resultado.canal}
☔Views : ${anu.data.resultado.views}
☔Lançamento : ${anu.data.resultado.lançamento}

Aguarde o Envio Do Audio...
Audios Muito Pesadas Nao Serão Enviados.`
buffer = await getBuffer(anu.data.resultado.thumb)
sendButImage(from,`${resultadoplay}`,
`💾 Caso Queira Outro Tipo Selecione Abaixo 💾`, buffer,
[{buttonId:`.playdocumentokk ${anu.data.resultado.titulo}`, buttonText: {displayText: '📄 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐨 📄'}, type: 1},
{buttonId: `${prefix}playvideo ${anu.data.resultado.titulo}`, buttonText: {displayText: '🎥 𝐕𝐢𝐝𝐞𝐨 🎥'}, type:1}]);
let audee = await getBuffer(anu.data.resultado.download)
lz.sendMessage(from, audee, audio, {quoted: info, mimetype: 'audio/mp4'})
break
  
  case 'playvideo':
  if (!isRG) return reply(`${NotRG}`)
  playvideo = args.join(' ')
  reply(`
  Aguarde o Envio Do Video...
  Videos Muito Pesados Nao Serão Enviados.`)
  anu = await axios.get(`https://lzmods-api.xyz/api/yt/playmp4?nome=${q}&apikey=lz`)
  let videomsc = await getBuffer(anu.data.resultado.download)
  lz.sendMessage(from, videomsc, video, {quoted: selo, mimetype: 'video/mp4'})
  break
  
  case 'playdocumentokk':
  if (!isRG) return reply(`${NotRG}`)
  reply(`
  Aguarde o Envio Do Documento...
  Documentos Muito Pesados Nao Serão Enviados.`)
  anu = await axios.get(`https://lzmods-api.xyz/api/yt/playmp3?nome=${q}&apikey=lz`)
  let audeb = await getBuffer(anu.data.resultado.download)
  lz.sendMessage(from, audeb, document, {quoted: selo, mimetype: 'audio/mp3', filename: `${anu.resultado.titulo}.mp3`})
  break
  
  //=====================================\\
  
  case 'playdoc':
  case 'playdocumento':
  if (!isRG) return reply(`${NotRG}`)
  if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}playdoc rei lacoste`)
  reply(enviar.espere)
  playdoc = body.slice(8)
  anu = await axios.get(`https://lzmods-api.xyz/api/yt/playmp3?nome=${q}&apikey=lz`)
  let resultadodoc = `
  💎 a Musica「 ${q} 」Encontrada Com Sucesso! 💎
  
  📌Título : ${anu.data.resultado.titulo}
  📍Canal : ${anu.data.resultado.canal}
  📌Views : ${anu.data.resultado.views}
  
  Aguarde o Envio Do Documento...
  Documentos Muito Pesados Nao Serão Enviados.`
  let aude = await getBuffer(anu.data.resultado.download)
  buffer = await getBuffer(anu.data.resultado.thumb)
  lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultadodoc}`})
  lz.sendMessage(from, aude, document, {quoted: info, mimetype: 'audio/mp3', filename: `${anu.data.resultado.titulo}.mp3`})
  break
  
  //=====================================\\
  
  case 'play2':
  if (!isRG) return reply(`${NotRG}`)
  if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}play2 rei lacoste`)
  play2txt = args.join(' ')
  reply(enviar.espere)
  anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${play2txt}&apikey=apiteam`)
  let resultado3 = `
  💈 Musica Encontrada Com Sucesso! 💈
  
  ☄️Título : ${anu.titulo}
  ☄️Canal : ${anu.canal}
  ☄️Views : ${anu.views}
  ☄️Lançada Em : ${anu.data}
  
  Aguarde o Envio...
  Audios Muito Pesadas Nao Serão Enviadas.`
  result = await getBuffer(anu.url)
  buffer = await getBuffer(anu.thumb)
  lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultado3}`})
  lz.sendMessage(from, result, audio, {quoted: info, mimetype: 'audio/mp4'})
  break
  
  //=====================================\\
  
  case 'playmp4':
  if (!isRG) return reply(`${NotRG}`)
  if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}playmp4 rei lacoste`)
  reply(enviar.espere)
  anu = await axios.get(`https://lzmods-api.xyz/api/yt/playmp4?nome=${q}&apikey=lz`)
  let resultadomp4 = `
  ✝️ Musica「 ${q} 」Foi Encontrada Com Sucesso! ✝️
  
  🎈Título : ${anu.data.resultado.titulo}
  🎈Canal : ${anu.data.resultado.canal}
  🎈Views : ${anu.data.resultado.views}
  🎈Lançada Em : ${anu.data.resultado.lançamento}
  
  Aguarde o Envio...
  Videos Muito Pesadas Nao Serão Enviadas.`
  let resultt = await getBuffer(anu.data.resultado.download)
  buffer = await getBuffer(anu.data.resultado.thumb)
  lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultadomp4}`})
  lz.sendMessage(from, resultt, video, {quoted: selo, mimetype: 'video/mp4'})
  break
  
  //=====================================\\
  
  case 'ytmp4':
  if (!isRG) return reply(`${NotRG}`)
  if (!q) return reply(`exemplo: ${prefix}ytmp4 [ Link Do Video ]`)
  reply(enviar.espere)
  ase = await y2mateV(q).catch(e => {
  reply('Erro🧸')
  })
  vidionye = await getBuffer(ase[0].link)
  await lz.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: selo})
  break
  
  //=====================================\\
  
  case 'play3':
  if (!isRG) return reply(`${NotRG}`)
  reply(enviar.espere)
  play3 = args.join(' ')
  send = await fetchJson(`https://kauan-ofc.herokuapp.com/api/play?musica=${play3}`) 
  let ku = `
  💎Musica Encontrada Com Sucesso!💎
  
  Titulo: ${send.titulo}
  Tamanho: ${send.tamanho}
  Visualizações: ${send.views}
  Likes: ${send.likes}`
  img = await getBuffer(send.link_image)
  lz.sendMessage(from, img, image, {quoted: selo, caption: ku})
  aud = await getBuffer(send.link_musica)
  lz.sendMessage(from, aud, audio, {quoted: selo, mimetype: 'audio/mp4'})
  break
  
  // ==========/  G r u p o s \========== \\
  
case 'perfil':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(`comando apenas pode ser ultilizado em grupod amigo(a) :)`)
try {
infinity = await lz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
infinity = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const txtperfil = `           「 🎃 PERFIL 🎃 」

👶 Nome : ${pushname}
🪀 Número : wa.me/${sender.split("@")[0]}
🤠 Usuario Vip? ${isVipBot}
🐂 Nível Gado(a) : ${nivel+gado}%
🌈 Nível Gay : ${lgb+t}%
👽 Nível Autista : ${au+tista}%
👺 Nível Comunista : ${comu+nista}%
🥴 Nível Doido(a) : ${lou+cura}%
🕵️‍♀️ Cargo No Grupo: ${isCargoGP}

👨‍🦳 Conselho 👨‍🦳
${conselho}`
fotodeperfil = await getBuffer(infinity)
lz.sendMessage(from, fotodeperfil , image, {caption: txtperfil, quoted: selo})
break

case 'linkgp':
case 'link':
if (!isRG) return reply(`${NotRG}`)
if (!isGroupAdmins) return reply('so adm pode executar seu membro comum miseravel')
if (!isGroup) return reply('so pra grupos cabaço')
if (!isBotGroupAdmins) return reply('eu preciso ser adm seu burro')
var link = await lz.groupInviteCode(from)
reply(`
Aqui Esta:
https://chat.whatsapp.com/${link}

Num Va Divulgar La Na Pqp n em 🤨
`)
break
  
  case 'w':
  case 'ademir':
  case 'ademiro':
  case 'daradm':
  case 'promote':
  case 'promover':
  case 'adm':
  if (!isRG) return reply(`${NotRG}`)
    if (!isGroup) return reply('apenas para grupos')
    if (!isGroupAdmins) return reply('apenas para admins')
    if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque Alguem Para Virar Adm')
  setTimeout(function() {}, 2000);
  if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
  entah = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (exe1.length > 1) {
  var M_exe = []
  for (let cut of exe1) {
  M_exe.push(cut)
  }
  lz.groupMakeAdmin(from, M_exe)
  } else {
  lz.groupMakeAdmin(from, [exe1[0]])
  }
  } else {
  exe1 = info.message.extendedTextMessage.contextInfo.participant
  lz.groupMakeAdmin(from, [exe1])
  reply(`@${num.split('@')[0]} Eo Novo Ademir Do Grupo ${groupName}`)
  }
  break
  
  case 'membrocomum':
  case 'gaysupremo':
  case 'lzdomina':
  case 'demote':
  case 'promover':
  if (!isRG) return reply(`${NotRG}`)
  if (info.message.extendedTextMessage.contextInfo.participant == NumeroDoDono) return reply(`❬ ❎ ❭ ${pushname} Não Posso Remover Meu Dono De Adm Seu Burro ❬ ❎ ❭ `)
    if (!isGroup) return reply('apenas para grupos')
    if (!isGroupAdmins) return reply('apenas para admins')
    if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque Alguem Para Virar Adm')
  setTimeout(function() {}, 2000);
  if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
  entah = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (exe1.length > 1) {
  var M_exe = []
  for (let cut of exe1) {
  M_exe.push(cut)
  }
  lz.groupDemoteAdmin(from, M_exe)
  } else {
  lz.groupDemoteAdmin(from, [exe1[0]])
  }
  } else {
  exe1 = info.message.extendedTextMessage.contextInfo.participant
  lz.groupDemoteAdmin(from, [exe1])
  reply(`@${num.split("@")[0]} Eo Novo Membro Comum Do Grupo ${groupName}`)
  }
  break
  
  //=====================================\\
  
  case 'gpconfig':
  case 'goconf':
  case 'gp':
  if (!isRG) return reply(`${NotRG}`)
  sendBut(from,`Escolha Abaixo Oque Você Deseja Fazer`,`${NomeDoBot}`,
  [
              {              
                buttonId: `.grupo f`,
                buttonText: {
                  displayText:  `🔰 ҒᎬᏟᎻᎪᎡ ᏀᎡႮᏢϴ 🔰`,
                },
                type: 1,
              },
              {              
                buttonId: `.grupo a`,
                buttonText: {
                  displayText:  `💠 ᎪᏴᎡᏆᎡ ᏀᎡႮᏢϴ 💠`,
                },
                type: 1
              },
            ]);
  break
            
  //=====================================\\
  
  case 'grupo':  // Creditos: Aleatory Bot
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply(`SÓ EM GRUPOS`)
  if (!isGroupAdmins) return reply(`VOCÊ PRECISA SER ADMININASTROR`)
  if (!isBotGroupAdmins) return reply(`BOT PRECISA SER ADMININASTROR`)
  if (args[0] === 'a') {
  await lz.groupSettingChange(from, GroupSettingChange.messageSend, false)
  reply(`🎃 GRUPO ABERTO PARA TODOS COM SUCESSO 💎`)
  } else if (args[0] === 'f') {
  await lz.groupSettingChange(from, GroupSettingChange.messageSend, true)
  reply(`GRUPO FECHADO PARA ADMS COM SUCESSO`)
  }				 
  break 
  
  //=====================================\\
  
  case 'antifake':
  if (!isRG) return reply(`${NotRG}`)
  try {
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (args.length < 1) return reply('Hmmmm')
  if (args[0] === 'on') {
  if (isAntiFake) return reply('Ja esta ativo')
  antifake.push(from)
  fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antifake.json', JSON.stringify(antifake))
  reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
  } else if (args[0] === 'off') {
  antifake.splice(from, 1)
  fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antifake.json', JSON.stringify(antifake))
  reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
  } else {
  reply(`on ativa e off desativa brow exemplo: ${prefix + command} on`)
  }
  } catch {
  reply('Deu erro, tente novamente :/')
  }
  break
  
  case 'antilink':  // Creditos: Aleatory Bot
if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('so ppde ser usado em grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  if (args.length < 1) return reply('on ativa e off desativa brow | exemplo: antilink on')
  if (args[0] === 'on') {
  if (isAntiLink) return reply('ja ta ativado brow')
  antilink.push(from)
  fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antilink.json', JSON.stringify(antilink))
  reply('🌀 Ativado com sucesso 📝')
  } else if (args[0] === 'off') {
  if (!isAntiLink) return reply('Ja esta desativado brow')
  pesquisar = from
  processo = antilink.indexOf(pesquisar)
  while(processo >= 0){
  antilink.splice(processo, 1)
  processo = antilink.indexOf(pesquisar)
  }
  fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antilink.json', JSON.stringify(antilink))
  reply('‼️ Desativado com sucesso ✔️')
  } else {
  reply(`on ativa e off desativa brow exemplo: ${prefix + command} on`)
  }
    break


case 'antiligar':
case 'anticall':
case 'antiligacao':  
case 'antiligação':  
case 'antiligaçao':  
if (!isRG) return reply(`${NotRG}`)
if (!isOwner) return await reply('Apenas Meu Dono')
try {
if (args.length < 1) return reply(';-;')
if (args[0] === 'on') {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./~ Infinity Datab ~/funções/antis/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso ✔️')
} else if (args[0] === 'off') {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./~ Infinity Datab ~/funções/antis/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break
  
  //=====================================\\
  
  case 'hidetag':
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!groupAdmins) return reply('apenas para admins')
  var value = body.slice(9)
  var group = await lz.groupMetadata(from)
  var member = group['participants']
  var mem = []
  member.map( async adm => {
  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
  })
  var options = {
  text: value,
  contextInfo: { mentionedJid: mem },
  quoted: info
  }
  lz.sendMessage(from, options, text)
  break
  
  //=====================================\\
  
  case 'nomegp':  // Creditos: Aleatory Bot
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  lzmods = args.join(" ")
  lz.groupUpdateSubject(from, `${lzmods}`)
  lz.sendMessage(from, 'Nome Do Grupo Alterado Com Sucesso!', text, {quoted: selo})
  break
  
  case 'descgp':  // Creditos: Aleatory Bot
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  desc = args.join(" ")
  lz.groupUpdateDescription(from, `${desc}`)
  lz.sendMessage(from, 'descrição do grupo alterada com sucesso', text, {quoted: selo})
  break
  
  case 'fotogp':   // Creditos: Aleatory Bot
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  if (!isQuotedImage) return reply(`Use: ${prefix}fotogp <Marque uma foto>`)
  const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
  const media = await lz.downloadAndSaveMediaMessage(ftgp)
  await lz.updateProfilePicture(from, media)
  reply(`Foto do grupo alterada com sucesso ☢️`) 
  break
  
  //=====================================\\
  
  case 'ban':  // Creditos: Aleatory Bot
    if (!isGroup) return reply('apenas para grupos')
    if (!isGroupAdmins) return reply('esse comando so pode ser usado pro administradores')
    if (!isBotGroupAdmins) return reply('o bot nao e adm entao nao posso executar esse comando')
    if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem')
    if (info.message.extendedTextMessage.contextInfo.participant == NumeroDoDono) return reply('Não posso remover meu dono.')
    if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('ei ei ei q merda e essa kkkkk')
    setTimeout(function() {}, 2000);
    if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
    entah = info.message.extendedTextMessage.contextInfo.mentionedJid
    if (exe1.length > 1) {
    var M_exe = []
    for (let cut of exe1) {
    M_exe.push(cut)
    }
    lz.groupRemove(from, M_exe)
    } else {
    lz.groupRemove(from, [exe1[0]])
    }
    } else {
    exe1 = info.message.extendedTextMessage.contextInfo.participant
    lz.groupRemove(from, [exe1])
    }
    break
  
  //=====================================\\
  
  case 'voltar':
  case 'reviver':
  if (!isRG) return reply(`${NotRG}`)
    if (!isGroup) return reply('apenas para grupos')
    if (!isGroupAdmins) return reply('esse comando so pode ser usado pro administradores')
    if (!isBotGroupAdmins) return reply('o bot nao e adm entao nao posso executar esse comando')
    if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem')
    if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('ei ei ei q merda e essa kkkkk')
    setTimeout(function() {}, 2000);
    if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
    entah = info.message.extendedTextMessage.contextInfo.mentionedJid
    if (exe1.length > 1) {
    var M_exe = []
    for (let cut of exe1) {
    M_exe.push(cut)
    }
    lz.groupAdd(from, M_exe)
    } else {
    lz.groupAdd(from, [exe1[0]])
    }
    } else {
    exe1 = info.message.extendedTextMessage.contextInfo.participant
    lz.groupAdd(from, [exe1])
    }
    break
  
  //=====================================\\
  
  
  
  //=====================================\\
  
  case 'add':
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (!isBotGroupAdmins) return reply('o bot precisa ser adm')
  if (args.length < 1) return reply('quem vc quer que eu adicione?')
  if (args[0].startsWith('08')) return reply('Use o código do país')
  try {
  num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
  lz.groupAdd(from, [num])
  } catch (e) {
  console.log('Error :', e)
  reply('Falha ao adicionar alvo, talvez porque esteja privado')
  }
  break
  
  //=====================================\\
  
  case 'kick':  // Creditos: Aleatory Bot
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  const dltp = body.slice(6)
  if (dltp.length > 14)return reply(`Exemplo : ${prefix}kick @55439220420`) 
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o alguem por @ que você quer remover do grupo!') 
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  teks = 'F PRA ELE KKKK\n'
  for (let _ of mentioned) {
  teks += `@${_.split('@')[0]}\n`
  }
  mentions(teks, mentioned, true)
  lz.groupRemove(from, mentioned)
  } else {
  mentions(`F PRA ELE KKKK`, mentioned, true)
  lz.groupRemove(from, mentioned)
  }
  break
  
  //=====================================\\
  
  case 'admins':
  case 'ademiros':  // Creditos: Aleatory Bot
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  teks = `Lista de admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
  no = 0
  for (let admon of groupAdmins) {
  no += 1
  teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
  }
  mentions(teks, groupAdmins, true)
  break
  
  //=======================================\\
  
  case 'simi':
  if (!isRG) return reply(`${NotRG}`)
  if (args.length < 1) return reply(`Use ${prefix}simi texto`)
  try { 
  anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
  if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
  lz.sendMessage(from, `${anu.success} 🐤`, text, {quoted: info})
  } catch {
  reply("erro ao executar comando")
  }
  break
  
  //=======================================\\
  
  case 'marcar':
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  members_id = []
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += '\n\n'
  for (let mem of groupMembers) {
  teks += `[#] @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
  }
  mentions(teks, members_id, true)
  break
  
  //=====================================\\
  
  case 'marcar2':
  if (!isRG) return reply(`${NotRG}`)
  members_id = []
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += '\n\n'
  for (let mem of groupMembers) {
  teks += `--> https://wa.me/${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
  }
  lz.sendMessage(from, teks, text, {detectLinks: false, quoted: info})
  break
  
  //=====================================\\
  
  case 'ler':
  if (!isRG) return reply(`${NotRG}`)
  if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
  const media = await lz.downloadAndSaveMediaMessage(encmedia)
  reply(enviar.espere)
  await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
  .then(teks => {
  reply(teks.trim())
  fs.unlinkSync(media)
  })
  .catch(err => {
  reply(err.message)
  fs.unlinkSync(media)
  })
  } else {
  reply('Só uma foto mano')
  }
  break
  
  //=====================================\\
  
  case 'ocr':
  if (!isRG) return reply(`${NotRG}`)
  if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
  const media = await lz.downloadAndSaveMediaMessage(encmedia)
  reply(enviar.espere)
  await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
  .then(teks => {
  reply(teks.trim())
  fs.unlinkSync(media)
  })
  .catch(err => {
  reply(err.message)
  fs.unlinkSync(media)
  })
  } else {
  reply('marque uma foto mano ')
  }
  break
  
  // ==========/  Consultas \========== \\
  
  case 'consultarddd':
case 'ddd':
  if (args.length < 1) return reply(`Cade o DDD ._.? Exemplo: ${prefix + command} 62`)
culz = await axios.get(`https://lzmods-api.xyz/api/consultar/ddd?ddd=${q}&apikey=lz`)
dede = `
🔎 Consulta De DDD 🔍

DDD INFORMADO: ${q}
ESTADO OBTIDO: ${culz.data.resultado.estado}

Cidades Relacionadas:
${culz.data.resultado.cidades}
`
 lz.sendMessage(from, dede, text, {quoted: selo})
break

case 'consultarip':
  case 'ip':
  if (!isVIP) return reply(`apenas para usuários vips`)
  if (args.length < 1) return reply(`Cade o CNPJ ._.? Exemplo: ${prefix + command} 8.8.8.8`)
reply(enviar.espere)
sendee = await axios.get(`https://lzmods-api.xyz/api/consultar/ip?ip=${q}&apikey=lz`)
var lzdominaa = `
🔎 Consulta De IP 🔍

IP INFORMADO: ${q}
CONTINENTE: ${sendee.data.resultado.continente}
SIGLA DO CONTINENTE: ${sendee.data.resultado.continente_sigla}
País: ${sendee.data.resultado.país}
Sigla Do País: ${sendee.data.resultado.país_sigla}
capital: ${sendee.data.resultado.capital}
ddd: ${sendee.data.resultado.ddd}
Países Vizinhos: ${sendee.data.resultado.países_vizinhos}
Cidade: ${sendee.data.resultado.cidade}
Região: ${sendee.data.resultado.região}
Latitude: ${sendee.data.resultado.latitude}
Longitude: ${sendee.data.resultado.longitude}
ASN: ${sendee.data.resultado.asn}
ISP: ${sendee.data.resultado.isp}
Fuso Horário: ${sendee.data.resultado.fuso_horário}
Moeda: ${sendee.data.resultado.moeda}
Codigo Da Moeda: ${sendee.data.resultado.moeda_code}
Simbolo Da Moeda: ${sendee.data.resultado.símbolo_da_moeda}

`
 lz.sendMessage(from, lzdominaa, text, {quoted: selo})
break

case 'consultarcnpj':
case 'cnpj':
if (!isVIP) return reply(`apenas para usuários vips`)
  if (args.length < 1) return reply(`Cade o CNPJ ._.? Exemplo: ${prefix + command} 27865757000102`)
reply(enviar.espere)
cn = await axios.get(`https://lzmods-api.xyz/api/consultar/cnpj?cnpj=${q}&apikey=lz`)
var cnpjj = `
🔎 Consulta De CNPJ 🔍

CNPJ INFORMADO: ${q}
Nome Do Titular: ${cn.data.resultado.nome}
Emitido EM: ${cn.data.resultado.criado_em}
Atividade: ${cn.data.resultado.atividade_principal}
Localidade: ${cn.data.resultado.local}
Situaçao: ${cn.data.resultado.situaçao}
Sigla Do Estado: ${cn.data.resultado.sigla_do_estado}
Telefone: ${cn.data.resultado.telefone}
Cep: ${cn.data.resultado.cep}
Numero Da Casa: ${cn.data.resultado.numero_da_casa}
`
 lz.sendMessage(from, cnpjj, text, {quoted: selo})
break

case 'consultarcep':
case 'cep':
if (!isVIP) return reply(`apenas para usuários vips`)
  if (args.length < 1) return reply(`Cade o CEP ._.? Exemplo: ${prefix + command} 01153000`)
reply(enviar.espere)
cu = await axios.get(`https://lzmods-api.xyz/api/consultar/cep?cep=${q}&apikey=lz`)
var cepp = `
🔎 Consulta De Cep 🔍

CEP INFORMADO: ${q}
LOCAL: ${cu.data.resultado.local}
LOCALIDADE: ${cu.data.resultado.localidade}
BAIRRO: ${cu.data.resultado.bairro}
Sigla Do Estado: ${cu.data.resultado.uf}
DDD: ${cu.data.resultado.ddd}
IBGE: ${cu.data.resultado.ibge}
GIA: ${cu.data.resultado.gia}
SIAFI: ${cu.data.resultado.siafi}
`
 lz.sendMessage(from, cepp, text, {quoted: selo})
break
    
    case 'nick':
    case 'gerarnick':
    case 'fazernick':
      if (args.length < 1) return reply(`Cade o Nick ._.? Exemplo: ${prefix + command} lzmods`)
    reply(enviar.espere)
    send = await axios.get(`https://lzmods-api.xyz/api/tools/fazernick?nick=${q}&apikey=lz`)
    var nick = `
    ✨ Nicks Com o Nome [ ${q} ] Gerados Com Sucesso ✨
    
${send.data.resultado.Circled}
${send.data.resultado.Fullwidth}
${send.data.resultado.Parenthesized}
${send.data.resultado.Squared}
${send.data.resultado.Inverted}
${send.data.resultado.Reversed}
${send.data.resultado.Superscript}
${send.data.resultado.Subscript}
${send.data.resultado.Stroked}`
    lz.sendMessage(from, nick, text, {quoted: selo})
    break
  
  case 'anagrama':
  if(!isGroup) return reply('apenas para grupos')
  const infinitybot = Math.floor(Math.random() * PalavrasDoAnagrama.length)
  if(args.length == 0) return reply('use anagrama on para ativar o jogo\nou para desativar use anagrama off')
  if (args[0] === 'on') {
  if(fs.existsSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`)) {
  let anagramaa = JSON.parse(fs.readFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`))
  reply(`o anagrama ja foi iniciado neste grupo`)
  reply(`
  ╔┅═┅══⟮⛓️⟯══┅═┅═᳀
  ║💎 Descubra A Palavra
  ║
  ║➤️ Palavra:「 ${anagramaa.embaralhada} 」
  ║
  ║➤ Dica:「 ${anagramaa.dica} 」
  ║
  ╚┅═┅══⟮🌟️⟯══┅═┅═᳀`)
  } else {
  fs.writeFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`, `${JSON.stringify(PalavrasDoAnagrama[infinitybot])}`)
  lz.sendMessage(from, `
  ╔┅═┅══⟮⛓️⟯══┅═┅═᳀
  ║💎 Descubra A Palavra
  ║
  ║➤️ Palavra:「 ${PalavrasDoAnagrama[infinitybot]. embaralhada} 」
  ║
  ║➤ Dica:「 ${PalavrasDoAnagrama[infinitybot].dica} 」
  ║
  ╚┅═┅══⟮🌟️⟯══┅═┅═᳀
  `,MessageType.text)
  }
  } else if (args[0] === 'off') {
  if(!fs.existsSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`)) return reply('o jogo ja esta desativado brow')
  fs.unlinkSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`)
  reply("desativado com sucesso")
  }
  break
          
  case 'next':
  case 'nextanagrama':  
  if (!isGroupAdmins) return reply('somente adms')
  if (!isVIP) return reply(`${NotVIP}`)
  fs.unlinkSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`)
  const next = Math.floor(Math.random() * PalavrasDoAnagrama.length)
  fs.writeFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`, `${JSON.stringify(PalavrasDoAnagrama[next])}`)
  lz.sendMessage(from, `
  ╔┅═┅══⟮⛓️⟯══┅═┅═᳀
  ║💎 Descubra A Palavra
  ║
  ║➤️ Palavra:「 ${PalavrasDoAnagrama[next].embaralhada} 」
  ║
  ║➤ Dica:「 ${PalavrasDoAnagrama[next].dica} 」
  ║
  ╚┅═┅══⟮🌟️⟯══┅═┅═᳀
  `,MessageType.text)
  break
  
  case 'revelar':
  case 'revelaranagrama':  
  if (!isGroupAdmins) return reply('somente adms')
  if (!isVIP) return reply(`${NotVIP}`)
  let revelar = JSON.parse(fs.readFileSync(`./~ Infinity Datab ~/funções/logs/anagrama-${from}.json`))
  reply (`
  ╔┅═┅══⟮⛓️⟯══┅═┅═᳀
  ║
  ║➤️ Palavra Embaralhada:「 ${revelar.embaralhada} 」
  ║
  ║➤ Palavra Original:「 ${revelar.original} 」
  ║
  ╚┅═┅══⟮🌟️⟯══┅═┅═᳀
  `)
  break
  
  //=====================================\\
  
  case 'ling':
  if (!isRG) return reply(`${NotRG}`)
  lzdomina = `  
  'af': 'Afrikaans',
    'sq': 'Albanian',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'ca': 'Catalan',
    'zh': 'Chinese',
    'zh-cn': 'Chinese (Mandarin/China)',
    'zh-tw': 'Chinese (Mandarin/Taiwan)',
    'zh-yue': 'Chinese (Cantonese)',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'en-au': 'English (Australia)',
    'en-uk': 'English (United Kingdom)',
    'en-us': 'English (United States)',
    'eo': 'Esperanto',
    'fi': 'Finnish',
    'fr': 'French',
    'de': 'German',
    'el': 'Greek',
    'ht': 'Haitian Creole',
    'hi': 'Hindi',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'id': 'Indonesian',
    'it': 'Italian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'la': 'Latin',
    'lv': 'Latvian',
    'mk': 'Macedonian',
    'no': 'Norwegian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pt-br': 'Portuguese (Brazil)',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sr': 'Serbian',
    'sk': 'Slovak',
    'es': 'Spanish',
    'es-es': 'Spanish (Spain)',
    'es-us': 'Spanish (United States)',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'ta': 'Tamil',
    'th': 'Thai',
    'tr': 'Turkish',
    'vi': 'Vietnamese',
    'cy': 'Welsh'`
  lz.sendMessage(from, lzdomina, text, {quoted: selo})
  break
  
  //=====================================\\
  
  case 'letra':
  if (!isRG) return reply(`${NotRG}`)
  if (args.length < 1) return reply('👽 Cade o nome da musica vadia 👽')
  anu = await fetchJson(`http://api-exteam.herokuapp.com/api/music/lirik?search=${q}&apikey=${ExApiKey}`)
  let xj = `${anu.result}`
  await lz.sendMessage(from, xj, text, {quoted: selo2})
  break
  
  //=====================================\\
  
  case 'traduzir':
  if (!isRG) return reply(`${NotRG}`)
  if (args.length == 0) return reply(`Exemplo: ${prefix + command} texto que você quer traduzir/codigo da linguagem, Clique No botão abaixo para saber como usar o traduzir e saber os códigos das linguagens`)
  txt = body.slice(9)
  teks1 = txt.split("/")[0];
  teks2 = txt.split("/")[1];
  anu = await fetchJson(`https://lzmods-api.herokuapp.com/others/tradutor?texto=${teks1}&linguagem=${teks2}&apikey=estreia`)
  const resultado = `${anu.resultado}`
  sendBut(from,`Palavra Original: ${teks1}\nPalavra Traduzida: ${resultado}\nLinguagem: ${teks2}`,`${NomeDoBot}`,
  [
              {              
                buttonId: `.helptdz`,
                buttonText: {
                  displayText:  `🔰 𝘾𝙤𝙢𝙤 𝙐𝙨𝙖𝙧 🔰`,
                },
                type: 1,},]);
  break
  
  //=====================================\\
  
  case 'helptdz':
  if (!isRG) return reply(`${NotRG}`)
  const helptdzz = `Exemplo: ${prefix}traduzir texto que você quer traduzir/codigo da linguagem, envie ${prefix}idiomas para saber os codigos das linguagens disponíveis ou clique no botão abaixo`
  sendBut(from,`${helptdzz}`,`${NomeDoBot}`,
  [
              {              
                buttonId: `.ling`,
                buttonText: {
                  displayText:  `🎃 𝐂𝐨́𝐝𝐢𝐠𝐨𝐬 𝐃𝐞 𝐋𝐢𝐧𝐠𝐮𝐚𝐠𝐞𝐧𝐬 🎃`,
                },
                type: 1,},]);
  break
  
  //=====================================\\
                  
  case 'pingg':
  case 'ping':
const varping = speed();
const ping = speed() - varping
var groups = lz.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = lz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var total = math(`${groups.length}*${privat.length}`)
await lz.updatePresence(from, Presence.composing)
const timestamp = speed();
uptime = process.uptime()
const latensi = speed() - timestamp
totalChat = await lz.chats.all()
sendBut(from,`
╭┈❲ 𝐏𝐢𝐧𝐠 𝐃𝐨 𝐁𝐨𝐭 ❳┈╮
┊
┊» ☣️ ${latensi.toFixed(4)} Segundos
┊
┊» 💬 ️Total De Chats ⟮ ${totalChat.length} ⟯
┊
┊» ☄️Bot Esta Ativo a
┊» ⟮ ${kyun(uptime)} ⟯
┊
╰┈❲ ✓ ${NickDoDono} • ❳┈╯`,`${NomeDoBot}`,
[{buttonId: `.menu`, buttonText: {displayText:  `💠 Ｍｅｎｕ 💠`,} ,type: 1,}]);
break
  
  //=====================================\\
  
  case 'simih':
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (args.length < 1) return reply('Hmmmm')
  if (Number(args[0]) === 1) {
  if (isSimi) return reply('O modo Simi está ativado ')
  samih.push(from)
  fs.writeFileSync('./~ Infinity Datab ~/funções/simi.json', JSON.stringify(samih))
  reply('Ativado com sucesso o modo simi neste grupo ✔️')
  } else if (Number(args[0]) === 0) {
  samih.splice(from, 1)
  fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
  reply('Sucesso ao desativar o modo simi neste grupo de grupo ✔️')
  } else {
  reply('1 para habilitar, 0 para desabilitar ')
  }
  break
  
  //=====================================\\
  
  case 'welcome':
  case 'bemvindo':
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (args.length < 1) return reply('🧐')
  if (Number(args[0]) === 1) {
  if (isWelkom) return reply('já esta ativo')
  welkom.push(from)
  fs.writeFileSync('./~ Infinity Datab ~/funções/welkom.json', JSON.stringify(welkom))
  reply('Ativado com sucesso o recurso Boas vindas do grupo✔️')
  } else if (Number(args[0]) === 0) {
  welkom.splice(from, 1)
  fs.writeFileSync('./~ Infinity Datab ~/funções/welkom.json', JSON.stringify(welkom))
  reply('Desativar com sucesso o recurso de boas-vindas neste grupo ✔️')
  } else {
  reply('welcome 1 para habilitar,welcome 0 para desabilitar')
  }
  break
  
  //=====================================\\
  
  case 'clone':
  if (!isRG) return reply(`${NotRG}`)
  if (!isGroup) return reply('apenas para grupos')
  if (!isGroupAdmins) return reply('apenas para admins')
  if (args.length < 1) return reply('Marque o alvo que você deseja clonar')
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('📌')
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
  let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
  try {
  pp = await lz.getProfilePicture(id)
  buffer = await getBuffer(pp)
  lz.updateProfilePicture(botNumber, buffer)
  mentions(`obrigado pela nova foto 🎃`, [jid], true)
  } catch (e) {
  reply('falhou, talvez a foto do lek seja privada')
  }
  break
  
  case 'transmissão':
  case 'transmitir':
  case 'bc':
  if (!isOwner) return reply('esse comando e so pro meu dono 🧐')
  anu = await lz.chats.all()
  if (isMedia && !info.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
  buff = await lz.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  
  sendButImage(_.jid,`💠「 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝘿𝙚 𝙄𝙢𝙖𝙜𝙚𝙢 」💠\n\n${body.slice(13)}`,
  `${NomeDoBot}`, buff,
  [{buttonId: `${prefix}comandos`, buttonText: {displayText: '💠 Ｍｅｎｕ 💠 '}, type:1}]
  );
  }
  reply('Transmissão De Foto Enviada a Todos os Chats Com Sucesso')
  } else if (isMedia && !info.message.audioMessage || isQuotedAudio) {
  encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
  buff = await lz.downloadMediaMessage(encmediaa)
  for (let _ of anu) {
  lz.sendMessage(_.jid, buff, audio, {caption: `💠「 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝘿𝙚 𝘼𝙪𝙙𝙞𝙤 」\n\n${body.slice(13)}`})
  }
  reply('Transmissão De Audio Enviada a Todos os Chats Com Sucesso')
  } else if (isMedia && !info.message.stickerMessage || isQuotedSticker) {
  encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
  buff = await lz.downloadMediaMessage(encmediaa)
  for (let _ of anu) {
  lz.sendMessage(_.jid, buff, sticker, {caption: `💠「 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝘿𝙚 𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 」\n\n${body.slice(13)}`})
  }
  reply('Transmissão De Figurinha Enviada a Todos os Chats Com Sucesso')
  } else if (isMedia && !info.message.videoMessage || isQuotedVideo) {
  encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
  buff = await lz.downloadMediaMessage(encmediaa)
  for (let _ of anu) {
  lz.sendMessage(_.jid, buff, video, {caption: `💠「 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝘿𝙚 𝙑𝙞𝙙𝙚𝙤 」\n\n${body.slice(13)}`})
  }
  reply('Transmissão De Video Enviada a Todos os Chats Com Sucesso')
  } else {
  for (let _ of anu) {
  sendBut(_.jid,`
  💠「 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 」💠`,`${body.slice(13)}`,`${NomeDoBot}`,
  [
              {              
                buttonId: `${prefix}menu`,
                buttonText: {
                  displayText:  `💠 ᎷᎬΝႮ 💠`,
                },
                type: 1
              },
            ]);
  }
  reply('Transmissão Enviada a Todos os Chats Com Sucesso')
  }
  break
  
  //=====================================\\
                    //FIM\\
  //=====================================\\
  
  default: 
  if (body == `${prefix}${command}`) {
  hsl = `
  *⟅❗ *CMD NÃO ENCONTRADO*❗⟆ *\n\n❯ Olá @${sender.split("@")[0]}!!\n❯ O comando: *${prefix}${command}*\n❯ Não existe ou digitou errado\n❯ Verifique usando ${prefix}menu ^^
  `
  lz.sendMessage(from, hsl, text, {quoted: selo2, contextInfo: {mentionedJid: [sender]}})
  }
  }
  } catch (err) {
  e = String(err)
  if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
  const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
  console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
  }
  }
  })
  }
  starts()
  
