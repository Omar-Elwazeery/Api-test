const sentences = [
  "آراش بن زايد: باشید به پایک زنده زرهای عربی در توییچ خوش آمدید!، يعني مرحبا بك في ستريم اربيان دايس علي تويتش بلغة الزراتي 🐴 ⚔️",
  "انمار: صباحك سعيد ، شكرا لحضورك النهاردة ، اعتبر المكان مكانك و خد راحتك علشان قدامنا رحلة طويلة هتشاركنا فيها 👋🪽",
  "تاليا: اهلًا اهلًا اهلًا..! انا وغرابي بنرحب بيك!✨ بلاش اسئلة مملة وتضييع وقت، تعال ناكل شاورما وبعدين نروح نقتل كُلللللل  الي هناك دول 😋 بيو بيو بيو😋🏹",
  "شاهين الأسرار: أهلًا بيك يا ابني في الستريم! آه يا وجع الضهر... بتقول إيه؟ اللي دخل ده معاه فلوس؟ فلوووس؟ استنى بس أفرد ضهري كده وأرمي العصاية الخشب... والااااا! 🔮 🏃",
  "سردارالصحاري: أهلًا بالمسافر التائه بين الرمال، اجلس واسترح، وتفضل كأسًا من مشروب الصحاري الخطير، ودع الرياح تروي حكاياتها 🍵 🌵"
];


exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'text/plain'
  };

  try {
    // Get a random sentence
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];

    return {
      statusCode: 200,
      headers,
      body: randomSentence
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: 'Error getting random sentence'
    };
  }
}; 