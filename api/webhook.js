export default async function handler(req, res) {
  // Разрешаем CORS (чтобы запросы проходили с любого сайта)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    // ЗАМЕНИ НА СВОЙ ВЕБХУК ДИСКОРДА
    const DISCORD_URL = "https://discord.com/api/webhooks/1469307108208939110/32gYh7SY35oBW7MLqCoLNz6MBq-B-9dFAl5Vi8JFkxZaPoTupmfo8oHnafmfPRutvOV1";

    try {
      const response = await fetch(DISCORD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });

      res.status(200).send("Успешно переслано!");
    } catch (err) {
      res.status(500).send("Ошибка: " + err.message);
    }
  } else {
    res.status(405).send("Используйте POST запрос");
  }
}
