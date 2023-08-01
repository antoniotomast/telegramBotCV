const express = require('express');
const { Telegraf } = require('telegraf');

require('dotenv').config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

//Config Telegraf
app.use(bot.webhookCallback('/telegram-bot'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);


app.post('/telegram-bot', (req, res) => {
    res.send('Hola amigos');
});

//COMANDOS

bot.start((ctx) => {
    ctx.reply(`¡Encantado de conocerte ${ctx.from.first_name} y bienvenido a este botCV! Soy Antonio y Aquí encontrarás información sobre mi vida profesional. No dudes en lanzar los comandos: /cv /about /skills /tecnologies /front /back /phone /email /github /linkedin

    Si quisieras preguntar algo en específico o estás interesado en mi perfil, no dudes en contactarme.

    Lanza el comando /help para ver el resto de opciones especificadas anteriormente.`
    );
});

bot.command('test', (ctx) => {
    ctx.reply('¿Funciona? Qué ilusión!!! Si estoy respondiendo es que han conseguido darme vida y soy un chatbot funcional 🥳'
    );
});

bot.command('help', (ctx) => {
    ctx.reply('No dudes en lanzar los comandos: /cv /about /skills /tecnologies /front /back /phone /email /github /linkedin'
    );
})

bot.command('about', (ctx) => {
    ctx.reply(`Soy Antonio Tomás. Acabo de formarme como desarrollador fullstack. Previamente a ello estudié el grado de comunicación audiovisual y estuve viviendo durante dos años en Irlanda dónde conocí a personas del sector IT gracias a los cuales despertó mi curiosidad por este maravilloso sector.
    
    Actualmente me hallo en búsqueda activa de empleo como desarrollador fullstack o backend. Si tienes más preguntas acerca de mí no dudes en usar los comandos de este bot o contactarme a través de cualquiera de los canales que habilito aquí.`
    );
});

bot.command('tecnologies', (ctx) => {
    ctx.reply('El stack tecnológico que utilizo actualmente es MEAN. Además uso Git como herramienta de control de versiones sobre todo a la hora de trabajar con proyectos en equipo. Para más información lanza los comandos /front o /back.'
    );
});

bot.command('front', async (ctx) => {
    await ctx.replyWithPhoto({ source: 'frontend.jpg' });
    await ctx.reply('Para el diseño de apps desde el lado del cliente utilizo: HTML/CSS con apoyo de Bootstrap, JavaScript, TypeScript y Angular.'
    );
});

bot.command('back', async (ctx) => {
    await ctx.replyWithPhoto({ source: 'backend.jpg' });
    await ctx.reply('Para el diseño de apps desde el lado del servidor utilizo: MongoDB/Mongoose como base de datos no relacional y MySQL como base de datos relacional, NodeJS/Express como entorno de ejecución para construir APIs, hacer endpoints para ser consumidos en el front y lanzar peticiones a las bases de datos.'
    );
});

bot.command('skills', (ctx) => {
    ctx.reply('Inglés ✅ Trabajo en equipo ✅ Flexibilidad ✅ Adaptabilidad ✅ Actitud positiva ✅ Compromiso ✅');
});

bot.command('phone', (ctx) => {
    const phone = 649502105;
    ctx.reply(`Contáctame vía whatsApp o llámame al número: +34 ${phone}`);
});

bot.command('email', (ctx) => {
    ctx.reply('Escríbeme a este email ✉ y te responderé tan pronto como sea posible: antoniotomassalinas@gmail.com'
    );
});

bot.command('github', (ctx) => {
    ctx.reply('Te invito a que eches un vistazo a los proyectos de mi repositorio de GitHub en este link: https://github.com/antoniotomast'
    );
});

bot.command('linkedin', (ctx) => {
    ctx.reply('¡Claro! Bienvenido a mi perfil de LinkedIn: https://www.linkedin.com/in/antoniotomast/');
});

bot.command('cv', async (ctx) => {
    await ctx.reply('¡Aquí tienes mi currículum! Espero que mi perfil profesional encaje con lo que buscas 😃'
    );
    await ctx.replyWithDocument({ source: 'antonioTomasCV.pdf' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
});
