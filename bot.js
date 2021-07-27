//#region 全域變數
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const auth = require('./JSONHome/auth.json');
const prefix = require('./JSONHome/prefix.json');

//#endregion

//#region 登入
client.login(auth.key);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


//#endregion


//#region message事件入口
client.on('message', msg => {


if (msg.content === '大哥哥') {
msg.channel.send('https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1591198024075.jpg');
}
if (msg.content === 'ㄐㄐ') 
{
msg.channel.send('https://i.imgur.com/vg1iqQP.jpg');
}

if (msg.content === '==') 
{
msg.reply('= =不會分開是腦殘嗎?');
}
if (msg.content === 'XiaoKa') 
{
msg.channel.send('臭甲');
}
if (msg.content === 'ok') 
{
msg.channel.send('https://na.cx/i/nixxWkg.gif');
}
if (msg.content === '佬') 
{
msg.channel.send('您就佬');
}
if (msg.content === '草') 
{
msg.channel.send('wwwwww');
}


 if (msg.content === 'やらないか') 
{
msg.channel.send('https://www.youtube.com/watch?v=w3D5wx-YLdI&t=78s');
}
    //前置判斷
    try {
        if (!msg.guild || !msg.member) return; //訊息內不存在guild元素 = 非群組消息(私聊)
        if (!msg.member.user) return; //幫bot值多拉一層，判斷上層物件是否存在
        if (msg.member.user.bot) return; //訊息內bot值為正 = 此消息為bot發送
    } catch (err) {
        return;
    }
       
    //字串分析
    try {
        let tempPrefix = '-1';
        const prefixED = Object.keys(prefix); //前綴符號定義
        prefixED.forEach(element => {
            if (msg.content.substring(0, prefix[element].Value.length) === prefix[element].Value) {
                tempPrefix = element;
            }
        });
        //實作
        switch (tempPrefix) {
            case '0': //文字回應功能
                const cmd = msg.content.substring(prefix[tempPrefix].Value.length).split(' '); //以空白分割前綴以後的字串

                switch (cmd[0]) {
                    case 'creeper?':
                        msg.channel.send('awwwman');
                        break;
                    case '貝塔化身':
                        msg.channel.send('https://na.cx/i/Z6p4NmB.gif');
                        break;
                     case '黃名子化身':
                        msg.channel.send('http://i.imgur.com/JfuAE.gif');
                        break;
                    case'射門指令07':
                    msg.channel.send('http://images.plurk.com/74e540b1b49384b9bee3a2b15cd3abae.gif');
                    break;
                    case'夙喵':
                        msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/869453664115367986/unknown.png');
                        break;
                    case'幽星':
                        msg.channel.send('https://www.youtube.com/channel/UCT-73qoVwAHz6YdDUeed2Qg');
                        break;
                    case'神威鬼鳴':
                        msg.channel.send('千本幼女\nhttps://www.youtube.com/watch?v=i1JR7IqrlsM\n東京蘿莉控\nhttps://www.youtube.com/watch?v=WPx5ZNXg-Ds\n那些硬盤\nhttps://www.youtube.com/watch?v=qhn4Q4F0G-Y&t=5s\n感覺自己是DIO噠！\nhttps://www.youtube.com/watch?v=VjlfZWElYeI\n呀啦那一卡\nhttps://www.youtube.com/watch?v=w3D5wx-YLdI&t=78s');
                        break;    
                    case '咪醬':
                        msg.channel.send('幹你娘!');
                        break;
                    case '貓好好醬':
                        msg.channel.send('貓好好喝');
                        break;    
                    case '卡祖笛':
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/869584322624098374/unknown.png');
                         break;
                    case '凱文':
                    msg.channel.send('https://cdn.discordapp.com/emojis/866724062297063456.png?v=1');
                         break; 
                    case '安城':
                    msg.channel.send('嬸嬸');
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/869452654462500884/unknown.png');
                    
                         break;
                    case '馬文':
                    msg.channel.send('我給你金色，拜託別再打死我了');
                         break; 
                    case 'renk':
                    msg.channel.send('!rank 拉幹');
                         break;  
                    case '虛擬紅蘿蔔':
                    msg.channel.send('https://cdn.discordapp.com/attachments/867963605042229318/868159881595719690/unknown.png');
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/868160020074881074/unknown.png')     
                         break;       
                    case '小咖':
                    msg.channel.send('Y我是那個剪三毛翻譯的那個小咖!Y');
                         break;
                    case '奶糖兔兔':
                    msg.channel.send('只有今天限定');
                    setTimeout(function(){ msg.channel.send('兔兔姐'); },800); 
                    setTimeout(function(){ msg.channel.send('泡湯'); },1400);      
                         break;
                    case '遊戲麻糬':
                    msg.channel.send('ㄟ幹是麻糬，ㄟ幹這可以吃嗎?');
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/869588208575479839/unknown.png');
                         break;        
                    case 'K太郎':
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/868159614896730112/unknown.png');
                         break; 
                     case '陶瓷娃娃':
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/868158090611154984/unknown.png');
                         break;           
                    case 'Q姆':
                     msg.channel.send('https://media.discordapp.net/attachments/865958262705094666/866955698003902474/oie_20101150fQ8PgjTg.gif');
		              break;
                     case '不要皮帶1':
                    msg.channel.send('https://media.discordapp.net/attachments/859435390103584778/863151607646257202/19ee7e81c24babc2.png?width=1154&height=649');
                         break;
                      case '不要皮帶2':
                    msg.channel.send('https://media.discordapp.net/attachments/859435390103584778/863153432804982784/2.png?width=1154&height=649');
                         break;    
                        case '邦尼':
                    msg.channel.send('!p https://www.youtube.com/watch?v=lCDeq-801eU');
                    break;
                    case '八國聯軍':
                    msg.channel.send('https://cdn.discordapp.com/attachments/857137488242147350/867723665072062484/image0.png');
                    break;  
                    
                    case 'myAvatar':
                        const avatar = GetMyAvatar(msg);
                        if (avatar.files) msg.channel.send(`${msg.author}`, avatar).catch(err => { console.log(err) });
                        break;
                    case '剪刀':
                     x = Math.floor(Math.random()*3);
                        msg.channel.send('等待結果..');

                     setTimeout(function(){ 

                        msg.channel.send('揭曉');
                                            }, 400); 
                    setTimeout(function()
                    {
                                 switch (x)
                                     {
                                    case 0:

                                    msg.channel.send('剪刀');
                                    msg.channel.send('平手');
                                    break;
                                    case 1:

                                    msg.channel.send('石頭');
                                    msg.channel.send('你輸ㄌ');
                                    break;
                                    case 2:
                                    msg.channel.send('布');
                                    msg.channel.send('你贏ㄌ');
                                    break;
                                    }

                    },600);
                break;
                    case '石頭':
                    x = Math.floor(Math.random()*3);
                        msg.channel.send('等待結果..');

                     setTimeout(function(){ 

                        msg.channel.send('揭曉');
                                            }, 400); 
                    setTimeout(function()
                    {
                                 switch (x)
                                     {
                                    case 0:

                                    msg.channel.send('剪刀');
                                    msg.channel.send('你贏ㄌ');
                                    break;
                                    case 1:

                                    msg.channel.send('石頭');
                                    msg.channel.send('平手');
                                    break;
                                    case 2:
                                    msg.channel.send('布');
                                    msg.channel.send('你輸ㄌ');
                                    break;
                                    }
                
                    },600);
                break;
                    case '布':
                     x = Math.floor(Math.random()*3);
                        msg.channel.send('等待結果..');

                     setTimeout(function(){ 

                        msg.channel.send('揭曉');
                                            }, 400); 
                    setTimeout(function()
                    {
                                 switch (x)
                                     {
                                    case 0:

                                    msg.channel.send('剪刀');
                                    msg.channel.send('你輸ㄌ');
                                    break;
                                    case 1:

                                    msg.channel.send('石頭');
                                    msg.channel.send('你贏ㄌ');
                                    break;
                                    case 2:
                                    msg.channel.send('布');
                                    msg.channel.send('平手');
                                    break;
                                    }
             
                    },600);
                    break;  
                }
                break;
            case '1': //音樂指令
               
                break;
//////////////////////////////////////////////////////////////////////////////////                
            case '2': //clear
               
                break;
         
 /////////////////////////////////////////////////////////////////////////////////              
        }
    } catch (err) {
        console.log('OnMessageError', err);
    }
});
//猜拳
        

         

   

//#endregion

//#region 子類方法
//獲取頭像
function GetMyAvatar(msg) {
    try {
        return {
            files: [{
                attachment: msg.author.displayAvatarURL('png', true),
                name: 'avatar.jpg'
            }]
        };
    } catch (err) {
        console.log('GetMyAvatar,Error');
    }
}

//#endregion