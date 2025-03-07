const sentences = [
  "Hey $(user), did you know that the quick brown fox jumps over the lazy dog?",
  "$(user) is making plans while life happens!",
  "Don't let your doubts hold you back, $(user)!",
  "Keep going $(user), life goes on!",
  "$(user) believes in the beauty of their dreams.",
  "Stay strong $(user), it's the courage to continue that counts!",
  "$(user) is creating their own future!",
  "$(user) knows that happiness comes from their own actions.",
  "Hey $(user), the purpose of our lives is to be happy!",
  "Make it count, $(user)!"
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