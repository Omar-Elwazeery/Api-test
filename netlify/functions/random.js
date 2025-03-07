const sentences = [
  "أهلًا بالمسافر التائه بين الرمال، اجلس واسترح، وتفضل كأسًا من مشروب الصحاري الخطير، ودع الرياح تروي حكاياتها. 🍵 🌵",
  "2جملة عشوائية",
  "10جملة عشوائية"
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