const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const webAppURL = "https://capable-salmiakki-ae37e1.netlify.app/";

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

/**
 * Получено новое входящее сообщение любого типа
 *  message_id: 10,
    from: {
      id: 214629051,
      is_bot: false,
      first_name: 'Nikita',
      last_name: 'Zheleznov',
      username: 'zidannn163',
      language_code: 'ru'
    },
    chat: {
      id: 214629051,
      first_name: 'Nikita',
      last_name: 'Zheleznov',
      username: 'zidannn163',
      type: 'private'
    },
    date: 1693057290,
    text: 'test'
 */
bot.on("message", async ({ chat, from, text }) => {
    if (text === "/start") {
        await bot.sendMessage(
            chat.id,
            `Привет, ${from.first_name} ${from.last_name}.
Ты пожешь проверить функционал
  /keyboard_buttons
  /inline_buttons
            `
        );
    }

    if (text === "/keyboard_buttons")
        await bot.sendMessage(
            chat.id,
            `Теперь должны быть показаны Keyboard-кнопки`,
            {
                reply_markup: {
                    keyboard: [
                        [{ text: "сайт", web_app: { url: webAppURL } }],
                        [({ text: "1.1" }, { text: "1.2" })],
                        [{ text: "2.1" }, { text: "2.2" }],
                    ],
                },
            }
        );

    if (text === "/inline_buttons")
        await bot.sendMessage(
            chat.id,
            `Теперь должны быть показаны inline-кнопки`,
            {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "test", web_app: { url: webAppURL } }],
                    ],
                },
            }
        );
});

// bot.on("text", async (...args) => {
//     console.log("text", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'text',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("animation", async (...args) => {
//     console.log("animation", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'animation',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("audio", async (...args) => {
//     console.log("audio", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'audio',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("channel_chat_created", async (...args) => {
//     console.log("channel_chat_created", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'channel_chat_created',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("contact", async (...args) => {
//     console.log("contact", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'contact',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("delete_chat_photo", async (...args) => {
//     console.log("delete_chat_photo", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'delete_chat_photo',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("document", async (...args) => {
//     console.log("document", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'document',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("game", async (...args) => {
//     console.log("game", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'game',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("group_chat_created", async (...args) => {
//     console.log("group_chat_created", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'group_chat_created',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("invoice", async (...args) => {
//     console.log("invoice", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'invoice',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("left_chat_member", async (...args) => {
//     console.log("left_chat_member", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'left_chat_member',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("location", async (...args) => {
//     console.log("location", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'location',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("migrate_from_chat_id", async (...args) => {
//     console.log("migrate_from_chat_id", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'migrate_from_chat_id',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("migrate_to_chat_id", async (...args) => {
//     console.log("migrate_to_chat_id", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'migrate_to_chat_id',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("new_chat_members", async (...args) => {
//     console.log("new_chat_members", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'new_chat_members',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("new_chat_photo", async (...args) => {
//     console.log("new_chat_photo", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'new_chat_photo',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("new_chat_title", async (...args) => {
//     console.log("new_chat_title", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'new_chat_title',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("passport_data", async (...args) => {
//     console.log("passport_data", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'passport_data',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("photo", async (...args) => {
//     console.log("photo", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'photo',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("pinned_message", async (...args) => {
//     console.log("pinned_message", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'pinned_message',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("sticker", async (...args) => {
//     console.log("sticker", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'sticker',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("successful_payment", async (...args) => {
//     console.log("successful_payment", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'successful_payment',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("supergroup_chat_created", async (...args) => {
//     console.log("supergroup_chat_created", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'supergroup_chat_created',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("video", async (...args) => {
//     console.log("video", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'video',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("video_note", async (...args) => {
//     console.log("video_note", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'video_note',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });

// /**
//  * Получено голосовое сообщение
//  *   {
//     "message_id": 21,
//     "from": {
//       "id": 214629051,
//       "is_bot": false,
//       "first_name": "Nikita",
//       "last_name": "Zheleznov",
//       "username": "zidannn163",
//       "language_code": "ru"
//     },
//     "chat": {
//       "id": 214629051,
//       "first_name": "Nikita",
//       "last_name": "Zheleznov",
//       "username": "zidannn163",
//       "type": "private"
//     },
//     "date": 1693059957,
//     "voice": {
//       "duration": 1,
//       "mime_type": "audio/ogg",
//       "file_id": "AwACAgIAAxkBAAMVZOoLdYbqUAp7aLiubtos_le1aNoAAqwtAALbD1FLG_GjS7sfEJYwBA",
//       "file_unique_id": "AgADrC0AAtsPUUs",
//       "file_size": 6470
//     }
//   },

//  */
// bot.on("voice", async (...args) => {
//     console.log("voice", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'voice',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("video_chat_started", async (...args) => {
//     console.log("video_chat_started", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'video_chat_started',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("video_chat_ended", async (...args) => {
//     console.log("video_chat_ended", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'video_chat_ended',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("video_chat_participants_invited", async (...args) => {
//     console.log("video_chat_participants_invited", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'video_chat_participants_invited',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("video_chat_scheduled", async (...args) => {
//     console.log("video_chat_scheduled", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'video_chat_scheduled',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("message_auto_delete_timer_changed", async (...args) => {
//     console.log("message_auto_delete_timer_changed", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'message_auto_delete_timer_changed',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("chat_invite_link", async (...args) => {
//     console.log("chat_invite_link", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'chat_invite_link',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("chat_member_updated", async (...args) => {
//     console.log("chat_member_updated", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'chat_member_updated',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
// bot.on("web_app_data", async (...args) => {
//     console.log("web_app_data", ...args);
//     await bot.sendMessage(
//         args[0].chat.id,
//         `Event 'web_app_data',
//     data: ${JSON.stringify(args, null, 2)}
//   `,
//         {}
//     );
// });
